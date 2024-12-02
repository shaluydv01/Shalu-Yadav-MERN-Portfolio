import React from "react";
import "./SocialMedia.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

const SocialMedia = () => {

  useGSAP(() => {
    gsap.to(".social-image a", {
        rotate: 360,
        y: -20,
        scrollTrigger: {
            trigger: ".socialMedia-container",
            start: "top 30%",
            end: "top 30%",
            scrub: 4
        }
    })
  })

  return (
    <div className="socialMedia-container">
      <p>Let's Connect</p>
      <div className="social-image">
        <a href="mailto: shaludducollege@gmail.com" target="_blank">
          <img
            src="https://api.iconify.design/weui:email-filled.svg"
            alt="..."
          />
        </a>
        <a href="https://www.linkedin.com/in/shalu-yadav-8878aa280/" target="_blank">
          <img
            src="https://api.iconify.design/skill-icons:linkedin.svg"
            alt="..."
          />
        </a>
        <a href="https://www.instagram.com/ydvshalu01/" target="_blank">
          <img
            src="https://api.iconify.design/skill-icons:instagram.svg"
            alt="..."
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
