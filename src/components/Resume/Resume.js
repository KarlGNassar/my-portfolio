import React from 'react'
import './Resume.css'
import{ FaDatabase } from 'react-icons/fa'
import { GoStar } from 'react-icons/go'
import { FiMonitor } from 'react-icons/fi'

const Resume = () => {
    return (
        <div id="resumeId" className="resume">
                <div className="resume__option">
                        <div className="resume__optionLeft">
                            <h1 className="resume__title education">Education</h1>
                        </div>

                        <div className="resume__optionRight">
                            <div className="resume__info">
                                    <h1>
                                        LU - Faculty of Engineer - Branch II
                                    </h1>

                                    <h4>
                                        Bachelor's Degree, Software Engineer.
                                    </h4>

                                    <p>
                                        Currently a second year student.
                                    </p>
                            </div>
                        </div>
                </div>
                <div className="resume__option">
                    <div className="resume__optionLeft">
                        <h1 className="resume__title work">Work</h1>
                    </div>

                    <div className="resume__optionRight">
                        <div className="resume__info">
                                <h1>
                                    No work experience yet.
                                </h1>

                                <h4>
                                    Joined many communities on Discord and Reddit.
                                </h4>

                                <p>
                                    Passionate for a chance to dive deep into a professional workspace.
                                </p>
                        </div>
                    </div>
                </div>
                <div className="resume__option">
                    <div className="resume__optionLeft">
                        <h1 className="resume__title skills">Skills</h1>
                    </div>

                    <div className="resume__optionRight">
                        <div className="resume__info">
                            <div className="resume__wrapper">
                                <div className="resume__infoSkills">
                                    <FiMonitor className="resume__icon" />
                                    <h1>Frontend</h1>
                                    <p>ReactJS</p>
                                    <p>HTML5</p>
                                    <p>CSS3</p>
                                    <p>JavaScript</p>
                                    <p>Bootstrap</p>
                                    <p>Material UI</p>
                                    <p>API</p>
                                </div>

                                <div className="resume__infoSkills">
                                    <FaDatabase className="resume__icon"/>
                                    <h1>Backend</h1>
                                    <p>NodeJS</p>
                                    <p>NPM</p>
                                    <p>Expres</p>
                                    <p>SQL</p>
                                    <p>MongoDB</p>
                                    <p>Firebase</p>
                                    <p>Rest API</p>
                                    <p>Python</p>
                                </div>

                                <div className="resume__infoSkills">
                                    <GoStar className="resume__icon" />
                                    <h1>Others</h1>
                                    <p>GitHub</p>
                                    <p>Redux</p>
                                    <p>GraphQL</p>
                                    <p>Yarn</p>
                                    <p>C++</p>
                                    <p>VS Code</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Resume
