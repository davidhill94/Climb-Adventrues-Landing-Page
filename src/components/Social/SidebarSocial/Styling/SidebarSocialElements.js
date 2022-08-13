import styled from "styled-components";

export const SocialWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: 5%;
`

export const SocailItem = styled.a`
font-size: 1rem;
color: var(--tertiary);
background-color: var(--primary);
padding: 1rem;
border-radius: 50% 50% 0 0;
margin: 0 0.5rem;
cursor: pointer;
transition: all 0.3s ease;
display: flex;
align-items: center;
justify-content: center;

&:hover {
border-radius: 50%;
}
`
