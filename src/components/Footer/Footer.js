import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="container-brand">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="col-md-4">
                        <p className="mb-0">&copy; copyright 2021 | All Rights Reserved.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="mb-0">This site is designed by <span style={{color: '#26de81'}}>NAZMUS SAKIB</span> </p>
                    </div>
                    <div className="col-md-4 social-icons pt-0 ml-auto text-center">
                        <a href="https://www.linkedin.com/in/nazmus-sakibb/" alt="" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/sakibabir52" alt="" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.facebook.com/nazmus.sakibb" alt="" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://twitter.com/nazmus_sakibb" alt="" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;