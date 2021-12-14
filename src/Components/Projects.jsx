import React from 'react';
import test from '../images/zachnewnew.png';

export const Projects = () => {
    return(
        <section className="section projectsSection" id="projects">
            <div className="bg">
                <h1 className="sectionTitle">Projects</h1>
            </div>
            <h2 className="sectionSubtitle">Welcome to my website</h2>
            <img  alt="" className="intro-img"/>
            <div className="portfolio">
                <a href="#" class="portfolio-item">
                    <img src={test} alt="" className="portfolio-img" />
                </a>
                <a href="#" class="portfolio-item">
                    <img src={test} alt="" className="portfolio-img" />
                </a>
                <a href="#" class="portfolio-item">
                    <img src={test}  alt="" className="portfolio-img" />
                </a>
            </div>
        </section>
    )
}


