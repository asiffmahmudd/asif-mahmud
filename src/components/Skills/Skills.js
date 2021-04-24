// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faNode } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Skills.css';
import SkillInfos from './SkillInfos';
import SkillsItem from './SkillsItem';
import skillItems from './SkillInfos';



const Skills = () => {
    return (
        <section className="skills pt-5 pb-5">
            <div className="container">
                <h1 className="text-center text-white">Skills</h1>
                <div className="cstm-border-container d-flex justify-content-center">
                    <span className="cstm-brdr"></span>
                </div>
                <div className="row skill-items-container mt-4 d-flex justify-content-center">
                    {
                        SkillInfos.map(skillinfo => <SkillsItem skillinfo={skillinfo}></SkillsItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;