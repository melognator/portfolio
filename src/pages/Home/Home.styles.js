import styled from "styled-components";
import { breakpoints, MaxWidth } from "../../components/Common.styles";

export const PageWrapper = styled.main`
    padding: 20px;
`

export const SectionContainer = styled.section`
    ${MaxWidth};
    margin: 100px auto;
`

export const HomeTitle = styled.h2`
    font-size: 64px;
    font-weight: 400;
`

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const HomeText = styled.p`
    color: ${({theme}) => theme.light_foreground};
    font-size: 24px;
    margin-top: 20px;
    width: 100%;
    font-weight: 300;

    @media (min-width: ${breakpoints.laptop}) {
        max-width: 70%;
    }
`

export const SkillSpan = styled.span`
    & .Typewriter__wrapper {
        color: #3c98e8;
    }
`

export const Strong = styled.strong`
    color: #3c98e8;
    font-weight: 500;
`