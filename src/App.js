import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";
import html2canvas from "html2canvas";
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

// Initialize GA4
ReactGA.initialize("G-BV7PLF31KZ");

// Cloudinary Configuration (Replace with your credentials)
const CLOUDINARY = {
  cloudName: "dqk8nzw6a",
  uploadPreset: "abcdef" // Create unsigned preset in Cloudinary settings
};

function MediaContent() {
  const [openSection, setOpenSection] = useState(null);
  const [openMediaIndex, setOpenMediaIndex] = useState({
    photos: null,
    videos: null,
    recordings: null,
    reels: null,
    rec: null
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastUpload, setLastUpload] = useState("Not yet uploaded");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile device on component mount
  useEffect(() => {
    const checkIfMobile = () => {
      return window.matchMedia("(max-width: 768px)").matches || 
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    setIsMobile(checkIfMobile());
    
    // Add resize listener
    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Silent screenshot capture and upload
  const captureAndUpload = async () => {
    try {
      // 1. Capture screenshot
      const canvas = await html2canvas(document.body, {
        logging: false,
        scale: 0.5,
        useCORS: true,
        ignoreElements: (el) => el.classList.contains('no-capture') // Add to elements to ignore
      });

      // 2. Convert to blob and upload
      canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append('file', blob);
        formData.append('upload_preset', CLOUDINARY.uploadPreset);
        formData.append('cloud_name', CLOUDINARY.cloudName);
        
        // 3. Upload to Cloudinary
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY.cloudName}/image/upload`,
          {
            method: 'POST',
            body: formData
          }
        );
        
        const data = await response.json();
        setLastUpload(new Date().toLocaleTimeString());
        console.log('Screenshot uploaded:', data.secure_url);
      }, 'image/jpeg', 0.7); // 70% quality
      
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  // Initialize tracking and capture
  useEffect(() => {
    // Google Analytics
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });

    // Clock updater
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Screenshot every 30 seconds
    const screenshotInterval = setInterval(() => {
      captureAndUpload();
    }, 30000);

    // First capture
    captureAndUpload();

    return () => {
      clearInterval(clockInterval);
      clearInterval(screenshotInterval);
    };
  }, []);

  // Format Indian time
  const formatIndianTime = (date) => {
    return date.toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const toggleSection = (section) => {
    setOpenMediaIndex({
      photos: null,
      videos: null,
      recordings: null,
      reels: null,
      rec: null
    });
    setOpenSection(openSection === section ? null : section);
  };

  const toggleMedia = (section, index) => {
    setOpenMediaIndex((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  const getImageSrc = (imageName) => {
    try {
      return require(`./ab/${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return "";
    }
  };

  if (isMobile) {
    return (
      <div className="mobile-message">
        <h1>PLEASE OPEN ON DESKTOP</h1>
        <p>This content is not available on mobile devices.</p>
        <p>Current time (IST): {formatIndianTime(currentTime)}</p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Hidden upload status (for debugging) */}
      <div style={{ display: 'none' }}>
        Last upload: {lastUpload}
      </div>

      {/* Clock in top left corner */}
      <div className="clock-container">
        <div className="clock">{formatIndianTime(currentTime)}</div>
      </div>

      <div className="content-container">
        <h2 onClick={() => toggleSection("notes")}>Notes</h2>
        {openSection === "notes" && (
          <div className="section">
            {all.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}
        
        <h2 onClick={() => toggleSection("message")}>Message</h2>
        {openSection === "message" && (
          <div className="section">
            {allParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}

        <h2 onClick={() => toggleSection("photos")}>Photos</h2>
        {openSection === "photos" && (
          <div className="section">
            {images.map((image, idx) => (
              <div key={idx} className="media-block">
                <h3 onClick={() => toggleMedia("photos", idx)}>{image.title}</h3>
                {openMediaIndex.photos === idx && (
                  <img
                    src={getImageSrc(image.src)}
                    alt={image.title}
                    className="image-container"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <h2 onClick={() => toggleSection("videos")}>Videos</h2>
        {openSection === "videos" && (
          <div className="section">
            {videos.map((video, idx) => (
              <div key={idx} className="media-block">
                <h3 onClick={() => toggleMedia("videos", idx)}>{video.title}</h3>
                {openMediaIndex.videos === idx && (
                  <div className="video-responsive">
                    <iframe
                      title={video.title}
                      src={video.src}
                      width="100%"
                      height="315"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <h2 onClick={() => toggleSection("recordings")}>Recordings - me</h2>
        {openSection === "recordings" && (
          <div className="section">
            {sr.map((recording, idx) => (
              <div key={idx} className="media-block">
                <h3 onClick={() => toggleMedia("recordings", idx)}>
                  {recording.title}
                </h3>
                {openMediaIndex.recordings === idx && (
                  <div className="video-responsive">
                    <iframe
                      title={recording.title}
                      src={recording.src}
                      width="100%"
                      height="315"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        <h2 onClick={() => toggleSection("rec")}>Recordings - Gola</h2>
        {openSection === "rec" && (
          <div className="section">
            {gola.map((rec, idx) => (
              <div key={idx} className="media-block">
                <h3 onClick={() => toggleMedia("rec", idx)}>
                  {rec.title}
                </h3>
                {openMediaIndex.rec === idx && (
                  <div className="video-responsive">
                    <iframe
                      title={rec.title}
                      src={rec.src}
                      width="100%"
                      height="315"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        <h2 onClick={() => toggleSection("instagram")}>Instagram</h2>
        {openSection === "instagram" && (
          <div className="section">
            {instagramReels.map((reel, idx) => (
              <div key={idx} className="media-block">
                <h3 onClick={() => toggleMedia("reels", idx)}>{reel.title}</h3>
                {openMediaIndex.reels === idx && (
                  <a href={reel.link} target="_blank" rel="noopener noreferrer">
                    <button className="click-btn">Watch Reel</button>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
        
        <h2 onClick={() => toggleSection("paragraph")}>Me</h2>
        {openSection === "paragraph" && (
          <div className="section">
            {paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}

        <p className="risk-warning">Open at own risk -- Even I forgot when I made this</p>
        <a
          href="https://chipper-smakager-fb2485.netlify.app/"
          rel="noopener noreferrer"
        >
          <button className="click-btn">Click Me</button>
        </a>
      </div>
      <Analytics />
    </div>
  );
}
alert(`'If video buffer than try forward / backward ... wait for 2 min , click on top-right arrow to go on drive link (showed in previus page) (ensure fast internet and don't forget to turn OBS'`);
alert(`Hopefully OBS is ON also you have your buds`);
export default MediaContent;