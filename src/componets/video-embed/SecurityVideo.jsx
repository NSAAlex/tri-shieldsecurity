
import React from "react";
import "./SecurityVideo.css";

const VIDEO_ID = "inWWhr5tnEA";

function SecurityVideo() {
  return (
    <section className="section security-video-section">
      <div className="container">
        <p className="section-label">
          Cybersecurity Awareness
        </p>

        <h2>
          STAY INFORMED.{" "}
          <span className="accent">STAY SECURE.</span>
        </h2>

        <p className="video-intro">
          Learn more about protecting your digital
          information, recognizing common cyber threats,
          and understanding why cybersecurity matters.
        </p>

        {/* 
          PROJECT PART 10: IFRAME FEATURE
          This component embeds a cybersecurity
          educational YouTube video directly into
          the TRI-Shield Security homepage.
        */}

        <div className="video-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
            title="Cybersecurity Awareness Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default SecurityVideo;
