import React from 'react'
import './Hero.css'
import HeroBg from '../../images/hero-bg.jpg'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div className="hero" id='home'>
            <div className="hero__background">
                <img src={HeroBg} alt="stars"/>
            </div>

            <div className="hero__content">
                <h1>I'm Karl Nassar.</h1>
                <p>
                    Based in Lebanon. I eat, sleep and breathe code.
                </p>
                <div className="hero__contentIcons">
                    <a href="">
                        <FaFacebookF className="hero__icon"/>
                    </a>
                    <a href="">
                    <FaLinkedin className="hero__icon"/>
                    </a>
                    <a href="">
                    <ImInstagram className="hero__icon"/>
                    </a>
                    <a href="">
                    <FaGithub className="hero__icon"/>
                    </a>
                </div>
            </div>

            <div className="hero__arrow">
                <Link
                    to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-90}
                >
                    <IoIosArrowDown 
                        className="hero__arrowIcon" />
                </Link>
            </div>
        </div>
    )
}

export default Hero
