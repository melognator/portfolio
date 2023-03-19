import React from 'react'
import { useTranslation } from 'react-i18next'
import { CenteredSection, Title, TitleContainer, TitleDecoration } from '../Home.styles'

const Contact = () => {
    const { t } = useTranslation()

    return (
        <CenteredSection id="contact">
            <TitleContainer>
                <Title>
                    {t("contact_label")}
                    <TitleDecoration />
                </Title>
            </TitleContainer>

        </CenteredSection>
    )
}

export default Contact