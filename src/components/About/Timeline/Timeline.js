import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Timeline.css';

const Timeline = ({info}) => {
    return (
        <VerticalTimelineElement
            className={"vertical-timeline-element--"+info.class}
            contentStyle={{background: '#2e2e35', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid  #2e2e35' }}
            date={info.date}
            iconStyle={{ background: '#2e2e35', color: '#fff' }}
            icon={<FontAwesomeIcon icon={info.icon} size="lg"/>}
        >
            <h3 className="vertical-timeline-element-title">{info.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{info.subtitle}</h4>
            <p>{info.para}</p>
        </VerticalTimelineElement>
    );
};

export default Timeline;