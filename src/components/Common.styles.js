import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const breakpoints = {
    tablet: '640px',
    laptop: '1280px',
    bigTablet: '820px'
}


export const MaxWidth = css`
    max-width: ${breakpoints.laptop};
`

export const PlainLink = styled(Link)`
    color: ${({theme}) => theme.foreground};
    text-decoration: none;
`