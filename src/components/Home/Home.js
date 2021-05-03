import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import ContactSection from './ContactSection/ContactSection';
import './Home.css'
import RecentWorks from './RecentWorks/RecentWorks';
import Skills from './Skills/Skills';


const Home = () => {
    
    return (
        <div className="home">
            <Header></Header>  
            <Banner></Banner>
            <Skills></Skills>
            <RecentWorks></RecentWorks>
            <Blog></Blog>
            <ContactSection></ContactSection>
            
        </div>
    );
};

export default Home;