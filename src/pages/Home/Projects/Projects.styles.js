import styled, { css } from 'styled-components'
import { breakpoints } from '../../../components/Common.styles'

export const ProjectListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    @media (min-width: ${breakpoints.bigTablet}) {
        gap: 120px;
    }
    @media (min-width: ${breakpoints.laptop}) {
        gap: 150px;
    }
`

export const ProjectContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 110px;
    @media (min-width: ${breakpoints.bigTablet}) {
        gap: 25px;
        flex-direction: ${({ right }) => right ? 'row-reverse' : 'row'};
        text-align: ${({ right }) => right ? 'right' : 'left'};
    }
`

export const ProjectImages = styled.a`
    position: relative;
    display: flex;
    /* width: 100%; */
`

export const ImageDecoration = styled.span`
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 100%;
    bottom: -10px;
    right: -10px;
    opacity: 0.75;
    background-color: ${({ theme }) => theme.primary};
`

const BigHover = css`
    transition: all 200ms;
    transform: scale(0.95);
    &:hover {
        transform: scale(1);
    }
`

const ColorHover = css`
    transition: all 200ms;
    filter: grayscale(100%);
    &:hover{
        filter: grayscale(0);
    }
`

export const ProjectDesktopImage = styled.div`
    /* position: relative; */
    width: 100%;
    cursor: pointer;
    ${BigHover}
    & > img {
        width: 100%;
        @media (min-width: ${breakpoints.bigTablet}) {
            width: 480px;
        }
        @media (min-width: ${breakpoints.laptop}) {
            width: 620px;
        }
    }
    
`

export const ProjectPhoneImage = styled.div`
    position: absolute;
    cursor: pointer;
    ${BigHover};
    top: 10%;
    right: 10%;
    width: 40%;
    & > img {
        width: 100%;
    }
`

export const ProjectCard = styled.div`
    background-color: ${({ theme }) => theme.foreground};
    color: ${({ theme }) => theme.background};
    border-radius: 2px;
    width: 100%;
    padding: 20px;
`

export const ProjectInformation = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    @media (min-width: ${breakpoints.bigTablet}) {
        align-items: ${({ right }) => right ? 'flex-end' : 'flex-start'};
    }
`

export const ProjectTitle = styled.h3`
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 300;
`

export const ProjectDescription = styled.p`
    font-weight: 300;
    color: ${({ theme }) => theme.light_foreground};
    font-size: 20px;
    white-space: pre-line;
`

export const ProjectButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const ProjectButton = styled.a`
    text-decoration: none;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.foreground};
    cursor: pointer;
    border-radius: 2px;
    font-size: 24px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 200ms;
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: white;
    }
    & > span {
        font-size: 18px;
    }
`
