import React from 'react'
import { ButtonRed, ButtonWhite } from './Buttons'
import { HeroSubHeader } from './HeroSubHeader'
import { SidebarToggle } from '../SidebarToggle/SidebarToggle';
import { HeroButtonsContainer, HeroContent, HeroSectionContainer } from './Styling/HeroSectionElements'

export const HeroSection = ({toggle, isOpen}) => {
  return (
    <HeroSectionContainer>
      <SidebarToggle toggle={toggle} isOpen={isOpen}/>
        <HeroContent>
        <HeroSubHeader />
        <HeroButtonsContainer>
          <ButtonWhite/>
          <ButtonRed />
        </HeroButtonsContainer>
        </HeroContent>
    </HeroSectionContainer>
  )
}
