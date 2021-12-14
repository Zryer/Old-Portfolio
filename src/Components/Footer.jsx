import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <section className="section footerSection" id="footer">
            <div className="bg">
                <h1 className="sectionTitle sectionTitleFooter">Footer</h1>
            </div>
            <h2 className="sectionSubtitle sectionSubtitleFooter">Welcome to my website</h2>
            <ul className="footer-list">
                <li className="footer-list-item"><a href="https://github.com/Zryer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="footerIcon"></FontAwesomeIcon></a></li>
                <li className="footer-list-item"><a href="https://www.linkedin.com/in/zachary-fisher-1b6448221/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="footerIcon" /></a></li>
                <li className="footer-list-item"><a href="https://github.com/Zryer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="footerIcon" /></a></li>
            </ul>
            <img alt="" className="intro-img" />
        </section>
    )
}




