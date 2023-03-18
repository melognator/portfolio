import styled from "styled-components";
import { breakpoints } from "../../../components/Common.styles";

export const WelcomeTitle = styled.h2`
    font-weight: 400;
    font-size: 32px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 64px;
    }
`
