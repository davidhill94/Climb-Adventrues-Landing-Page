import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.div`
width: 100%;
height: auto;
padding: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--primary);
`

export const LogoLink = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
`

export const FooterLogo = styled.img`
width: 150px;
height: auto;
`

