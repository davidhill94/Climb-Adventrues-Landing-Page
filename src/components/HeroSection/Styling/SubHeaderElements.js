import styled from "styled-components";

export const SubHeader = styled.h1`
color: var(--tertiary);
z-index: 2;
font-family: 'Roboto Condensed', sans-serif;
font-style: italic;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 1.5rem;
}

@media screen and (max-width: 550px){
    font-size: 1.2rem;
    padding: 0 0.5rem;
}
`