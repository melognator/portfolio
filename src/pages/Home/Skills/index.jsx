import React from 'react'
import { useTranslation } from 'react-i18next'
import skills from '../../../utils/skills'
import { CenteredSection, SectionContainer, Title, TitleContainer, TitleDecoration } from '../Home.styles'
import SkillList from './SkillList'

const Skills = () => {

    const { t } = useTranslation()

    return (
        <CenteredSection id="skills">
            <TitleContainer>
                <Title>
                    {t("skills_label")}
                    <TitleDecoration />
                </Title>
            </TitleContainer>
            <SkillList skills={skills} />
        </CenteredSection>
    )
}

export default Skills