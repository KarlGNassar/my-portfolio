import React from 'react'
import './About.css'
import PorfilePic from '../../images/profile.jpg'
import { FaDownload } from 'react-icons/fa'

const About = () => {
    return (
        <div className="about" id='about'>
            <div className="about__left">
                <img className="about__image" src={PorfilePic} alt="profile"/>
            </div>

            <div className="about__content">
                <div className="about__paragraph">
                    <h1>About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quam magnam mollitia eaque voluptate. Voluptatibus, a quis quo esse aut maiores laudantium qui modi blanditiis consectetur corporis facere dolor harum porro veniam explicabo deserunt officiis nisi molestiae velit. Consequatur eveniet vel inventore! Atque necessitatibus tempore nesciunt odit unde voluptas architecto?
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
                        <a>
                            <button className="about__button"><FaDownload /> Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
