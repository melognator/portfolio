import styled, { createGlobalStyle } from "styled-components";
import { breakpoints } from "../Common.styles";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 8px;
        @media (min-width: ${breakpoints.tablet}) {    
            font-size: 16px;
        }
    }

    body, button {
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.foreground}
    }
`

export const NavbarFiller = styled.div`
    height: 72px;
`