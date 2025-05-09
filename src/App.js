import React from "react";
import "./App.css";

function App() {
  // Combine all paragraph arrays into one
  const allParagraphs = [
    "I never ever wanted to do this, but yes, I'm being forced to. You should know how much you've destroyed my mental and emotional health, and how well you played with my emotions.",
    "Yes, I never wanted to hurt you. I always wanted to see you happy. Even while doing this, there's a fight going on between my mind and heart — wondering if I should share this, knowing it will surely affect you...",
    "Whatever it is, from now onwards, I'M DEAD to you. Just in case you ever think we can get back together — even if it’s after 10 years — the doors will always be open. Otherwise, it’s nothing… just nothing.",
    "I had one of your photos. I’ll give that to Kanishka, so whenever you meet her, take it from her.",
    "I don’t know if it’s right or wrong, but the things you got on 14th and 15th February — they should probably be thrown in the dustbin (or maybe they already have been, I don’t know).",
    "Below are some screen recordings or screenshots of how I felt and survived over the past few months — what I asked for (peace) and what I actually got. There’s also a link — open it if you wish; if not, that’s on you. I’ve even forgotten what was in it, because it was made a long time ago...",
    "No need to contact me. I'M DEAD to you… unless and until… I'm too soft — so don’t even try to manipulate me like others do.",
    "Now, you don’t have me backing you anymore. Hopefully, the replacement works well — maybe even better than me.",
    "Just try to realize how the hell you turned a happy soul into a walking corpse.",
  ];

  const images = ["/assets/image1.jpg"]; // Add more image paths here if needed

  const videos = [
    "https://drive.google.com/file/d/1dEU4-09_vyezouTAbMFUWQRZtQy7N_11/preview",
    "https://drive.google.com/file/d/1qZFdAlV3wGbYtz6RumtPthkq5bGOayYb/preview",
    "https://drive.google.com/file/d/1G9ZoSvWUdGBWLxFoV3W4_UP8wwlvz_Ph/preview",
    "https://drive.google.com/file/d/1AkYcu237CReAe2b_8RowMHJiZJ8bn_h2/preview",
    "https://drive.google.com/file/d/1TYiwGUcEl5vUUJqboQedwRu4BcMDOeCf/preview",
    "https://drive.google.com/file/d/1aHhSS4gN5J0RetOz-2XvOGko5zd37112/preview",
    "https://drive.google.com/file/d/1Or2GFkUm5iWXT3ZTKlecLfJR_-oNxCP-/preview",
    "https://drive.google.com/file/d/1d9EGvQQkP2R-IWS-Erf-wee9M3fOq70a/preview",
    "https://drive.google.com/file/d/1l28a0gxwGJjL-dFLjwyKsy78Qa7rysQa/preview",
    "https://drive.google.com/file/d/13N959O5KJu0ycB1J3EyOgMNYiWJUhMuI/preview",
    "https://drive.google.com/file/d/1roCUecSKPWSI539DQucjfE9e1tqb6hR8/preview",
  ];

  return (
    <div className="App">
      <h1>Message</h1>

      {allParagraphs.map((para, idx) => (
        <p
          key={idx}
          style={{
            marginBottom: "1.5rem",
            lineHeight: "1.6",
            textAlign: "justify",
          }}
        >
          {para}
        </p>
      ))}

      <h2>Photos</h2>
      <div className="image-gallery">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Image ${idx}`}
            className="media-image"
            style={{ width: "300px", margin: "10px", borderRadius: "10px" }}
          />
        ))}
      </div>

      <h2>Videos</h2>
      <div className="video-gallery">
        {videos.map((src, idx) => (
          <div
            key={idx}
            className="video-wrapper"
            style={{ marginBottom: "2rem" }}
          >
            <h3 style={{ marginBottom: "10px" }}>Video {idx + 1}</h3>
            <iframe
              title={`Video ${idx + 1}`}
              src={src}
              width="100%"
              height="315"
              style={{ border: "none", borderRadius: "10px" }}
            ></iframe>
          </div>
        ))}
      </div>

      <a
        href="https://chipper-smakager-fb2485.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Click Me
        </button>
      </a>
    </div>
  );
}

export default App;
