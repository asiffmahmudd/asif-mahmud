import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import './Home.css'
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <>
            <Header></Header>  
            <Banner></Banner>
            <Skills></Skills>
        </>
    );
};

export default Home;