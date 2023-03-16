import styled, { css } from 'styled-components'
import { ButtonHover } from './Navbar.styles'

export const MenuOverlay = styled.div`
    pointer-events: none;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color:black;
    opacity: 0;
    z-index: 5;
    transition: opacity 0.2s ease-out;
    ${ props => props.expanded && css`
        opacity: 0.5;
        pointer-events: all;
    `};
`

export const MenuContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    transform: translateX(100%);
    width: 280px;
    height: 100%;
    background-color: ${({theme}) => theme.light_foreground};
    transition: transform 0.2s ease-out;
    ${ props => props.expanded && css`
        transform: translateX(0);
    `};

    display: flex;
    flex-direction: column;
    gap: 1px;
`

export const MenuHeader = styled.header`
    padding: 15px;
    background-color: ${({theme}) => theme.background};
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
`

export const MenuBodyContainer = styled.section`
    background-color: ${({theme}) => theme.background};
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
`

export const MenuFooter = styled.footer`
    padding: 20px;
    background-color: ${({theme}) => theme.background};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MenuTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    margin-left: 10px;
`

export const MenuLanguageText = styled.p`
    font-size: 18px;
`

export const MenuButton = styled.button`
    padding: 15px 20px;
    font-size: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    text-transform: capitalize;
    text-align: left;

    ${ButtonHover};
`