import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faGoogle, faSkype} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header className="bg-dark pt-5 pb-4">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="nav-brand-container text-center">
                        <Link className="navbar-brand cstm-underline text-center" to="/">Asif</Link>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link cstm-underline" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link cstm-underline" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link cstm-underline" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link cstm-underline" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cstm-underline" href="mailto:asifmahmud3472@gmail.com"><FontAwesomeIcon icon={faGoogle} /></a>
                                <Link className="nav-link cstm-underline" to=""><FontAwesomeIcon icon={faSkype} /></Link>
                                <Link className="nav-link cstm-underline" to=""><FontAwesomeIcon icon={faFacebook} /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;