import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import {
  allParagraphs,
  images,
  videos,
  sr,
  gola,
  all,
  instagramReels,
} from "./data";

function App() {
  const [openSection, setOpenSection] = useState(null);
  const [openMediaIndex, setOpenMediaIndex] = useState({
    photos: null,
    videos: null,
    recordings: null,
    reels: null,
  });

  const toggleSection = (section) => {
    setOpenMediaIndex({
      photos: null,
      videos: null,
      recordings: null,
      reels: null,
      rec:null
    });
    setOpenSection(openSection === section ? null : section);
  };

  const toggleMedia = (section, index) => {
    setOpenMediaIndex((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  // Helper function to get image source
  const getImageSrc = (imageName) => {
    try {
      return require(`./ab/${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return "";
    }
  };

  return (
    <div className="App">
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

      <h2 onClick={() => toggleSection("videos")}>Videos</h2>
      {openSection === "videos" && (
        <div className="section">
          {videos.map((video, idx) => (
            <div key={idx} className="media-block">
              <h3 onClick={() => toggleMedia("videos", idx)}>{video.title}</h3>
              {openMediaIndex.videos === idx && (
                <iframe
                  title={video.title}
                  src={video.src}
                  width="100%"
                  height="315"
                  allowFullScreen
                ></iframe>
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
                <iframe
                  title={recording.title}
                  src={recording.src}
                  width="100%"
                  height="315"
                  allowFullScreen
                ></iframe>
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
                <iframe
                  title={rec.title}
                  src={rec.src}
                  width="100%"
                  height="315"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </div>
      )}

      <p className="risk-warning">Open at own risk -- Even I forgot when I made this </p>
      <a
        href="https://chipper-smakager-fb2485.netlify.app/"
        rel="noopener noreferrer"
      >
        <button className="click-btn">Click Me</button>
      </a>
      <Analytics />
    </div>
  );
}

export default App;