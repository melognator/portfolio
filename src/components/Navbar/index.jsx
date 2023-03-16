import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { HamburguerButton, LogoContainer, LogoTitle, NavbarContainer, NavbarWrapper } from './Navbar.styles'

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <LogoContainer>
                    <LogoTitle>Melogno</LogoTitle>
                </LogoContainer>
                <HamburguerButton>
                    <FontAwesomeIcon fontSize={'20px'} icon={ faBars } />
                </HamburguerButton>
            </NavbarContainer>
        </NavbarWrapper>
    )
}

export default Navbar