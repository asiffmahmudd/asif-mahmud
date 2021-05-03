import React from 'react';
import Header from '../Shared/Header/Header';
import Timeline from './Timeline/Timeline';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import './About.css';
import timelineInfo from './Timeline/TimelineInfo';
import ContactSection from '../Home/ContactSection/ContactSection';
import OtherInfo from './OtherInfo/OtherInfo';

const About = () => {
    return (
        <div className="about">
        <Header></Header>
        <section className="about ">
            <div className="about-intro section-padding">
                <div className="container">
                    <h5 className="text-center text-goldenrod">About Me</h5>
                    <h2 className="text-white text-center mb-3">A little Highlight about myself</h2>
                    <p className="text-center text-white col-md-6 mx-auto mt-3">Get to know me better</p>
                    <div className="cstm-border-container d-flex justify-content-center mb-5">
                        <span className="cstm-brdr"></span>
                    </div>
                </div>
            </div>
        </section>
        <section className="timeline">
            <VerticalTimeline>
                {
                    timelineInfo.map((info,index) => <Timeline key={index} info={info}></Timeline>)
                }
            </VerticalTimeline>
        </section>

        <OtherInfo></OtherInfo>

        <ContactSection></ContactSection>
        </div>
    );
};

export default About;