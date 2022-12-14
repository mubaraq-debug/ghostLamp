import styled from 'styled-components';
import { size } from '../breakpoints';

export const Background = styled.div`

flex: 0.7;
margin-left: 3rem;
    @media screen and (max-width: ${size.mobileL}) {
        display: none;
    }
`