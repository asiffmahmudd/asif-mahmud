import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <section className="banner bg-dark">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-3">
                        <h1 className="text-white">Asif Mahmud<span className="text-goldenrod">.</span></h1>
                        <span className="cstm-brdr mt-4"></span>
                        <div className="banner-connections-container mt-4 font-weight-bold">
                            <div className="banner-connections">
                                <Link to="" className="cstm-underline text-white">LinkedIn</Link>
                                <span className="right-border"></span>
                                <Link to="" className="cstm-underline text-white">Github</Link>
                            </div>
                            <div className="banner-connections">
                                <Link to="" className="cstm-underline text-white">Gmail</Link>
                                <span className="right-border"></span>
                                <Link to="" className="cstm-underline text-white">Facebook</Link>
                            </div>
                        </div>
                        <div>
                            <a href="/" className="cstm-btn">Contact Me</a>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <img src="" alt=""/>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;