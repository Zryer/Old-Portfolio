import React from 'react';
import { Introduction } from './Components/Introduction';
import { Services } from './Components/Services';
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
            <Services />
            <AboutMe />
            <Projects />
            <Footer />
        </div>
    )
}

export default App;