import styled from 'styled-components'
import { breakpoints } from '../../../components/Common.styles'

export const ContactFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
    @media (min-width: ${breakpoints.bigTablet}) {
        width: 500px;
    }
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    & > label {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 8px;
    }
`

export const InputContainer = styled.span` 
    padding: 8px;
    border: 1px solid ${({theme}) => theme.light_foreground};
    border-radius: 2px;
    & > input, textarea {
        background-color: transparent;
        color: ${({theme}) => theme.foreground};
        font-size: 20px;
        font-weight: 300;
        width: 100%;
        outline: 0;
    }

    & > textarea {
        height: 150px;
        resize: none;
    }
`

export const SubmitButton = styled.button`
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.foreground};
    cursor: pointer;
    border-radius: 2px;
    font-size: 22px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all 200ms;
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: white;
    }
    & > span {
        text-transform: uppercase;
        font-size: 22px;
    }
`

export const Spinning = styled.div`
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }

        to {
            transform:rotate(360deg);
        }
    }
    animation-timing-function: linear;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
`

export const SuccessErrorMessage = styled.div`
    background-color: ${({ theme }) => theme.background};
    border: 1px solid #00A725;
    color: #00A725;
    text-align: center;
    border-radius: 2px;
    font-size: 18px;
    padding: 12px;
    opacity: ${({show}) => show ? 1 : 0};
    /* display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; */
    transition: all 200ms;
`