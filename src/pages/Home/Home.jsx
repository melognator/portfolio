import React from 'react'
import { useTranslation } from 'react-i18next'
import TypewriterComponent from 'typewriter-effect';
import About from './About';
import Contact from './Contact';
import { PageWrapper } from './Home.styles';
import Projects from './Projects';
import Skills from './Skills';
import Welcome from './Welcome';

const Home = () => {
    return (
        <PageWrapper>
            <Welcome />
            <Skills />
            <Projects />
            <About />
            <Contact />
        </PageWrapper>
    )
}

export default Home