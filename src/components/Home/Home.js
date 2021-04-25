import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import ContactSection from './ContactSection/ContactSection';
import './Home.css'
import RecentWorks from './RecentWorks/RecentWorks';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <>
            <Header></Header>  
            <Banner></Banner>
            <Skills></Skills>
            <RecentWorks></RecentWorks>
            <ContactSection></ContactSection>
            
        </>
    );
};

export default Home;