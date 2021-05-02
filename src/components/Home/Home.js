import React from 'react';
import Blogs from '../Blogs/Blogs';
// import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
// import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header/>
            <Projects/>
            <Blogs/>
            {/* <Skills/> */}
            {/* <Contact/> */}
            <Footer/>
        </div>
    );
};

export default Home;