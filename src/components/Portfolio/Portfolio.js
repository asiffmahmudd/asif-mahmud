import React from 'react';
import Header from '../Shared/Header/Header';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <>
            <Header></Header>
            <section className="portfolio bg-dark pt-5 pb-5">
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
                                <button className="nav-link" id="contact-tab" href="#contact"  data-toggle="tab" type="button" role="tab" aria-controls="contact" aria-selected="false">Responsive Web</button>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        his event fires on tab show, but before the new tab has been shown. Use event.target and event.relatedTarget to target the active tab and the previous active tab (if available) respectively.
                        </div>
                        <div className="tab-pane fade" id="react" role="tabpanel" aria-labelledby="react-tab">
                        Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. Returns to the caller before the tab pane has actually been shown (i.e. before the shown.bs.tab event occurs).
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        You can activate a tab or pill navigation without writing any JavaScript by simply specifying data-bs-toggle="tab" or data-bs-toggle="pill" on an element. Use these data attributes on .nav-tabs or .nav-pills.
                        </div>
                    </div>

                    <div className="row mt-5">
                        {
                            
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;