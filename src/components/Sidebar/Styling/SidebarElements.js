import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.div`
height: 100vh;
width: 25%;
background-color: var(--secondary);
z-index: 999;
position: absolute;
top: 0;
left: 0;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
transition: 0.3s ease-in-out;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
padding: 1rem;

@media screen and (max-width: 960px){
    width: 33%;
}
@media screen and (max-width: 768px){
    width: 50%;
}
@media screen and (max-width: 600px){
    width: 100%;
}
`

export const LogoLink = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
`

export const SidebarLogo = styled.img`
height: auto;
width: 150px;
`