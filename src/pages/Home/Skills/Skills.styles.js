import styled from 'styled-components'
import { breakpoints } from '../../../components/Common.styles'

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 20px;
    gap: 40px;
    @media (min-width: ${breakpoints.tablet}){
        gap: 80px;
        margin: 0 90px;
    }

    @media (min-width: ${breakpoints.laptop}){
        margin: 0 150px;
    }
`

export const Skill = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 60px;
    transition: all 200ms;
    & > img {
        filter: ${({theme}) => theme.name === 'dark' ? 'invert(0.9)' : 'invert(0.1)'};
        width: 100%;
    }
    & > p {
        font-size: 20px;
    }

    @media (min-width: ${breakpoints.tablet}) {
        width: 80px;
    }
`