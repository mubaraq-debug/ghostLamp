import styled from 'styled-components';
import { size } from '../breakpoints';

export const Logo = styled.div`
        margin: 2.25rem 1.2rem;
       
        &> img {
            height:4rem;
            width: 15rem;
        }

        @media screen and (max-width: ${size.tablet}) {
            margin: 1.5rem 0.5rem;

            &> img {
                height: 3rem;
                width: 12rem;
            }
        }

        @media screen and (max-width: ${size.mobileL}) {
            margin: 0.5rem -0.9rem;
             &> img {
                 height: 2.5rem;
                 width: 10rem;
             }
          }
`