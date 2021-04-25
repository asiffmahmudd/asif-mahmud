import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SkillsItem = ({skillinfo}) => {
    return (
            <div className="col-xl-2 col-md-3 col-sm-3 col-4 col-xs-6 mt-3 skill-items text-center">
                <FontAwesomeIcon icon={skillinfo.icon} color="white" size="4x"></FontAwesomeIcon>
                <h4 className="text-center text-white mt-2">{skillinfo.title}</h4>
            </div>
    );
};

export default SkillsItem;