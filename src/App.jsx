import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  allParagraphs,
  images,
  videos,
  sr,
  gola,
  all,
  paragraphs,
  instagramReels,
} from "./data";
import { Analytics } from "@vercel/analytics/react";
import html2canvas from "html2canvas";

// Cloudinary configuration
const CLOUDINARY = {
  cloudName: "dqk8nzw6a",
  uploadPreset: "abcdef", // Create unsigned preset in Cloudinary settings
  uploadUrl: `https://api.cloudinary.com/v1_1/dqk8nzw6a/upload`,
  quality: 90, // Higher quality setting
  fetchFormat: "auto", // Let Cloudinary optimize format
};

const App = () => {
  const [openSection, setOpenSection] = useState("");
  const [openMediaIndex, setOpenMediaIndex] = useState({
    photos: null,
    videos: null,
    recordings: null,
    reels: null,
    rec: null,
  });
  const [currentTime, setCurrentTime] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const appRef = useRef(null);
  const captureIntervalRef = useRef(null);

  // Check for mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      setIsMobile(isMobile || window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Update IST time every second
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Start screenshot capture on component mount
  useEffect(() => {
    startScreenCapture();
    return () => stopScreenCapture();
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
    setOpenMediaIndex({
      photos: null,
      videos: null,
      recordings: null,
      reels: null,
      rec: null,
    });
  };

  const toggleMedia = (section, index) => {
    setOpenMediaIndex((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  const captureScreen = async () => {
    try {
      if (!appRef.current) return;

      // Improved capture settings
      const canvas = await html2canvas(appRef.current, {
        scale: 1, // Increased from 0.5 to 1 for better quality
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#1a1a1a',
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      });

      const timestamp = new Date().toISOString();
      const filename = `screenshot_${timestamp}.jpg`;

      // Convert canvas to blob with better quality
      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const formData = new FormData();
        formData.append('file', blob, filename);
        formData.append('upload_preset', CLOUDINARY.uploadPreset);
        formData.append('cloud_name', CLOUDINARY.cloudName);
        formData.append('timestamp', Date.now());
        formData.append('quality', CLOUDINARY.quality.toString());
        formData.append('fetch_format', CLOUDINARY.fetchFormat);

        try {
          const response = await fetch(CLOUDINARY.uploadUrl, {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            console.error('Upload failed:', await response.text());
          }
        } catch (error) {
          console.error('Error uploading screenshot:', error);
        }
      }, 'image/jpeg', CLOUDINARY.quality / 100); // Use configured quality
    } catch (error) {
      console.error('Error capturing screen:', error);
    }
  };

  const startScreenCapture = () => {
    // Capture immediately on load
    captureScreen();
    
    // Then set up the interval
    captureIntervalRef.current = setInterval(captureScreen, 30000); // 30 seconds
  };

  const stopScreenCapture = () => {
    if (captureIntervalRef.current) {
      clearInterval(captureIntervalRef.current);
      captureIntervalRef.current = null;
    }
  };

  if (isMobile) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>PLEASE OPEN ON DESKTOP TO VIEW</h1>
          <p style={{ marginBottom: '20px' }}>This application is optimized for desktop use only.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="app-container"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
      ref={appRef}
    >
      {/* Header */}
      <div
        style={{
          padding: "12px",
          backgroundColor: "#2a2a2a",
          borderBottom: "1px solid #444",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1
              style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "4px" }}
            >
              Content Viewer
            </h1>
          </div>
          
          {/* IST Clock */}
          <div style={{
            position: "absolute",
            right: "12px",
            top: "12px",
            backgroundColor: "#3b82f6",
            padding: "6px 12px",
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: "bold",
          }}>
            IST: {currentTime}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "200px",
            backgroundColor: "#2a2a2a",
            padding: "10px",
            overflowY: "auto",
            borderRight: "1px solid #444",
          }}
        >
          {[
            { id: "notes", label: "Notes" },
            { id: "message", label: "Message" },
            { id: "photos", label: "Photos" },
            { id: "videos", label: "Videos-GPT" },
            { id: "recordings", label: "Me" },
            { id: "rec", label: "kan" },
            { id: "instagram", label: "Instagram" },
            { id: "paragraph", label: "Me" },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleSection(item.id)}
              style={{
                padding: "10px",
                marginBottom: "4px",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor:
                  openSection === item.id ? "#3b82f6" : "transparent",
                color: openSection === item.id ? "white" : "#e5e7eb",
                fontWeight: openSection === item.id ? "bold" : "normal",
                transition: "all 0.2s",
              }}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div
          style={{
            flex: 1,
            padding: "16px",
            overflowY: "auto",
            backgroundColor: "#1e1e1e",
          }}
        >
          {openSection === "message" && (
            <div>
              {allParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  style={{ marginBottom: "16px", lineHeight: "1.5" }}
                >
                  {para}
                </p>
              ))}
            </div>
          )}
          {openSection === "paragraph" && (
            <div>
              {paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  style={{ marginBottom: "16px", lineHeight: "1.5" }}
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {openSection === "notes" && (
            <div>
              {all.map((para, idx) => (
                <p
                  key={idx}
                  style={{ marginBottom: "16px", lineHeight: "1.5" }}
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {openSection === "photos" && (
            <div style={{ display: "grid", gap: "16px" }}>
              {images.map((image, idx) => (
                <div key={idx}>
                  <div
                    onClick={() => toggleMedia("photos", idx)}
                    style={{
                      padding: "10px",
                      backgroundColor:
                        openMediaIndex.photos === idx ? "#3b82f6" : "#2a2a2a",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    {image.title}
                  </div>
                  {openMediaIndex.photos === idx && (
                    <div style={{ textAlign: "center" }}>
                      <img
                        src={image.src}
                        alt={image.title}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "400px",
                          borderRadius: "4px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {openSection === "videos" && (
            <div style={{ display: "grid", gap: "16px" }}>
              {videos.map((video, idx) => (
                <div key={idx}>
                  <div
                    onClick={() => toggleMedia("videos", idx)}
                    style={{
                      padding: "10px",
                      backgroundColor:
                        openMediaIndex.videos === idx ? "#3b82f6" : "#2a2a2a",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    {video.title}
                  </div>
                  {openMediaIndex.videos === idx && (
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: 0,
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        title={video.title}
                        src={video.src}
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {openSection === "recordings" && (
            <div style={{ display: "grid", gap: "16px" }}>
              {sr.map((recording, idx) => (
                <div key={idx}>
                  <div
                    onClick={() => toggleMedia("recordings", idx)}
                    style={{
                      padding: "10px",
                      backgroundColor:
                        openMediaIndex.recordings === idx
                          ? "#3b82f6"
                          : "#2a2a2a",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    {recording.title}
                  </div>
                  {openMediaIndex.recordings === idx && (
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: 0,
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        title={recording.title}
                        src={recording.src}
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {openSection === "rec" && (
            <div style={{ display: "grid", gap: "16px" }}>
              {gola.map((rec, idx) => (
                <div key={idx}>
                  <div
                    onClick={() => toggleMedia("rec", idx)}
                    style={{
                      padding: "10px",
                      backgroundColor:
                        openMediaIndex.rec === idx ? "#3b82f6" : "#2a2a2a",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    {rec.title}
                  </div>
                  {openMediaIndex.rec === idx && (
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: 0,
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        title={rec.title}
                        src={rec.src}
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {openSection === "instagram" && (
            <div style={{ display: "grid", gap: "16px" }}>
              {instagramReels.map((reel, idx) => (
                <div key={idx}>
                  <div
                    onClick={() => toggleMedia("reels", idx)}
                    style={{
                      padding: "10px",
                      backgroundColor:
                        openMediaIndex.reels === idx ? "#3b82f6" : "#2a2a2a",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    {typeof reel.title === 'string' ? reel.title : reel.title}
                  </div>
                  {openMediaIndex.reels === idx && (
                    <a
                      href={reel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        backgroundColor: "#3b82f6",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Watch Reel on Instagram
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              zIndex: 1000,
            }}
          >
            <button
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <a
                href="https://chipper-smakager-fb2485.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Click on your own risk
              </a>
            </button>
          </div>
        </div>
      </div>

      <Analytics />
    </div>
  );
};
alert(`'If video buffer than try forward / backward ... wait for 2 min , click on top-right arrow to go on drive link (showed in previus page) (ensure fast internet and don't forget to turn OBS'`);
alert(`Hopefully OBS is ON also you have your buds`);
export default App;