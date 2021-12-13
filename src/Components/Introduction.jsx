import React from 'react';
import Portrait from '../images/Portrait.JPG'

export const Introduction = () => {
    return(
        <section className="section introductionSection" id="introduction">
            <div className="bg">
                <h1 className="sectionTitle sectionTitleIntro">Hello, I'm Zachary Fisher!</h1>
            </div>
            <h2 className="sectionSubtitle sectionSubtitleIntro">Welcome to my website</h2>
            <img src={Portrait} alt="" className="intro-img"/>
        </section>
    )
}

