import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, button {
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.foreground}
    }
`