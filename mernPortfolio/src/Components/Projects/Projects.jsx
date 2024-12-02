import React from "react";
import "./Projects.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myExpenses from "/src/assets/ProjectsImage/myExpenses.png"
import video from "/src/assets/ProjectVideo/dummyAnimatedWeb.mp4"
import movieZone from "/src/assets/ProjectsImage/movieZone.png"

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

const Projects = () => {
  useGSAP(() => {
    gsap.from(".projects-container #para-top", {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 40%",
        end: "top 60%",
        scrub: 4,
      },
    });
  });

  useGSAP(() => {
    gsap.from("#projectDiv1, #projectDiv3", {
      y: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 40%",
        end: "top 60%",
        scrub: 4,
      },
    });
  });

  useGSAP(() => {
    gsap.from("#projectDiv2", {
      y: 500,
      opacity: 0,
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 40%",
        end: "top 60%",
        scrub: 4,
      },
    });
  });

  return (
    <div className="projects-container">
      <p id="para-top">Here are a few of my projects to explore!</p>

      <div className="projects-card-container">
        <div className="project-card" id="projectDiv1">
          <div className="card1-image">
            <img src={myExpenses} alt="..." width="100%" />
          </div>
          <div className="card1-content">
            <h3>Expenses-Tracker</h3>
            <p>This project is built on using "MERN" Stack and it is still under development.</p>
            <p>Here you may take a look at my project !</p>
            <div className="card1-btn">
              <a href="https://expenses-tracker-app-rose.vercel.app/" target="_blank">
                <img
                  src="https://api.iconify.design/weui:eyes-on-filled.svg"
                  alt="..."
                />
              </a>
              <a href="https://github.com/shaluydv01/expenseTracker-website" target="_blank">
                <img
                  src="https://api.iconify.design/skill-icons:github-dark.svg"
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project-card" id="projectDiv2">
          <div className="card1-image">
            <video autoPlay loop muted src={video} width="100%"></video>
          </div>
          <div className="card1-content">
            <h3>Animated Portfolio</h3>
            <p>This project is built on using "HTML", "CSS", "JavaScript" and "GSAP".</p>
            <p>Here you may take a look at my project !</p>
            <div className="card1-btn">
              <a href="https://animated-portfolio-phi-two.vercel.app/" target="_blank">
                <img
                  src="https://api.iconify.design/weui:eyes-on-filled.svg"
                  alt="..."
                />
              </a>
              <a href="https://github.com/shaluydv01/animated-portfolio" target="_blank">
                <img
                  src="https://api.iconify.design/skill-icons:github-dark.svg"
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project-card" id="projectDiv3">
          <div className="card1-image">
            <img src={movieZone} alt="..." width="100%" />
          </div>
          <div className="card1-content">
            <h3>Movie-Zone</h3>
            <p>This project is built on using "Reactjs" for frontend.</p>
            <p>Here you may take a look at my project !</p>
            <div className="card1-btn">
              <a href="https://movie-filter-react-project.vercel.app/" target="_blank">
                <img
                  src="https://api.iconify.design/weui:eyes-on-filled.svg"
                  alt="..."
                />
              </a>
              <a href="https://github.com/shaluydv01/movieZone-react" target="_blank">
                <img
                  src="https://api.iconify.design/skill-icons:github-dark.svg"
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
