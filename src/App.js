import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
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
import o from "./ab/15.jpg";
import p from "./ab/16.jpg";

function App() {
  const allParagraphs = [
    "> I never ever wanted to do this, but yes, I'm being forced to. You should know how much you've destroyed my mental and emotional health, and how well you played with my emotions.",
    "> Yes, I never wanted to hurt you. I always wanted to see you happy. Even while doing this, there's a fight going on between my mind and heart — wondering if I should share this, knowing it will surely affect you...",
    "> Whatever it is, from now onwards, I'M DEAD to you ( May be already for you ). Just in case you ever think we can get back together for whole 4 days ikyk — even if it's after 10 years — the doors will always be open. Otherwise, it's nothing… just nothing.",
    "> I had one of your photos. I'll give that to Kanishka, so whenever you meet her, take it from her.",
    "> I don't know if it's right or wrong, but the things you got on 14th and 15th February — they should probably be thrown in the dustbin (or maybe they already have been, I don't know).",
    "> Below are some screen recordings or screenshots of how I felt and survived over the past few months — what I asked for (peace) and what I actually got. There's also a link — open it if you wish; if not, that's on you. I've even forgotten what was in it, because it was made a long time ago...",
    "> No need to contact me. I'M DEAD to you… unless and until… I'm have been / too soft for you  — so don't even try to manipulate me like others do.",
    "> Now, you don't have me backing you anymore. Hopefully, the replacement works well — maybe even better than me.",
    "> Just try to realize how the hell you turned a happy soul into a *walking corpse*.",
  ];

  const images = [
    { src: a, title: "Image 1 " },
    { src: b, title: "Image 2 " },
    { src: c, title: "Image 3 " },
    { src: d, title: "Image 4 " },
    { src: e, title: "Image 5 " },
    { src: f, title: "Image 6 " },
    { src: g, title: "Image 7 " },
    { src: h, title: "Image 8 " },
    { src: i, title: "Image 9 " },
    { src: j, title: "Image 10 " },
    { src: k, title: "Image 11 " },
    { src: l, title: "Image 12 " },
    { src: m, title: "Image 13 " },
    { src: n, title: "Image 14 " },
    { src: p, title: "Image 15 " },
    {
      src: o,
      title:
        "Image 16 - I’ll be grateful to you for life. I was supposed to travel on this train...",
    },
  ];

  const videos = [
    {
      src: "https://drive.google.com/file/d/1dEU4-09_vyezouTAbMFUWQRZtQy7N_11/preview",
      title: "Video 1 ",
    },
    {
      src: "https://drive.google.com/file/d/1qZFdAlV3wGbYtz6RumtPthkq5bGOayYb/preview",
      title: "Video 2 ",
    },
    {
      src: "https://drive.google.com/file/d/1G9ZoSvWUdGBWLxFoV3W4_UP8wwlvz_Ph/preview",
      title: "Video 3 - ",
    },
    {
      src: "https://drive.google.com/file/d/1AkYcu237CReAe2b_8RowMHJiZJ8bn_h2/preview",
      title: "Video 4 - ",
    },
    {
      src: "https://drive.google.com/file/d/1TYiwGUcEl5vUUJqboQedwRu4BcMDOeCf/preview",
      title: "Video 5 - ",
    },
    {
      src: "https://drive.google.com/file/d/1aHhSS4gN5J0RetOz-2XvOGko5zd37112/preview",
      title: "Video 6 - ",
    },
    {
      src: "https://drive.google.com/file/d/1Or2GFkUm5iWXT3ZTKlecLfJR_-oNxCP-/preview",
      title: "Video 7 -",
    },
    {
      src: "https://drive.google.com/file/d/1d9EGvQQkP2R-IWS-Erf-wee9M3fOq70a/preview",
      title: "Video 8 - ",
    },
    {
      src: "https://drive.google.com/file/d/1l28a0gxwGJjL-dFLjwyKsy78Qa7rysQa/preview",
      title: "Video 9 - ",
    },
    {
      src: "https://drive.google.com/file/d/13N959O5KJu0ycB1J3EyOgMNYiWJUhMuI/preview",
      title: "Video 10 - ",
    },
    {
      src: "https://drive.google.com/file/d/1roCUecSKPWSI539DQucjfE9e1tqb6hR8/preview",
      title: "Video 11 - ",
    },
  ];

  const sr = [
    {
      src: "https://drive.google.com/file/d/10-01ycJbUNViNKWpGFlFqxSY2zdqMiwU/preview",
      title: "Recording 1 ",
    },
    {
      src: "https://drive.google.com/file/d/1--BWrkF0XdXlgRMT6suCVAJyg0foJx0w/preview",
      title: "Recording 2 ",
    },
    {
      src: "https://drive.google.com/file/d/1071tXFX9aJdPj110p13Zmqg2Io5pPhy6/preview",
      title: "Recording 3 ",
    },
    {
      src: "https://drive.google.com/file/d/1003fVs2NScO9jX7ObI0hdhJu4cqqiXtd/preview",
      title: "Recording 4 ",
    },
    {
      src: "https://drive.google.com/file/d/1-4J4zol7tWuYf4umkVnRjq7DLXBlw4tl/preview",
      title: "Recording 5 ",
    },
  ];

  const instagramReels = [
    {
      title: "Reel 1",
      link: "https://www.instagram.com/reel/DD9cMJ2JLen/?igsh=MWlhdzRvMmh1eWhzdg==",
    },
    {
      title: "Reel 2",
      link: "https://www.instagram.com/reel/C_7BS0lpr9E/?igsh=N3ExOXU3d3dzeHJo",
    },
    {
      title: "Reel 3",
      link: "https://www.instagram.com/reel/DBoncfCKdhA/?igsh=MTIzMzc3ejdsZGpxaQ==",
    },
    {
      title: "Reel 4",
      link: "https://www.instagram.com/reel/DISomvUz1wL/?igsh=cGg0b3p2djBlYTJr",
    },
    {
      title: "Reel 5",
      link: "https://www.instagram.com/reel/DFVMqojz6mC/?igsh=MWI5M3h1ODJoMHduaQ==",
    },
    {
      title: "Reel 6",
      link: "https://www.instagram.com/reel/DHq-qq3Sd8D/?igsh=ZWhzbHU4OG0xZzI0",
    },
    {
      title: "Reel 7",
      link: "https://www.instagram.com/reel/DGgCR6wNe04/?igsh=bXcwM2NxcTJrOXZ2",
    },
    {
      title: "Reel 8",
      link: "https://www.instagram.com/reel/DItq_K4TzN9/?igsh=MXFleTd3bG4zY3RqOQ==",
    },
    {
      title: "Reel 9",
      link: "https://www.instagram.com/p/DIeKbGzvMwo/?igsh=MWFweTRiM2pxbHpydw==",
    },
    {
      title: "Reel 10",
      link: "https://www.instagram.com/reel/DIWgLu8x-2c/?igsh=MW10MGk4MG1sbjd6cw==",
    },
    {
      title: "Reel 11",
      link: "https://www.instagram.com/reel/DC1q55KzCi6/?igsh=MnNjY3NwMG9pajN2",
    },
    {
      title: "Reel 12",
      link: "https://www.instagram.com/reel/DJHuM_3zagH/?igsh=bDF5dXdjaGp4MzBy",
    },
    {
      title: "Reel 13",
      link: "https://www.instagram.com/reel/DIbxwx6JRaQ/?igsh=eTYwbHY0Z25rdGpr",
    },
    {
      title: "Reel 14",
      link: "https://www.instagram.com/reel/DJHls_FyA16/?igsh=MmFhc3V5Z3AxMWhn",
    },
    {
      title: "Reel 15 - Only till 0.9",
      link: "https://www.instagram.com/reel/DIEGNpppEaX/?igsh=MWZneWpjcm03N3Jsdw==",
    },
    {
      title: "Reel 16 - So me",
      link: "https://www.instagram.com/reel/DJV7crSpuot/?igsh=MWMwcmdtY2l3aGJoYQ==",
    },
  ];

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
    });
    setOpenSection(openSection === section ? null : section);
  };

  const toggleMedia = (section, index) => {
    setOpenMediaIndex((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
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
              {openMediaIndex.photos === idx && (
                <img
                  src={image.src}
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

      <h2 onClick={() => toggleSection("recordings")}>Recordings</h2>
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
      <p className="risk-warning">Open at own risk</p>
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
