import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DevIcon from "devicon-react-svg";

const SkillsItem = ({skillinfo}) => {
    

    return (
            <div title={skillinfo.title} className="col-xl-2 col-md-3 col-sm-3 col-4 col-xs-6 mt-5 skill-items text-center" data-aos-easing="ease-out-cubic"
            data-aos-duration="1200" data-aos="fade-down">
                
                {/* <FontAwesomeIcon icon={skillinfo.icon} color="white" size="4x"></FontAwesomeIcon> */}
                {/* {skillinfo.icon} */}
                <DevIcon icon={skillinfo.icon}  />
                {
                    skillinfo.altTitle &&
                    <h4 className="text-center text-white mt-2">{skillinfo.altTitle}</h4>
                }   
            </div>
    );
};

export default SkillsItem;