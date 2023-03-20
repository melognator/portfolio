import styled from 'styled-components'
import { breakpoints } from '../../../components/Common.styles'


export const AboutContainer = styled.div`
    display: grid;
    gap: 20px;
    align-items: center;
    grid-template-columns: 1fr;
    & > p {
        font-size: 20px;
        font-weight: 300;
        text-align: left;
        color: ${({ theme }) => theme.light_foreground};
        white-space: pre-wrap;
    }
    
    & > p {
        order: 1;
    }
    & > div {
        order: -1;
    }
    
    @media (min-width: ${breakpoints.bigTablet}) {
        margin: 0 10%;
    }

    @media (min-width: ${breakpoints.laptop}) {
        margin: 0;
        & > p {
            text-align: right;
            order: -1;
        }
        & > div {
            order: 1;
        }
        grid-template-columns: 3fr 2fr;
    }

`

export const ImageContainer = styled.div`
    & > img {
        object-fit: cover;
        object-position: 50% 25%;
        max-height: 350px;
        width: 100%;
        border-radius: 2px;
        @media (min-width: ${breakpoints.laptop}) {
            object-position: 50% 50%;
            max-height: 100%;
        }
    }

`
