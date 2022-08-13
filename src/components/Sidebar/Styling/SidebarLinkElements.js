import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';

export const SidebarLinksContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 1rem 0;
width: 100%;
`

export const SidebarMenu = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
width: 100%;
`

export const SidebarItem = styled.li`
font-size: 1rem;
font-style: italic;
margin: 0.5rem;
cursor: pointer;
background-color: var(--tertiary);
border-top: 6px solid var(--primary);
display: flex;
align-items: center;
padding-left: 1rem;
-webkit-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.3);
-moz-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.3);
box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.3);
`

export const SidebarLink = styled(LinkS)`
color: var(--primary);
text-decoration: none;
display: flex;
align-items: center;
justify-content: start;
text-align: center;
gap: 0.5rem;
font-size: 1.5rem;
font-family: 'Roboto Condensed', sans-serif;
height: 3rem;
width: 100%;
`