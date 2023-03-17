import React from 'react'
import { Skill, SkillsContainer } from './Skills.styles'

const SkillList = ({ skills }) => {

    return (
        <SkillsContainer>
            {skills.map(skill => (
                <Skill key={skill.title}>
                    <img src={skill.img} alt={skill.title + " logo"} />
                    <p>{skill.title}</p>
                </Skill>
            ))}
        </SkillsContainer>
    )
}

export default SkillList