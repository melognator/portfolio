import React from 'react'
import { useTranslation } from 'react-i18next'
import { CenteredSection, Title, TitleContainer, TitleDecoration } from '../Home.styles'
import { AboutContainer, ImageContainer } from './About.styles'

const About = () => {

    const { t } = useTranslation()

    return (
        <CenteredSection id="about">
            <TitleContainer>
                <Title>
                    {t("about_label")}
                    <TitleDecoration />
                </Title>
            </TitleContainer>
            <AboutContainer>
                <p>{t('about_me')}</p>
                <ImageContainer>
                    <img alt={t('about_alt')} src='/assets/img/ezequielmelogno.webp' />
                </ImageContainer>
            </AboutContainer>
        </CenteredSection>
    )
}

export default About