import React from 'react'
import { FooterLinkColumn, FooterLinkHeader, FooterLinkItem } from './Styling/FooterLinksElements';

export const FooterLinks = ({header, itemOne, itemTwo, itemThree, itemFour, gridCoords}) => {

  return (
      <FooterLinkColumn style={{ gridColumn: gridCoords }}>
        <FooterLinkHeader>{header}</FooterLinkHeader>
        <FooterLinkItem
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
        >{itemOne}</FooterLinkItem>
        <FooterLinkItem
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
        >{itemTwo}</FooterLinkItem>
        <FooterLinkItem
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
        >{itemThree}</FooterLinkItem>
        <FooterLinkItem
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
        >{itemFour}</FooterLinkItem>
      </FooterLinkColumn>
  )
}
