import React from 'react';
import './RecentWorksItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const RecentWorksItem = ({info}) => {
    return (
        <div className="col-md-4 mt-4 recent-work-item">
            <div class="card border-0 shadow-lg">
                <div className="img-container p-3 bg-dark">
                    <img class="card-img-top" src={info.img} alt="" />
                    <div className="overlay">
                        <h5 className="text-center mt-3 text-goldenrod">{info.title}</h5>
                        <p className="ml-3 mr-3 mt-4 text-white text-center"><span className="font-weight-bold">Technologies Used: </span>{info.technologies}</p>
                        <ul className="text-white mt-5 text-center list-inline">
                            <a class="list-inline-item" title="Live Site" >
                                <FontAwesomeIcon icon={faShare} data-toggle="tooltip" color="white"/>
                            </a>
                            <a class="list-inline-item" title="Github Repo">
                                <FontAwesomeIcon icon={faGit} color="white"/>
                            </a>
                            {
                                info.gitServer &&
                                <a class="list-inline-item" title="Github Server Side">
                                    <FontAwesomeIcon icon={faGitAlt} color="white"/>
                                </a>
                            }
                            
                        </ul>
                    </div>
                </div>
                {/* <div class="card-body bg-dark">
                    <h5 class="card-title text-white text-center">{info.title}</h5>
                </div> */}
            </div>
        </div>
    );
};

export default RecentWorksItem;