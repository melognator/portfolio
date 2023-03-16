import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { MenuBodyContainer, MenuFooter, MenuHeader, MenuLanguageText, MenuTitle } from './Menu.styles'
import MenuBody from './MenuBody'
import { HamburguerButton } from './Navbar.styles'
import ChangeLanguage from '../ChangeLanguage'
import { useTranslation } from 'react-i18next'

const Menu = ({toggleExpanded}) => {

    const { t } = useTranslation()

    return (
        <>
            <MenuHeader>
                <HamburguerButton onClick={toggleExpanded}>
                    <FontAwesomeIcon fontSize={'20px'} icon={faXmark} />
                </HamburguerButton>
                <MenuTitle>Menu</MenuTitle>
            </MenuHeader>
            <MenuBodyContainer>
                <MenuBody toggleExpanded={toggleExpanded} />
            </MenuBodyContainer>
            <MenuFooter>
                <MenuLanguageText>{t('menu_lang')}</MenuLanguageText>
                <ChangeLanguage />
            </MenuFooter>
        </>
    )
}

export default Menu