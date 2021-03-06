import React from 'react';
import './OtherInfo.css';

const OtherInfo = () => {
    return (
        <section className="other-info p-5">
            <div className="container" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1200">
                <h5 className="text-center text-goldenrod">Other Infos</h5>
                <h2 className="text-white text-center mb-3">More About me</h2>
                <p className="text-center text-white col-md-6 mx-auto mt-3">Get to know me better</p>
                <div className="cstm-border-container d-flex justify-content-center mb-5">
                    <span className="cstm-brdr"></span>
                </div>
                <div id="accordion" className="bg-dark">
                    <div className="card">
                        <div className="card-header" id="hobbies-header">
                        <h5 className="mb-0">
                            <button className="btn btn-link cstm-underline" data-toggle="collapse" data-target="#hobbies" aria-expanded="true" aria-controls="hobbies">
                            Hobbies
                            </button>
                        </h5>
                        </div>

                        <div id="hobbies" className="collapse show" aria-labelledby="hobbies-header" data-parent="#accordion">
                        <div className="card-body">
                            <ul>
                                <li>Football</li>
                                <li>Music</li>
                                <li>Travelling</li>
                                <li>Chess</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="online-courses-header">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed cstm-underline" data-toggle="collapse" data-target="#online-courses" aria-expanded="false" aria-controls="online-courses">
                            Online Courses
                            </button>
                        </h5>
                        </div>
                        <div id="online-courses" className="collapse" aria-labelledby="online-courses-header" data-parent="#accordion">
                            <div className="card-body">
                                <ul>
                                    <li>Python for Everybody Specialization -&nbsp;<span><a href="https://coursera.org/share/9c3ce39ff67fe75f0d6003fd136bd51e" target="_blank" className="cstm-underline" rel="noreferrer">View Certificate</a></span></li>
                                    <li>HTML, CSS, and Javascript for Web Developers -&nbsp;<span ><a href="https://coursera.org/share/c4aa989a6f83dc1f8181a22882006843" target="_blank" className="cstm-underline" rel="noreferrer">View Certificate</a></span></li>
                                    <li>Front-End Web UI Frameworks and Tools: Bootstrap 4 -&nbsp;<span><a href="https://coursera.org/share/2274aa0198bdd6fe28b7af1d167a76e9" className="cstm-underline" target="_blank" rel="noreferrer">View Certificate</a></span></li>
                                    <li>Web Application Technologies and Django -&nbsp;<span><a href="https://coursera.org/share/ad072412323d4ebf7964fa7896eddee1" className="cstm-underline" target="_blank" rel="noreferrer">View Certificate</a></span></li>
                                    <li>Java for Android -<span><a href="https://coursera.org/share/10ba8493537b40a3dbd66a50f9572fde" className="cstm-underline" target="_blank" rel="noreferrer"> View Certificate</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="other-projects-header">
                        <h5 className="mb-0">
                            <button className="btn btn-link cstm-underline" data-toggle="collapse" data-target="#other-projects" aria-expanded="true" aria-controls="other-projects">
                            Other Projects
                            </button>
                        </h5>
                        </div>

                        <div id="other-projects" className="collapse" aria-labelledby="other-projects-header" data-parent="#accordion">
                        <div className="card-body">
                            <ul>
                                <li>
                                    <h5>Kothay ki pabo</h5>
                                    <h6>Features:</h6>
                                    <ul>
                                        <li>A one stop platform for products from all online vendors</li>
                                        <li>Search for products</li>
                                        <li>Compare prices</li> 
                                        <li>Technology: Pyhton, Django, HTML, CSS, Bootstrap, Javascript, Sqlite</li>   
                                    </ul>    
                                    <h6><a href="https://github.com/asiffmahmudd/Final-Year-Project" target="_blank" rel="noreferrer" ><i>Github Repo</i></a></h6>
                                </li>
                                <li>
                                    <h5>Hospital Management</h5>
                                    <h6>Features:</h6>
                                    <ul>
                                        <li>Add patient</li>
                                        <li>Delete Patient</li>
                                        <li>Search for patient</li>    
                                        <li>Technology: Java, JavaFX, File System</li>
                                    </ul>  
                                    <h6><a href="https://github.com/asiffmahmudd/Hospital-Management" target="_blank" rel="noreferrer" ><i>Github Repo</i></a></h6>  
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherInfo;