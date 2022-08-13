import React from 'react'
import { FooterContainer } from './Styling/FooterElements';
import { FooterSocial } from '../Social/FooterSocial/FooterSocial';
import { FooterLinks } from './FooterLinks';
import { FooterLogo } from './FooterLogo';
import { FooterLinksContainer } from './Styling/FooterLinksElements';

export const Footer = () => {

  return (
    <FooterContainer>
        <FooterLinksContainer>
        <FooterLinks header={"About"} itemOne={"Who are we?"} itemTwo={"What we do?"} itemThree={"Instructors"} itemFour={"Legacy"} gridCoords={window.innerWidth <= 600 ? "" : "1 / 2"}/>
        <FooterLinks header={"Adventures"} itemOne={"Locations"} itemTwo={"Difficuly Levels"} itemThree={"Personalise"} itemFour={"Climbs"} gridCoords={window.innerWidth <= 600 ? "" : "2 / 3"}/>
        <FooterLinks header={"Equipment"} itemOne={"What you need"} itemTwo={"What we supply"} itemThree={"Shop"} itemFour={"Safety Gear"} gridCoords={window.innerWidth <= 600 ? "" : "3 / 4"}/>
        <FooterLinks header={"Contact"} itemOne={"Climbville, Uk"} itemTwo={"Contact details"} itemThree={"Social Media"} itemFour={"FAQs"} gridCoords={window.innerWidth <= 600 ? "" : "4 / 5"}/>
        </FooterLinksContainer>
        <FooterSocial />
        <FooterLogo />
    </FooterContainer>
  )
}
