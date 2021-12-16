import React from 'react';

export const Skills = () => {
    return (
        <section className="section skillsSection" id="skills">
            <div className="bg">
                <h1 className="sectionTitle sectionTitleSkills">Skills</h1>
            </div>
            <div className="skills-list">
                <div className="skill">
                    <h3>HTML5 / CSS3 / JavaScript</h3>
                    <p>I taught myself the basics of HTML, CSS, and JavaScript when first learning how to develop websites. I was using online tools such as freecodecamp.org and w3schools to help guide me and fill in the blanks of my knowledge.</p>
                </div>
                <div className="skill">
                    <h3>React / React Native</h3>
                    <p>I attended Nucamp coding bootcamp where they taught me how to use React and React Native. I used my previous knowledge of HTML, CSS, and JavaScript to start developing websites in React and React Native. Eventually I started to become comfortable working with React states and using components to build out my websites.</p>
                </div>
                <div className="skill">
                    <h3>MERN Stack</h3>
                    <p>After graduating Nucamp I was equipped with the knowledge of the MERN stack. I was able to build full stack websites using React in the front end, Node and Express in the back end, and Mongo as my database.</p>
                </div>
            </div>
            <img alt="" className="intro-img" />
        </section>
    )
}

