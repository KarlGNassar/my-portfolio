import React from "react";
import "./About.css";
import PorfilePic from "../../images/profile.png";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div id="aboutId" className="about">
      <div className="about__left">
        <img
          className="about__image"
          src={PorfilePic}
          alt="profile"
          data-aos="fade-right"
        />
      </div>

      <div className="about__content">
        <div className="about__paragraph">
          <h1 data-aos="fade-up" data-aos-delay="200">
            About Me
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Hi There! I am a{" "}
            {Math.abs(
              new Date(
                Date.now() - new Date(2001, 11, 6).getTime()
              ).getUTCFullYear() - 1970
            )}{" "}
            years old passionate programmer! I've been coding since December
            2020. I am a passionate about learning coding and full stack
            development. My journey started when I came across a youtube video
            talking about react.js and how it is becoming the most popular web
            framework in 2020; this got me instantly hooked to javascript and
            web development. Always seeking new challenges and adventures, I
            hope to take my coding and problem solving skills to the next level.
          </p>
        </div>

        <div className="about__lower" data-aos="fade-up" data-aos-delay="200">
          <div className="about__details">
            <h1>Contact Details</h1>

            <p>Karl Nassar</p>
            <p>Zalka, Beirut</p>
            <p>+961 70 888 558</p>
            <p>kgnassar01@gmail.com</p>
            <p>karlnassar_01@hotmail.com</p>
          </div>

          <div className="about__resume" data-aos="fade-left">
            <a href="/Karl-Nassar.pdf" target="_blank" rel="noreferrer">
              <button className="about__button">
                <FaDownload /> Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
