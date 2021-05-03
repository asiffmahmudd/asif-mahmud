import React from 'react';
import './RecentWorks.css';
import recentWorkInfo from './recentWorkInfo';
import ProjectItem from '../../Shared/ProjectItem/ProjectItem';
import { Link } from 'react-router-dom';

const RecentWorks = () => {
    return (
        <section className="recent-works section-padding" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1200">
            <div className="container">
                <h5 className="text-center text-goldenrod">Recent Works</h5>
                <h2 className="text-white text-center mb-3">Projects I have worked on Recently</h2>
                <p className="text-center text-white col-md-6 mx-auto mt-3">It's a mixture of professional and self projects. Feel free to take a look at them</p>
                <div className="cstm-border-container d-flex justify-content-center mb-5">
                    <span className="cstm-brdr"></span>
                </div>
                <div className="row mt-5">
                    {
                        recentWorkInfo.map((info,index) => <ProjectItem key={index} info={info}></ProjectItem>)
                    }
                </div>
                <div className="mt-4 text-center">
                    <Link to="/portfolio" className="cstm-btn">See All</Link>
                </div>
                
            </div>
        </section>
    );
};

export default RecentWorks;