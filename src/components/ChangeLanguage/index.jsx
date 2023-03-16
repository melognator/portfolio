import { changeLanguage } from 'i18next'
import React from 'react'
import { Flag, FlagButton, LanguageButtonContainer } from './ChangeLanguage.styles'


const ChangeLanguage = () => {


    return (
        <LanguageButtonContainer>
            <FlagButton onClick={() => changeLanguage('es')}><Flag src={'https://flagicons.lipis.dev/flags/4x3/uy.svg'} /></FlagButton>
            <FlagButton onClick={() => changeLanguage('en')}><Flag src={'https://flagicons.lipis.dev/flags/4x3/us.svg'} /></FlagButton>
        </LanguageButtonContainer>
    )
}

export default ChangeLanguage