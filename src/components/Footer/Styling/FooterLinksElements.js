import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';

export const FooterLinksContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
height: auto;
width: 100%;
padding: 1rem;
margin: 1rem;
font-family: 'Roboto Condensed', sans-serif;

@media screen and (max-width: 600px){
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
}
@media screen and (max-width: 350px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
}
`

export const FooterLinkColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const FooterLinkHeader = styled.h2`
font-size: 1.2rem;
color: var(--secondary);
margin: 0.5rem 0;

@media screen and (max-width: 768px) {
    font-size: 1rem;
}
`

export const FooterLinkItem = styled(LinkS)`
font-size: 1rem;
color: var(--tertiary);
text-decoration: none;
cursor: pointer;
margin: 0.2rem 0;

@media screen and (max-width: 768px) {
    font-size: 0.8rem;
}
`