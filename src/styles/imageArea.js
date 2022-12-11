import styled from 'styled-components';
import { size } from '../breakpoints';

export const Background = styled.div`

flex: 0.7;
    @media screen and (max-width: ${size.mobileL}) {
        display: none;
    }
`