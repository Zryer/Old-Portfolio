import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <section className="section footerSection" id="footer">
            <div className="bg">
                <h1 className="sectionTitle sectionTitleFooter">Contact Me Here</h1>
            </div>
            <br />
            <a href="zacharyfisher808@gmail.com" class="footer-email">zacharyfisher808@gmail.com</a>
            <ul className="footer-list">
                <li className="footer-list-item"><a href="https://github.com/Zryer" target="blank" rel="noreferrer" className="footer-list-links"><FontAwesomeIcon icon={faGithub} className="footerIcon"></FontAwesomeIcon></a></li>
                <li className="footer-list-item"><a href="https://www.linkedin.com/in/zachary-fisher-1b6448221/" target="blank" rel="noreferrer" className="footer-list-links"><FontAwesomeIcon icon={faLinkedin} className="footerIcon" /></a></li>
            </ul>
        </section>
    )
}




