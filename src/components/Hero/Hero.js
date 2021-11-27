import React from 'react'
import './Hero.css'
import HeroBg from '../../images/hero-bg.jpg'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'

const Hero = () => {
    return (
        <div className="hero" id='homeId'>
            <div className="hero__background">
                <img src={HeroBg} alt="stars"/>
            </div>

            <div className="hero__content">
                <h1>
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter.typeString("I'm Karl Nassar")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Full Stack Developer")
                                .start()
                        }}    
                    />
                </h1>
                <p>
                    Based in Lebanon. I eat, sleep and breathe code.
                </p>
                <div className="hero__contentIcons">
                    <a href="https://www.facebook.com/karl.nassar/" target="_blank" rel="noreferrer">
                        <FaFacebookF className="hero__icon"/>
                    </a>
                    <a href="www.linkedin.com/in/karl-nassar" target="_blank" rel="noreferrer">
                    <FaLinkedin className="hero__icon"/>
                    </a>
                    <a href="https://www.instagram.com/karlnassar1/" target="_blank" rel="noreferrer">
                    <ImInstagram className="hero__icon"/>
                    </a>
                    <a href="https://github.com/KarlGNassar"target="_blank" rel="noreferrer">
                    <FaGithub className="hero__icon"/>
                    </a>
                </div>
            </div>

            <div className="hero__arrow">
                <Link
                    to='aboutId'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-45}
                >
                    <IoIosArrowDown 
                        className="hero__arrowIcon" />
                </Link>
            </div>
        </div>
    )
}

export default Hero
