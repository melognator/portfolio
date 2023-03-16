import React from 'react'
import { useTranslation } from 'react-i18next'
import TypewriterComponent from 'typewriter-effect';
import { HomeText, HomeTitle, PageWrapper, SectionContainer, SkillsContainer, SkillSpan } from './Home.styles';
import Welcome from './Welcome';

const Home = () => {
    return (
        <PageWrapper>
            <Welcome />
        </PageWrapper>
    )
}

export default Home