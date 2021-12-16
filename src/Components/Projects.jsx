import React from 'react';
import test from '../images/zachnewnew.png';
import project1 from '../images/react.png';

export const Projects = () => {
    return(
        <section className="section projectsSection" id="projects">
            <div className="bg">
                <h1 className="sectionTitle">My Recent Work</h1>
            </div>
            <h2 className="sectionSubtitle">Some projects I've worked on recently</h2>
            <div className="portfolio">
                <a href="https://oahu-attractions.herokuapp.com/home" target="blank" rel="noreferrer" class="portfolio-item">
                    <img src={project1} alt="" className="portfolio-img" />
                </a>
                <a href="#home" class="portfolio-item">
                    <img src={test} alt="" className="portfolio-img" />
                </a>
                <a href="#home" class="portfolio-item">
                    <img src={test}  alt="" className="portfolio-img" />
                </a>
            </div>
        </section>
    )
}


