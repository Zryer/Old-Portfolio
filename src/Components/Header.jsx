import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/zachnewnew.png'

export const Header = () => {

    const [open, toggleOpen] = useState(false);
    const handleClick = () => toggleOpen(open === false ? true : false)

    return (
        <>
            <header id="home">
                <div>
                    <img src={Logo} alt="" className="logo" />
                </div>
                <button onClick={handleClick} className="btn"><FontAwesomeIcon icon={faBars} className="bars"/></button>
                <nav className="nav">
                    <ul className={`header-list collapsed${open === true ? "is-expanded" : ""}`}>
                        <li className="flex-list"><a href="#home">Home</a></li>
                        <li className="flex-list"><a href="#aboutMe">About Me</a></li>
                        <li className="flex-list"><a href="#skills">Skills</a></li>
                        <li className="flex-list"><a href="#projects">Projects</a></li>
                        <li className="flex-list"><a href="#footer">Links</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
};