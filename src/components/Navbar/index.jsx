import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { HamburguerButton, LogoContainer, LogoTitle, NavbarContainer, NavbarWrapper } from './Navbar.styles'
import Menu from './Menu'
import { MenuContainer, MenuOverlay } from './Menu.styles'
import { scrollToTop } from '../../utils/scroll'

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(prev => !prev)

    return (
        <header>
            <NavbarWrapper>
                <NavbarContainer>
                    <LogoContainer onClick={scrollToTop}>
                        <LogoTitle>Melogno</LogoTitle>
                    </LogoContainer>
                    <HamburguerButton onClick={toggleExpanded}>
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