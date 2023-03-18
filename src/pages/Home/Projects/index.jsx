import React from 'react'
import { useTranslation } from 'react-i18next'
import { CenteredSection, Title, TitleContainer, TitleDecoration } from '../Home.styles'
import ProjectList from './ProjectList'
import { ProjectListContainer } from './Projects.styles'

const Projects = () => {

    const { t } = useTranslation()

    const projects = [
        {
            title: 'Digital Booking',
            subtitle: t('digitalbooking_subtitle'),
            description: t('digitalbooking_description'),
            img: '/assets/img/digitalbooking.png',
            phone_img: '/assets/img/digitalbooking_phone.png',
            // source: 'https://github.com/melognator/rizpilko',
            site: 'http://dh.melogno.lol',
            color: '',
        },
        {
            title: 'Rizpilko',
            subtitle: t('rizpilko_subtitle'),
            description: t('rizpilko_description'),
            img: '/assets/img/rizpilko.png',
            phone_img: '/assets/img/rizpilko_phone.png',
            source: 'https://github.com/melognator/rizpilko',
            site: 'https://rizpi.ezequielmelogno.repl.co',
            color: '',
        },
    ]

    return (
        <CenteredSection id="projects">
            <TitleContainer>
                <Title>
                    {t("projects_label")}
                    <TitleDecoration />
                </Title>
            </TitleContainer>
            <ProjectListContainer>
                <ProjectList projects={projects} />
            </ProjectListContainer>
        </CenteredSection>
    )
}

export default Projects