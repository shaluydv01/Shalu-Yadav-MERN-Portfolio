import React from "react";
import "./Typing.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typing = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Graphic Designer",
      "Data Science Enthusiast",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="typing_container">
      <h1>
        I'm a <span id="words">{text}</span>
        <span>{<Cursor />}</span>
      </h1>
    </div>
  );
};

export default Typing;
