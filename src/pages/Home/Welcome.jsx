import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import TypewriterComponent from 'typewriter-effect';
import { HomeText, HomeTitle, SectionContainer, SkillsContainer, SkillSpan, Strong } from './Home.styles'

const Welcome = () => {
    const { t } = useTranslation();
    return (
        <SectionContainer>
            <HomeTitle>
                {t('home_title')}<br />
                <SkillsContainer>
                    <span>{t('home_skills')}{'\u00A0'}</span>
                    <SkillSpan>
                        <TypewriterComponent
                            options={{
                                loop: true,
                                strings: [
                                    t('home_skill1'),
                                    t('home_skill2'),
                                    t('home_skill3'),
                                    t('home_skill4'),
                                ],
                                autoStart: true,
                                deleteSpeed: 100,
                                delay: 100,
                                pauseFor: 1500
                            }}
                        />
                    </SkillSpan>
                </SkillsContainer>
            </HomeTitle>
            <HomeText>
                <Trans 
                i18nKey="home_text"
                values={{
                    name: 'Ezequiel Melogno',
                    surname: 'Eze',
                }}
                components={
                    [<Strong />]
                }
                 />
            </HomeText>
        </SectionContainer>
    )
}

export default Welcome