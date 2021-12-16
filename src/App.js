import React from 'react';
import { Introduction } from './Components/Introduction';
import { Skills } from './Components/Skills';
import { AboutMe } from './Components/AboutMe';
import { Projects } from './Components/Projects';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import './css/main.css'

const App = () => {
    return (
        <div>
            <Header />
            <Introduction />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default App;