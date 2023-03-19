import React from 'react'
import { useTranslation } from 'react-i18next'
import { CenteredSection, Title, TitleContainer, TitleDecoration } from '../Home.styles'

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

        </CenteredSection>
    )
}

export default About