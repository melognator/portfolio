import { changeLanguage } from 'i18next'
import React from 'react'
import { Flag, FlagButton, LanguageButtonContainer } from './ChangeLanguage.styles'


const ChangeLanguage = () => {
    return (
        <LanguageButtonContainer>
            <FlagButton title='es' onClick={() => changeLanguage('es')}><Flag alt='Uruguay Flag' src={'https://flagicons.lipis.dev/flags/4x3/uy.svg'} /></FlagButton>
            {/* <FlagButton title='cl' onClick={() => changeLanguage('cl')}><Flag src={'https://flagicons.lipis.dev/flags/4x3/cl.svg'} /></FlagButton> */}
            <FlagButton title='en' onClick={() => changeLanguage('en')}><Flag alt='US Flag' src={'https://flagicons.lipis.dev/flags/4x3/us.svg'} /></FlagButton>
        </LanguageButtonContainer>
    )
}

export default ChangeLanguage