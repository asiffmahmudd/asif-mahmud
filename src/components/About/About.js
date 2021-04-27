import React from 'react';
import Header from '../Shared/Header/Header';
import Timeline from './Timeline/Timeline';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import './About.css';
import timelineInfo from './Timeline/TimelineInfo';

const About = () => {
    return (
        <>
        <Header></Header>
        <div className="about">
            <VerticalTimeline>
                {
                    timelineInfo.map(info => <Timeline info={info}></Timeline>)
                }
            </VerticalTimeline>
        </div>
        </>
    );
};

export default About;