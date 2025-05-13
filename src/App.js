import React, { useState } from "react";
import "./App.css";
import a from "./ab/1.jpg";
import b from "./ab/2.jpg";
import c from "./ab/3.jpg";
import d from "./ab/4.jpg";
import e from "./ab/5.jpg";
import f from "./ab/6.jpg";
import g from "./ab/7.jpg";
import h from "./ab/8.jpg";
import i from "./ab/9.jpg";
import j from "./ab/10.jpg";
import k from "./ab/11.jpg";
import l from "./ab/12.jpg";
import m from "./ab/13.jpg";
import n from "./ab/14.jpg";

function App() {
  const allParagraphs = [
    "I never ever wanted to do this, but yes, I'm being forced to. You should know how much you've destroyed my mental and emotional health, and how well you played with my emotions.",
    "Yes, I never wanted to hurt you. I always wanted to see you happy. Even while doing this, there's a fight going on between my mind and heart — wondering if I should share this, knowing it will surely affect you...",
    "Whatever it is, from now onwards, I'M DEAD to you ( May be already for you ). Just in case you ever think we can get back together for whole 4 days ikyk — even if it's after 10 years — the doors will always be open. Otherwise, it's nothing… just nothing.",
    "I had one of your photos. I'll give that to Kanishka, so whenever you meet her, take it from her.",
    "I don't know if it's right or wrong, but the things you got on 14th and 15th February — they should probably be thrown in the dustbin (or maybe they already have been, I don't know).",
    "Below are some screen recordings or screenshots of how I felt and survived over the past few months — what I asked for (peace) and what I actually got. There's also a link — open it if you wish; if not, that's on you. I've even forgotten what was in it, because it was made a long time ago...",
    "No need to contact me. I'M DEAD to you… unless and until… I'm have been / too soft for you  — so don't even try to manipulate me like others do.",
    "Now, you don't have me backing you anymore. Hopefully, the replacement works well — maybe even better than me.",
    "Just try to realize how the hell you turned a happy soul into a walking corpse.",
  ];

  const images = [
    { src: a, title: "Image 1 - Memory" },
    { src: b, title: "Image 2 - Moment" },
    { src: c, title: "Image 3 - Thought" },
    { src: d, title: "Image 4 - Feeling" },
    { src: e, title: "Image 5 - Emotion" },
    { src: f, title: "Image 6 - Truth" },
    { src: g, title: "Image 7 - Reality" },
    { src: h, title: "Image 8 - Past" },
    { src: i, title: "Image 9 - Present" },
    { src: j, title: "Image 10 - Future" },
    { src: k, title: "Image 11 - Love" },
    { src: l, title: "Image 12 - Pain" },
    { src: m, title: "Image 13 - Hope" },
    { src: n, title: "Image 14 - Closure" },
  ];

  const videos = [
    {
      src: "https://drive.google.com/file/d/1dEU4-09_vyezouTAbMFUWQRZtQy7N_11/preview",
      title: "Video 1 - From 2024",
    },
    {
      src: "https://drive.google.com/file/d/1qZFdAlV3wGbYtz6RumtPthkq5bGOayYb/preview",
      title: "Video 2 - Confession",
    },
    {
      src: "https://drive.google.com/file/d/1G9ZoSvWUdGBWLxFoV3W4_UP8wwlvz_Ph/preview",
      title: "Video 3 - Memories",
    },
    {
      src: "https://drive.google.com/file/d/1AkYcu237CReAe2b_8RowMHJiZJ8bn_h2/preview",
      title: "Video 4 - Truth Revealed",
    },
    {
      src: "https://drive.google.com/file/d/1TYiwGUcEl5vUUJqboQedwRu4BcMDOeCf/preview",
      title: "Video 5 - Last Call",
    },
    {
      src: "https://drive.google.com/file/d/1aHhSS4gN5J0RetOz-2XvOGko5zd37112/preview",
      title: "Video 6 - Breaking Point",
    },
    {
      src: "https://drive.google.com/file/d/1Or2GFkUm5iWXT3ZTKlecLfJR_-oNxCP-/preview",
      title: "Video 7 - Explanation",
    },
    {
      src: "https://drive.google.com/file/d/1d9EGvQQkP2R-IWS-Erf-wee9M3fOq70a/preview",
      title: "Video 8 - Deleted Memories",
    },
    {
      src: "https://drive.google.com/file/d/1l28a0gxwGJjL-dFLjwyKsy78Qa7rysQa/preview",
      title: "Video 9 - What Remains",
    },
    {
      src: "https://drive.google.com/file/d/13N959O5KJu0ycB1J3EyOgMNYiWJUhMuI/preview",
      title: "Video 10 - End Note",
    },
    {
      src: "https://drive.google.com/file/d/1roCUecSKPWSI539DQucjfE9e1tqb6hR8/preview",
      title: "Video 11 - Closure",
    },
  ];

  const sr = [
    {
      src: "https://drive.google.com/file/d/1dEU4-09_vyezouTAbMFUWQRZtQy7N_11/preview",
      title: "Screen Recording 1 - From 2024",
    },
    {
      src: "https://drive.google.com/file/d/1qZFdAlV3wGbYtz6RumtPthkq5bGOayYb/preview",
      title: "Screen Recording 2 - Confession",
    },
    {
      src: "https://drive.google.com/file/d/1G9ZoSvWUdGBWLxFoV3W4_UP8wwlvz_Ph/preview",
      title: "Screen Recording 3 - Memories",
    },
    {
      src: "https://drive.google.com/file/d/1AkYcu237CReAe2b_8RowMHJiZJ8bn_h2/preview",
      title: "Screen Recording 4 - Truth Revealed",
    },
    {
      src: "https://drive.google.com/file/d/1TYiwGUcEl5vUUJqboQedwRu4BcMDOeCf/preview",
      title: "Screen Recording 5 - Last Call",
    },
    {
      src: "https://drive.google.com/file/d/1aHhSS4gN5J0RetOz-2XvOGko5zd37112/preview",
      title: "Screen Recording 6 - Breaking Point",
    },
    {
      src: "https://drive.google.com/file/d/1Or2GFkUm5iWXT3ZTKlecLfJR_-oNxCP-/preview",
      title: "Screen Recording 7 - Explanation",
    },
    {
      src: "https://drive.google.com/file/d/1d9EGvQQkP2R-IWS-Erf-wee9M3fOq70a/preview",
      title: "Screen Recording 8 - Deleted Memories",
    },
    {
      src: "https://drive.google.com/file/d/1l28a0gxwGJjL-dFLjwyKsy78Qa7rysQa/preview",
      title: "Screen Recording 9 - What Remains",
    },
    {
      src: "https://drive.google.com/file/d/13N959O5KJu0ycB1J3EyOgMNYiWJUhMuI/preview",
      title: "Screen Recording 10 - End Note",
    },
    {
      src: "https://drive.google.com/file/d/1roCUecSKPWSI539DQucjfE9e1tqb6hR8/preview",
      title: "Screen Recording 11 - Closure",
    },
  ];

  const [openSection, setOpenSection] = useState(null);
  const [openMediaIndex, setOpenMediaIndex] = useState({
    photos: null,
    videos: null,
    recordings: null
  });

  const toggleSection = (section) => {
    setOpenMediaIndex({
      photos: null,
      videos: null,
      recordings: null
    });
    setOpenSection(openSection === section ? null : section);
  };

  const toggleMedia = (section, index) => {
    setOpenMediaIndex(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };

  return (
    <div className="App">
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
              <div className={`media-wrapper ${openMediaIndex.photos === idx ? "open" : ""}`}>
                {openMediaIndex.photos === idx && (
                  <div className="image-container">
                    <img
                      src={image.src}
                      alt={image.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = ""; // Clear if error occurs
                      }}
                    />
                  </div>
                )}
              </div>
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
              <div className={`media-wrapper ${openMediaIndex.videos === idx ? "open" : ""}`}>
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
            </div>
          ))}
        </div>
      )}

      <h2 onClick={() => toggleSection("recordings")}>Screen Recordings</h2>
      {openSection === "recordings" && (
        <div className="section">
          {sr.map((recording, idx) => (
            <div key={idx} className="media-block">
              <h3 onClick={() => toggleMedia("recordings", idx)}>{recording.title}</h3>
              <div className={`media-wrapper ${openMediaIndex.recordings === idx ? "open" : ""}`}>
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
            </div>
          ))}
        </div>
      )}

      <p className="risk-warning">Open at own risk</p>
      <a
        href="https://chipper-smakager-fb2485.netlify.app/"
        rel="noopener noreferrer"
      >
        <button className="click-btn">Click Me</button>
      </a>
    </div>
  );
}

export default App;