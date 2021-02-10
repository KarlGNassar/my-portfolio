import React from 'react'
import './Projects.css'
import Icon1 from '../../images/chat.svg'
import Icon2 from '../../images/corona.svg'
import Icon3 from '../../images/easein.svg'
import Icon4 from '../../images/netflix.svg'
import { FiLink } from 'react-icons/fi'
import { VscGithub } from 'react-icons/vsc'

const Projects = () => {
    return (
        <div id="projectsId" className="projects">
            <h2>Check out some of my projects.</h2>

            <div className="projects__container">
                <div className="projects__card">
                    <img src={Icon1} alt="illustration"/>
                    <h2>Chat App:</h2>
                    <p>Techs used: <br/>MongoDB, Express, Reactjs, Nodejs, Pusher, Firebase authentication</p>
                    <div className="projects__icons">
                        <a href="https://chat-mern-ae2c1.firebaseapp.com/" target="_blank" rel="noreferrer">
                            <FiLink className="projects__icon"/>
                        </a>
                        <a href="https://github.com/KarlGNassar/chat-app" target="_blank" rel="noreferrer">
                            <VscGithub className="projects__icon"/>
                        </a>
                    </div>
                </div>
            
            
                <div className="projects__card">
                    <img src={Icon2} alt="illustration"/>
                    <h2>Covid-19 Tracker:</h2>
                    <p>Techs used: <br/>Reactjs, public API</p>
                    <div className="projects__icons">
                        <a href="https://covid-19-tracker-1861b.web.app/" target="_blank" rel="noreferrer">
                            <FiLink className="projects__icon"/>
                        </a>
                        <a href="https://github.com/KarlGNassar/Covid-Tracker" target="_blank" rel="noreferrer">
                            <VscGithub className="projects__icon"/>
                        </a>
                    </div>
                </div>
            
            
                <div className="projects__card">
                    <img src={Icon3} alt="illustration"/>
                    <h2>Ease-in:</h2>
                    <p>Techs used:<br/> Reactjs, public API, Styled Components</p>
                    <div className="projects__icons">
                        <a href="https://gracious-swanson-82d089.netlify.app/" target="_blank" rel="noreferrer">
                            <FiLink className="projects__icon"/>
                        </a>
                        <a href="https://github.com/KarlGNassar/Ease-in" target="_blank" rel="noreferrer">
                            <VscGithub className="projects__icon"/>
                        </a>
                    </div>
                </div>
            
            
                <div className="projects__card">
                    <img src={Icon4} alt="illustration"/>
                    <h2>Netflix clone (under construction):</h2>
                    <p>Techs used: <br/>Reactjs, TMdb, Stripe payment(soon to be implemented), Redux, Firebase auth</p>
                    <div className="projects__icons">
                        <a href="https://netflix-2774d.web.app/" target="_blank" rel="noreferrer">
                        <FiLink className="projects__icon"/>
                        </a>
                        <a href="https://github.com/KarlGNassar/netflix-clone-redux" target="_blank" rel="noreferrer">
                        <VscGithub className="projects__icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
