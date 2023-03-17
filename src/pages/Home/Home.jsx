import React from 'react'
import { useTranslation } from 'react-i18next'
import TypewriterComponent from 'typewriter-effect';
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
        </PageWrapper>
    )
}

export default Home