import React from 'react';
import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icons">
                        <a href="#">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className='primery-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Rohit Jagtap</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Devloper",
                                        1000,
                                        "MERN Stack Devloper",
                                        1000,
                                        "React Dev",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of buildinf applications with front and back end oprations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="Rohit.pdf" download='Rohit Rohit.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}
