import React from 'react'
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__arrow">
                <IoIosArrowUp onClick={() => scroll.scrollToTop()}/>
            </div>

            <div className="footer__media">
                <a href="https://www.facebook.com/karl.nassar/" target="_blank" rel="noreferrer">
                    <FaFacebookF className="footer__icon"/>
                </a>
                <a href="https://www.linkedin.com/in/karl-nassar-2296a3202/" target="_blank" rel="noreferrer">
                <FaLinkedin className="footer__icon"/>
                </a>
                <a href="https://www.instagram.com/karlnassar1/" target="_blank" rel="noreferrer">
                <ImInstagram className="footer__icon"/>
                </a>
                <a href="https://github.com/KarlGNassar"target="_blank" rel="noreferrer">
                <FaGithub className="footer__icon"/>
                </a>
            </div>
            <small>Made By <span className="footer__name">Karl Nassar</span></small>
        </div>
    )
}

export default Footer
