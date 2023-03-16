import styled from 'styled-components'

export const Flag = styled.img`
    height: 100%;
    border-radius: inherit;
`

export const FlagButton = styled.button`
    cursor: pointer;
    height: 24px;
    border-radius: 2px;
    transition-duration: 0.2s;

    &:hover {
        filter: brightness(90%);
    }

    &:active {
        filter: brightness(80%);
    }
`

export const LanguageButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`