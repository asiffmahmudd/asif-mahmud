import React from 'react';
import './BlogItem.css'

const BlogItem = ({blogItem}) => {
    return (
        <div className="blog-item">
            <div className="card shadow" style={{width:"18rem"}}>
                <div className="card-img-container">
                    <img className="card-img-top img-fluid" src={blogItem.img} style={{height:"230px"}} alt="" />
                </div>
                <div className="card-body" style={{height:"250px"}}>
                    <h5 className="card-title" style={{height:"20%"}}>{blogItem.title}</h5>
                    <p className="card-text">{blogItem.desc}</p>
                    <a href={blogItem.link} className="card-link" target="_blank" rel="noreferrer">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;