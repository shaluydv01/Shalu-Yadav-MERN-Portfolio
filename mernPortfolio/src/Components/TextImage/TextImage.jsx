import React from "react";
import "./TextImage.css";
import resume from "/src/assets/Resume/ShaluYadav_InternshalaResume.pdf";
import shalu from "/src/assets/ProjectsImage/shalu.png"

const TextImage = () => {
  return (
    <div className="textImage-container">
      <div className="textImage-text">
        <div className="textImage-para-text">
          <p>Hello, I'm Shalu Yadav a dedicated Fullstack Web</p>
          <p>Developer. I'm currently pursuing my graduation</p>
          <p>
            <strong>in Computer Science And Engineering</strong> from{" "}
          </p>
          <p>
            <em>Deen Dayal Upadhyaya Gorakhpur University,</em>
          </p>
          <p>
            <em> Gorakhpur.</em>
          </p>
          <p id="explore-para">Here you can explore my few amazing works and</p>
          <p>can download my resume.</p>
        </div>

        <div className="textImage-button">
          <a href={resume} download="resume" target="_blank">
            Resume
          </a>
          <a href="https://github.com/shaluydv01" target="_blank">
            <img
              src="https://api.iconify.design/skill-icons:github-dark.svg"
              alt="..."
            />
          </a>
        </div>
      </div>
      <div className="textImage-img">
        <img
          src={shalu}
          alt="..."
          style={{ borderRadius: "50%" }}
          id="profile-image"
        />
      </div>
    </div>
  );
};

export default TextImage;
