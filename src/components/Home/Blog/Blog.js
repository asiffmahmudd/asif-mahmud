import React from 'react';
import './Blog.css';

const Blog = () => {

    return (
        <section className="blog-section section-padding" data-aos="fade-down" data-aos-easing="ease-out-cubic"
        data-aos-duration="1200" id="blog">
            <div className="container">
                <h5 className="text-center text-goldenrod">Blogs</h5>
                <h2 className="text-white text-center mb-3">Recent articles written by me</h2>
                <p className="text-center text-white col-md-6 mx-auto mt-3"></p>
                <div className="cstm-border-container d-flex justify-content-center mb-5">
                    <span className="cstm-brdr"></span>
                </div>
                <div className="row justify-content-center">
                    <h1 className="text-white">Coming soon</h1>
                </div>
            </div>
        </section>
    );
};

export default Blog;