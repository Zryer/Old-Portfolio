import React, { useState } from 'react';

import Logo from '../images/zachnewnew.png'

export const Header = () => {

    const [open, toggleOpen] = useState(false);
    const handleClick = () => toggleOpen(open === false ? true : false)

    return (
        <>
            <header id="home">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <button onClick={handleClick} className="btn"></button>
                <nav className="nav">
                    <ul className={`collapsed ${open === true ? "is-expanded" : ""}`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#aboutMe">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#footer">Footer</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
};