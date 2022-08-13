import styled from 'styled-components';

export const HeroSectionContainer = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background: url(${require(`../../../images/background1.png`)}) no-repeat;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-position-x: 70%;
background-position-y: 70%;
background-size: cover;

@media screen and (max-width: 580px){
    background-position-x: 64%;
}
@media screen and (max-width: 475px){
    min-height: 75vh;
}
`

export const HeroContent = styled.div`
height: auto;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 2;
position: absolute;
bottom: 10%;
left: 0;

@media screen and (max-width: 500px){
    bottom: 0;
}
`

export const HeroButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 1rem 0;
`