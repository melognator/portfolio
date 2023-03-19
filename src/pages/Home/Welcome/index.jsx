import { faPaperPlane, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import TypewriterComponent from 'typewriter-effect';
import { scrollToId } from '../../../utils/scroll';
import { HomeText, SectionContainer, SkillsContainer, SkillSpan, Strong } from '../Home.styles'
import { WelcomeButton, WelcomeButtonFilled, WelcomeButtons, WelcomeTitle } from './Welcome.styles';

const Welcome = () => {
    const { t } = useTranslation();
    return (
        <SectionContainer>
            <WelcomeTitle>
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
            </WelcomeTitle>
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
            <WelcomeButtons>
                <WelcomeButtonFilled onClick={() => scrollToId('contact')}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>{t('contact_label')}</span>
                </WelcomeButtonFilled>
                <WelcomeButton target={'_blank'} href={t('resume_link')}>
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                    <span>{t('resume_label')}</span>
                </WelcomeButton>
            </WelcomeButtons>
        </SectionContainer>
    )
}

export default Welcome