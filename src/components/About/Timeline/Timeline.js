import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Timeline = ({info}) => {
    return (
        <VerticalTimelineElement
            className={"vertical-timeline-element--"+info.class}
            contentStyle={{background: '#404046', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid  #404046' }}
            date={info.date}
            iconStyle={{ background: '#404046', color: 'goldenrod' }}
            icon={<FontAwesomeIcon icon={info.icon} size="lg"/>}
        >
            <h3 className="vertical-timeline-element-title">{info.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{info.subtitle}</h4>
            <p>{info.para}</p>
        </VerticalTimelineElement>
    );
};

export default Timeline;