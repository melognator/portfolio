import styled, { css } from "styled-components";
import { breakpoints } from "../../../components/Common.styles";
import { ButtonHover } from "../../../components/Navbar/Navbar.styles";

export const WelcomeTitle = styled.h2`
    font-weight: 400;
    font-size: 32px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 64px;
    }
`

export const WelcomeButtons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin: 0 25px;
    margin-top: 25px;
    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
        margin: 0;
        margin-top: 51px;
    }
`

const ButtonStyles = css`
    cursor: pointer;
    border-radius: 2px;
    font-size: 24px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all 200ms;
    
    & > span {
        text-transform: uppercase;
        font-size: 18px;
    }

    @media (min-width: ${breakpoints.tablet}) {
        padding: 16px;
    }
`

export const WelcomeButton = styled.a`
    ${ButtonStyles};
    text-decoration: none;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.foreground};
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: white;
    }
`

export const WelcomeButtonFilled = styled.button`
    ${ButtonStyles};
    background-color: ${({ theme }) => theme.primary};
    color: white;
    filter: brightness(90%);
    &:hover {
        filter: brightness(100%);
    }
`

export const WelcomeTextContainer = styled.div`
    width: 100%;
`

export const WelcomeHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
    }
`

export const WelcomeHeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: column;
    }
`

export const SquareButton = styled.a`
    ${ButtonHover};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.foreground};
    border-radius: 2px;
    font-size: 32px;
    height: 48px;
    width: 48px;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 48px;
        height: 72px;
        width: 72px;
    }
`