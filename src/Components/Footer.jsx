import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return(
        <section className="section footerSection" id="footer">
            <div className="bg">
                <h1 className="sectionTitle sectionTitleFooter">Footer</h1>
            </div>
            <h2 className="sectionSubtitle sectionSubtitleFooter">Welcome to my website</h2>
            <a href="https://github.com/Zryer"><FontAwesomeIcon icon={faCoffee} className="footerIcon"/></a>
            <img alt="" className="intro-img"/>
        </section>
    )
}




