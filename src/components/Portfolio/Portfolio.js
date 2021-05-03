import React from 'react';
import ContactSection from '../Home/ContactSection/ContactSection';
import Header from '../Shared/Header/Header';
import ProjectItem from '../Shared/ProjectItem/ProjectItem';
import './Portfolio.css';
import javascriptProjects from './Projects/javascriptProjects';
import reactProjects from './Projects/reactProjects';
import responsiveWeb from './Projects/responsiveWebProjects';
import wordpress from './Projects/wordpress';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Header></Header>
            <section className="portfolio bg-cstm pt-5 pb-5">
                <div className="container">
                    <h5 className="text-center text-goldenrod">My Projects</h5>
                    <h2 className="text-white text-center mb-3">Projects I have worked on throughout my academic and professional life</h2>
                    <p className="text-center text-white col-md-6 mx-auto mt-3">It's a mixture of professional and self projects. Feel free to take a look at them</p>
                    <div className="cstm-border-container d-flex justify-content-center mb-5">
                        <span className="cstm-brdr"></span>
                    </div>

                    <div className="test d-flex justify-content-center">
                        <ul className="nav nav-tabs justify-content-center mb-5 mt-4" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" href="#all" id="all-tab" data-toggle="tab" type="button" role="tab" aria-controls="all" aria-selected="true">All</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="react-tab" href="#react" data-toggle="tab"  type="button" role="tab" aria-controls="react" aria-selected="false">React</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="javascript-tab" href="#javascript"  data-toggle="tab" type="button" role="tab" aria-controls="javascript" aria-selected="false">Javascript/Express</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="responsive-web-tab" href="#responsive-web"  data-toggle="tab" type="button" role="tab" aria-controls="responsive-web" aria-selected="false">Responsive Web</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="wordpress-tab" href="#wordpress"  data-toggle="tab" type="button" role="tab" aria-controls="wordpress" aria-selected="false">Wordpress</button>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                            <div className="row">
                            {
                                reactProjects.map((info,index) => <ProjectItem key={index} info={info}></ProjectItem>)
                            }
                            {
                                responsiveWeb.map((info,index) => <ProjectItem key={index} info={info}></ProjectItem>)
                            }
                            {
                                wordpress.map((info,index) => <ProjectItem key={index} info={info}></ProjectItem>)
                            }
                            {
                                javascriptProjects.map((info,index) => <ProjectItem key={index} info={info}></ProjectItem>)
                            }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="react" role="tabpanel" aria-labelledby="react-tab">
                            <div className="row">
                            {
                                reactProjects.map((info,index) => <ProjectItem key={index} info={info}></ProjectItem>)
                            }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="javascript" role="tabpanel" aria-labelledby="javascript-tab">
                            <div className="row">
                            {
                                javascriptProjects.map((info,index) => <ProjectItem key={index} info={info}></ProjectItem>)
                            }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="responsive-web" role="tabpanel" aria-labelledby="responsive-web-tab">
                            <div className="row">
                            {
                                responsiveWeb.map((info,index) => <ProjectItem key={index} info={info}></ProjectItem>)
                            }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="wordpress" role="tabpanel" aria-labelledby="wordpress-tab">
                            <div className="row">
                            {
                                wordpress.map((info,index) => <ProjectItem key={index} info={info}></ProjectItem>)
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Portfolio;