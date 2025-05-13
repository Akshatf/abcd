import React, { useState } from "react";
import "./App.css";

function App() {
  const allParagraphs = [
    "I never ever wanted to do this, but yes, I'm being forced to. You should know how much you've destroyed my mental and emotional health, and how well you played with my emotions.",
    "Yes, I never wanted to hurt you. I always wanted to see you happy. Even while doing this, there's a fight going on between my mind and heart — wondering if I should share this, knowing it will surely affect you...",
    "Whatever it is, from now onwards, I'M DEAD to you ( May be already for you ). Just in case you ever think we can get back together for whole 4 days ikyk — even if it’s after 10 years — the doors will always be open. Otherwise, it’s nothing… just nothing.",
    "I had one of your photos. I’ll give that to Kanishka, so whenever you meet her, take it from her.",
    "I don’t know if it’s right or wrong, but the things you got on 14th and 15th February — they should probably be thrown in the dustbin (or maybe they already have been, I don’t know).",
    "Below are some screen recordings or screenshots of how I felt and survived over the past few months — what I asked for (peace) and what I actually got. There’s also a link — open it if you wish; if not, that’s on you. I’ve even forgotten what was in it, because it was made a long time ago...",
    "No need to contact me. I'M DEAD to you… unless and until… I'm have been / too soft for you  — so don’t even try to manipulate me like others do.",
    "Now, you don’t have me backing you anymore. Hopefully, the replacement works well — maybe even better than me.",
    "Just try to realize how the hell you turned a happy soul into a walking corpse.",
  ];

  const images = ["/assets/image1.jpg"];

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
      title: "sr 1 - From 2024",
    },
    {
      src: "https://drive.google.com/file/d/1qZFdAlV3wGbYtz6RumtPthkq5bGOayYb/preview",
      title: "sr 2 - Confession",
    },
    {
      src: "https://drive.google.com/file/d/1G9ZoSvWUdGBWLxFoV3W4_UP8wwlvz_Ph/preview",
      title: "sr 3 - Memories",
    },
    {
      src: "https://drive.google.com/file/d/1AkYcu237CReAe2b_8RowMHJiZJ8bn_h2/preview",
      title: "sr 4 - Truth Revealed",
    },
    {
      src: "https://drive.google.com/file/d/1TYiwGUcEl5vUUJqboQedwRu4BcMDOeCf/preview",
      title: "sr 5 - Last Call",
    },
    {
      src: "https://drive.google.com/file/d/1aHhSS4gN5J0RetOz-2XvOGko5zd37112/preview",
      title: "sr 6 - Breaking Point",
    },
    {
      src: "https://drive.google.com/file/d/1Or2GFkUm5iWXT3ZTKlecLfJR_-oNxCP-/preview",
      title: "sr 7 - Explanation",
    },
    {
      src: "https://drive.google.com/file/d/1d9EGvQQkP2R-IWS-Erf-wee9M3fOq70a/preview",
      title: "sr 8 - Deleted Memories",
    },
    {
      src: "https://drive.google.com/file/d/1l28a0gxwGJjL-dFLjwyKsy78Qa7rysQa/preview",
      title: "sr 9 - What Remains",
    },
    {
      src: "https://drive.google.com/file/d/13N959O5KJu0ycB1J3EyOgMNYiWJUhMuI/preview",
      title: "sr 10 - End Note",
    },
    {
      src: "https://drive.google.com/file/d/1roCUecSKPWSI539DQucjfE9e1tqb6hR8/preview",
      title: "sr 11 - Closure",
    },
  ];

  const [openSection, setOpenSection] = useState(null);
  const [openVideoIndex, setOpenVideoIndex] = useState(null);

  const toggleSection = (section) => {
    setOpenVideoIndex(null);
    setOpenSection(openSection === section ? null : section);
  };

  const toggleVideo = (index) => {
    setOpenVideoIndex(openVideoIndex === index ? null : index);
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
        <div className="image-gallery">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Image ${idx}`} />
          ))}
        </div>
      )}

      <h2 onClick={() => toggleSection("videos")}>Videos</h2>
      {openSection === "videos" && (
        <div className="section">
          {videos.map((video, idx) => (
            <div key={idx} className="video-block">
              <h3 onClick={() => toggleVideo(idx)}>{video.title}</h3>
              <div className={`video-wrapper ${openVideoIndex === idx ? "open" : ""}`}>
                {openVideoIndex === idx && (
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
    {sr.map((video, idx) => (
      <div key={idx} className="video-block">
        <h3 onClick={() => toggleVideo(idx)}>{video.title}</h3>
        <div className={`video-wrapper ${openVideoIndex === idx ? "open" : ""}`}>
          {openVideoIndex === idx && (
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
      <p className="risk-warning">Open at own risk</p>
      <a href="https://chipper-smakager-fb2485.netlify.app/" rel="noopener noreferrer">
        <button className="click-btn">Click Me</button>
      </a>
    </div>
  );
}

export default App;