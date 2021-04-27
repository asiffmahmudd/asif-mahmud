import React from 'react';
import './Banner.css';
import person from '../../../img/person.png';

const Banner = () => {
    return (
        <section className="banner bg-dark">
            <div className="container">
                <div className="row pl-3 pt-5 d-flex align-items-center">
                    <div className="col-lg-2 mt-4 name-intro">
                        <h1 className="text-white">Asif Mahmud<span className="text-goldenrod">.</span></h1>
                        <div className="cstm-brdr-container">
                            <span className="cstm-brdr mt-4"></span>
                        </div>
                        <div className="banner-connections-container mt-4 font-weight-bold">
                            <div className="banner-connections">
                                <a href="https://www.linkedin.com/in/asiffmahmudd/" target="_blank" rel="noreferrer" className="cstm-underline text-white">LinkedIn</a>
                                <span className="right-border"></span>
                                <a href="https://github.com/asiffmahmudd/" target="_blank" rel="noreferrer"  className="cstm-underline text-white">Github</a>
                            </div>
                            <div className="banner-connections">
                                <a href="mailto:asifmahmud3472@gmail.com" className="cstm-underline text-white">Gmail</a>
                                <span className="right-border"></span>
                                <a href="https://www.facebook.com/asiffmahmudd/" className="cstm-underline text-white" target="_blank" rel="noreferrer">Facebook</a>
                            </div>
                        </div>
                        <div>
                            <a href="#contact" className="cstm-btn">Contact Me</a>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 text-center">
                        <img src={person} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <p className="text-goldenrod font-weight-bold">Introduction</p>
                        <h1 className="text-white">Full Stack Web Developer</h1>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;