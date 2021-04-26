import React from 'react';
import './ProjectItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const RecentWorksItem = ({info}) => {
    return (
        <div className="col-md-4 mt-4 project-item">
            <div className="card border-0 shadow-lg">
                <div className="img-container p-3 bg-dark">
                    <img className="card-img-top" src={info.img} alt="" />
                    <div className="overlay">
                        <h5 className="text-center mt-3 text-goldenrod">{info.title}</h5>
                        <p className="ml-3 mr-3 mt-4 text-white text-center"><span className="font-weight-bold">Technologies Used: </span>{info.technologies}</p>
                        <p className="mt-3 text-white ml-3 mr-3 text-center">{info.desc}</p>
                        <ul className="text-white mt-4 text-center list-inline">
                            <a className="list-inline-item" href={info.live} target="_blank" rel="noreferrer" data-tooltip="Live">
                                <FontAwesomeIcon icon={faShare} color="white" size="lg"/>
                            </a>
                            <a className="list-inline-item" href={info.gitClient} target="_blank" rel="noreferrer" data-tooltip="Github Repo" >
                                <FontAwesomeIcon icon={faGithub} color="white" size="lg"/>
                            </a>
                            {
                                info.gitServer &&
                                <a className="list-inline-item" href={info.gitServer} target="_blank" rel="noreferrer" data-tooltip="Github Server Side">
                                    <FontAwesomeIcon icon={faGitAlt} color="white" size="lg"/>
                                </a>
                            }
                            
                        </ul>
                    </div>
                </div>
                {/* <div className="card-body bg-dark">
                    <h5 className="card-title text-white text-center">{info.title}</h5>
                </div> */}
            </div>
        </div>
    );
};

export default RecentWorksItem;