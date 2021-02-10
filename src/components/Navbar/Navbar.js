import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [show, handleShow] = useState(false)
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)

        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`navbar ${show && 'navbar__dark'}`}>
            <div className="navbar__elements">
                <Link 
                    className="navbar__links"
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-45}
                >
                    <p>Home</p>
                </Link>
                <Link 
                    className="navbar__links"
                    to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-45}
                >
                    <p>About</p>
                </Link>
                <Link 
                    className="navbar__links"
                    to='resume'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-45}
                >
                    <p>Resume</p>
                </Link>
                <Link 
                    className="navbar__links"
                    to='works'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-45}
                >
                    <p>Works</p>
                </Link>
                <Link 
                    className="navbar__links"
                    to='contact'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-45}
                >
                    <p>Contact</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
