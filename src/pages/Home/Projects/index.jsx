import React from 'react'
import { useTranslation } from 'react-i18next'
import { CenteredSection, Title, TitleContainer, TitleDecoration } from '../Home.styles'

const Projects = () => {

    const { t } = useTranslation()

    return (
        <CenteredSection id="projects">
            <TitleContainer>
                <Title>
                    {t("projects_label")}
                    <TitleDecoration />
                </Title>
            </TitleContainer>
            
        </CenteredSection>
    )
}

export default Projects