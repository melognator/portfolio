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
            img: '/assets/img/digitalbooking.webp',
            phone_img: '/assets/img/digitalbooking_phone.webp',
            source: 'https://github.com/melognator/digital-booking',
            site: 'http://dh.melogno.lol',
            alt: t('digitalbooking_alt'),
            color: '',
        },
        {
            title: 'Rizpilko',
            subtitle: t('rizpilko_subtitle'),
            description: t('rizpilko_description'),
            img: '/assets/img/rizpilko.webp',
            phone_img: '/assets/img/rizpilko_phone.webp',
            source: 'https://github.com/melognator/rizpilko',
            site: 'https://rizpi.ezequielmelogno.repl.co',
            alt: t('rizpilko_alt'),
            color: '',
        },
        {
            title: 'Project Ash',
            subtitle: t('projectash_subtitle'),
            description: t('projectash_description'),
            img: '/assets/img/projectash.webp',
            phone_img: '/assets/img/projectash_phone.webp',
            source: 'https://github.com/melognator/project-ash',
            site: 'https://ash.melogno.lol',
            alt: t('projectash_alt'),
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