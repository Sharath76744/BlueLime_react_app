import React from "react";
import landVideo from "../assets/bg-video/landpage_video.mp4";

const LandPage = () => {
  return (
    <div className="hero">
      <nav>
        <h2>MODMIX</h2>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li className="Contact-bnt">
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
      <video src={landVideo} className="LandPage_video" autoPlay muted loop />
      <div className="overlay"></div>
      <div className="content">
        <h1>MODMIX</h1>
        <p>Premium Zero-Proof Mixology</p>
      </div>
    </div>
  );
};

export default LandPage;
