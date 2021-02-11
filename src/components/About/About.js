import React from 'react'
import './About.css'
import PorfilePic from '../../images/profile.png'
import { FaDownload } from 'react-icons/fa'

const About = () => {
    return (
        <div id='aboutId' className="about">
            <div className="about__left">
                <img className="about__image" src={PorfilePic} alt="profile"/>
            </div>

            <div className="about__content">
                <div className="about__paragraph">
                    <h1>About Me</h1>
                    <p>
                        Hi There! I am Karl! I've been coding for 3 months. Currently studying at the Lebanese University, I am a 
                        passionate learner about coding and full stack development. My journey started when I came across a youtube 
                        video talking about react.js and how it is becoming the best web framework in 2020; this got me instantly
                        hooked to javascript and web development. Always seeking new challenges and adventures, I hope to take 
                        my coding and problem solving skills to the next level.
                    </p>
                </div>

                <div className="about__lower">
                    <div className="about__details">
                        <h1>Contact Details</h1>
                
                            <p>Karl Nassar</p>
                            <p>Zalka, Beirut</p>
                            <p>+961 70 888 558</p>
                            <p>kgnassar01@gmail.com</p>
                            <p>karlnassar_01@hotmail.com</p>
                    </div>

                    <div className="about__resume">
                            <a href="https://drive.google.com/file/d/1SRtXim3X-RwSTIYbWCgA6i2MvHEEocpW/view?usp=sharing" target="_blank" rel="noreferrer">
                                <button className="about__button"><FaDownload /> Download Resume</button>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
