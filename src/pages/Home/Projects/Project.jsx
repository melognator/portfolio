import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ImageDecoration, ProjectButton, ProjectButtonsContainer, ProjectCard, ProjectContainer, ProjectDescription, ProjectDesktopImage, ProjectImages, ProjectInformation, ProjectPhoneImage, ProjectTitle } from './Projects.styles'

const Project = ({ right, project }) => {
    return (
        <ProjectContainer right={right}>
            <ProjectImages target='blank' href={project.site}>
                <ProjectDesktopImage>
                    <img src={project.img} />
                    <ImageDecoration />
                </ProjectDesktopImage>
                <ProjectPhoneImage>
                    <img src={project.phone_img} />
                </ProjectPhoneImage>
            </ProjectImages>
            <ProjectInformation right={right}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectButtonsContainer>
                    { project.source &&
                        <ProjectButton href={project.source} target='_blank'>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>CODE</span>
                        </ProjectButton>
                    }
                    <ProjectButton href={project.site} target='_blank'>
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                        <span>LIVE SITE</span>
                    </ProjectButton>
                </ProjectButtonsContainer>
            </ProjectInformation>
            {/* <ProjectCard>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectCard> */}
        </ProjectContainer>
    )
}

export default Project