import React from 'react'
import Project from './Project'

const ProjectList = ({projects}) => {
  return (
    <>
        {projects.map((project, index) => (
            <Project key={index} right={index % 2 == 1} project={project} />
        ))}
    </>
  )
}

export default ProjectList