import React, { useEffect, useState } from "react";
import './Home.css'
import Typing from "../../Components/TypingIntro/Typing";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import TextImage from "../../Components/TextImage/TextImage";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Typing />
      <hr />
      <TextImage />
      <hr />
      <SocialMedia />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <ProgressBar />
      <hr />
      <Form />
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
