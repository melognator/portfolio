import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { HamburguerButton, LogoContainer, LogoTitle, NavbarContainer, NavbarWrapper } from './Navbar.styles'
import Menu from './Menu'
import { MenuContainer, MenuOverlay } from './Menu.styles'
import { scrollToTop } from '../../utils/scroll'
import { useTranslation } from 'react-i18next'

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);
    const { t } = useTranslation()
    const toggleExpanded = () => setExpanded(prev => !prev)

    return (
        <header>
            <NavbarWrapper>
                <NavbarContainer>
                    <LogoContainer onClick={scrollToTop}>
                        <LogoTitle>Melogno</LogoTitle>
                    </LogoContainer>
                    <HamburguerButton title={t('hamburguer_label')} onClick={toggleExpanded}>
                        <FontAwesomeIcon fontSize={'20px'} icon={faBars} />
                    </HamburguerButton>
                </NavbarContainer>
            </NavbarWrapper>
            <MenuContainer expanded={expanded}>
                <Menu toggleExpanded={toggleExpanded} />
            </MenuContainer>
            <MenuOverlay onClick={toggleExpanded} expanded={expanded} />
        </header>
    )
}

export default Navbar