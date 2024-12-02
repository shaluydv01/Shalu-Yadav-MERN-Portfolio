import React from "react";
import "./Skills.css";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(useGSAP);

const Skills = () => {



  return (
    <div className="skills-container">
      <p id="skill-top-para">Skills I have.</p>
      <div className="skills-image">
        <img src="https://api.iconify.design/skill-icons:html.svg" alt="html" />
        <img src="https://api.iconify.design/skill-icons:css.svg" alt="html" />
        <img
          src="https://api.iconify.design/skill-icons:javascript.svg"
          alt="html"
        />
        <img
          src="https://api.iconify.design/skill-icons:react-dark.svg"
          alt="html"
        />
        <img
          src="https://api.iconify.design/skill-icons:nodejs-dark.svg"
          alt="html"
        />
        <img
          src="https://api.iconify.design/skill-icons:expressjs-dark.svg"
          alt="html"
        />
        <img
          src="https://api.iconify.design/skill-icons:mongodb.svg"
          alt="html"
        />
        <img
          src="https://api.iconify.design/skill-icons:bootstrap.svg"
          alt="html"
        />
        <img
          src="https://api.iconify.design/skill-icons:tailwindcss-dark.svg"
          alt="html"
        />
        <img
          src="https://api.iconify.design/skill-icons:figma-light.svg"
          alt="html"
        />
      </div>
    </div>
  );
};

export default Skills;
