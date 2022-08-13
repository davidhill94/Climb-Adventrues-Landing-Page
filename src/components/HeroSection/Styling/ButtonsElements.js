import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(LinkR)`
background-color: var(--tertiary);
color: var(--secondary);
padding: 0.7rem;
width: 10rem;
margin: 0.5rem;
border: 2px solid var(--secondary);
font-size: 1.5rem;
font-style: italic;
font-family: 'Roboto Condensed', sans-serif;
cursor: pointer;
text-decoration: none;
text-align: center;

&:hover {
    color: var(--tertiary);
    background-color: var(--primary);
    border: 2px solid var(--tertiary);
}

@media screen and (max-width: 550px){
    padding: 0.5rem;
    font-size: 1rem;
    width: 8rem;
}

@media screen and (max-width: 380px){
    width: 6rem;
}
`

export const ButtonAlt = styled(LinkR)`
color: var(--tertiary);
background-color: var(--secondary);
padding: 0.7rem;
width: 10rem;
margin: 0.5rem;
border: 2px solid var(--tertiary);
font-size: 1.5rem;
font-style: italic;
font-family: 'Roboto Condensed', sans-serif;
cursor: pointer;
text-decoration: none;
text-align: center;

&:hover {
    color: var(--tertiary);
    background-color: var(--primary);
    border: 2px solid var(--tertiary);
}

@media screen and (max-width: 550px){
    padding: 0.5rem;
    font-size: 1rem;
    width: 8rem;
}

@media screen and (max-width: 380px){
    width: 6rem;
}
`