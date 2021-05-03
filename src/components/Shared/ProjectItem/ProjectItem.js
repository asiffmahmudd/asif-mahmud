import React from 'react';
import './ProjectItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const ProjectItem = ({info}) => {
    return (
        <div className="col-md-6 col-lg-4 mt-4 project-item" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className="card rounded-0 border-0 shadow-lg">
                <div className="img-container ">
                    <img className="card-img-top rounded-0" src={info.img} alt="" />
                    <div className="overlay">
                        <h5 className="text-center mt-3 text-goldenrod">{info.title}</h5>
                        <p className="ml-3 mr-3 mt-4 text-white text-center"><span className="font-weight-bold">Technologies Used: </span>{info.technologies}</p>
                        <p className="mt-3 text-white ml-3 mr-3 text-center">{info.desc}</p>
                        <ul className="text-white mt-4 text-center list-inline">
                            <a className="list-inline-item" href={info.live} target="_blank" rel="noreferrer" data-tooltip="Live">
                                <FontAwesomeIcon icon={faShare} color="white" size="lg"/>
                            </a>
                            {
                                info.gitClient &&
                                <a className="list-inline-item" href={info.gitClient} target="_blank" rel="noreferrer" data-tooltip="Github Repo" >
                                    <FontAwesomeIcon icon={faGithub} color="white" size="lg"/>
                                </a>
                            }
                            {
                                info.gitServer &&
                                <a className="list-inline-item" href={info.gitServer} target="_blank" rel="noreferrer" data-tooltip="Server Repo">
                                    <FontAwesomeIcon icon={faGitAlt} color="white" size="lg"/>
                                </a>
                            }
                            
                        </ul>
                    </div>
                </div>
                {/* <div className="card-body bg-cstm">
                    <h5 className="card-title text-white text-center">{info.title}</h5>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectItem;