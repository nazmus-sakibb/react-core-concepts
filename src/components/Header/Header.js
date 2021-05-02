import React from 'react';
import Typed from 'react-typed';
import HeaderProfile from '../../images/header-profile-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <section className="header-container">
            <div className="container-brand">
                <div className="row main-info">
                    <div className="col-md-6 col-sm-12 header-text">
                        <p className="brand-color">Hello, I'm</p>
                        <h2>NAZMUS SAKIB</h2>
                        <Typed
                            className="typed-text brand-color"
                            strings={['Web Developer', 'Programmer', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB']}
                            typeSpeed={50}
                            backSpeed={60}
                            loop
                        />
                        <p className="py-4">A passionate and enthusiastic web developer with lots of goals which enabled me to develop my knowledge and encourage me regularly to learn the latest things related to that field. I always ready to learn and implement new things. My ultimate goal is to be the best version of myself everyday. </p>
                        <a href="https://drive.google.com/uc?export=download&id=1qDygBFVtcwjighJ1TGERL3NJa75DlFgz" alt="" target="_blank" className="button-brand text-decoration-none">Resume</a>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/nazmus-sakibb/" alt="" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://github.com/sakibabir52" alt="" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.facebook.com/nazmus.sakibb" alt="" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com/nazmus_sakibb" alt="" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 pb-sm-5 header-image">
                        <img className="img-fluid" src={HeaderProfile} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;