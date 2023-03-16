import styled from 'styled-components'
import { MaxWidth, PlainLink } from '../Common.styles'

export const NavbarWrapper = styled.nav`
    position: sticky;
    
    top: 0px;
    left: 0px;
    padding: 15px 0;
    backdrop-filter: blur(2px);
    box-shadow: 0 2px 2.5px rgba(0,0,0,0.25);
`

export const NavbarContainer = styled.div`
    ${MaxWidth};
    padding: 0 20px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled(PlainLink)`
    display: flex;
    align-items: center;
`

export const LogoTitle = styled.h1`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 200;
`

export const HamburguerButton = styled.button`
    cursor: pointer;
    height: 42px;
    width: 42px;
    border-radius: 2px;
    
    &:hover {
        background-color: ${({theme}) => theme.foreground + '10'};
        transition: background-color 100ms linear;
    }
`