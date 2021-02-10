import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__elements">
                <Link 
                    className="navbar__links"
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                >
                    <p>Home</p>
                </Link>
                <Link 
                    className="navbar__links"
                    to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                >
                    <p>About</p>
                </Link>
                <Link 
                    className="navbar__links"
                    to='resume'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                >
                    <p>Resume</p>
                </Link>
                <Link 
                    className="navbar__links"
                    to='works'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                >
                    <p>Works</p>
                </Link>
                <Link 
                    className="navbar__links"
                    to='contact'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                >
                    <p>Contact</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
