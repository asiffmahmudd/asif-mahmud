import React from 'react';
import './Skills.css';
import SkillInfos from './SkillInfos';
import SkillsItem from './SkillsItem';



const Skills = () => {
    return (
        <section className="skills section-padding">
            <div className="container">
                <h5 className="text-center text-goldenrod">Skills</h5>
                <h2 className="text-white text-center mb-3">What I Am Good At</h2>
                <p className="text-center text-white col-md-6 mx-auto mt-3">These are the technologies I used on different projects. But I am also flexible to use other technologies and I can adapt pretty quickly</p>
                <div className="cstm-border-container d-flex justify-content-center mb-5">
                    <span className="cstm-brdr"></span>
                </div>
                <div className="row skill-items-container mt-4 d-flex justify-content-center">
                    {
                        SkillInfos.map((skillinfo,index) => <SkillsItem key={index} skillinfo={skillinfo}></SkillsItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;