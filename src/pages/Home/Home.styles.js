import styled from "styled-components";
import { breakpoints, MaxWidth } from "../../components/Common.styles";

export const PageWrapper = styled.main`
    padding: 20px;
`

export const SectionContainer = styled.section`
    ${MaxWidth};
    margin: 80px auto;
    @media (min-width: ${breakpoints.tablet}) {
        margin: 120px auto;
    }
`

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const HomeText = styled.p`
    color: ${({theme}) => theme.light_foreground};
    font-size: 20px;
    margin-top: 20px;
    width: 100%;
    font-weight: 300;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 24px;
    }
    @media (min-width: ${breakpoints.laptop}) {
        max-width: 70%;
    }
`

export const SkillSpan = styled.span`
    & .Typewriter__wrapper {
        color: ${({theme}) => theme.primary};
    }
`

export const Strong = styled.strong`
    color: ${({theme}) => theme.primary};
    font-weight: 500;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`

export const Title = styled.h2`
    position: relative;
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 500;
    z-index: 2;

    margin-bottom: 5rem;
`

export const CenteredSection = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitleDecoration = styled.span`
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 10px;
    bottom: 2px;
    right: -10px;
    opacity: 0.75;
    background-color: ${({theme}) => theme.primary};
`