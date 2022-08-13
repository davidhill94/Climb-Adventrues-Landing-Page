import React from 'react'
import { SidebarItem, SidebarLink, SidebarLinksContainer, SidebarMenu } from './Styling/SidebarLinkElements';
import {FaMountain} from 'react-icons/fa';

export const SidebarLinks = ({toggle}) => {
  return (
    <SidebarLinksContainer>
        <SidebarMenu>
            <SidebarItem>
                <SidebarLink
                to="about" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                onClick={toggle}
                >
                    <FaMountain/> About</SidebarLink>
            </SidebarItem>
            <SidebarItem>
                <SidebarLink
                to="adventures" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                onClick={toggle}
                >
                    <FaMountain/> Adventures</SidebarLink>
            </SidebarItem>
            <SidebarItem>
                <SidebarLink
                to="equipment" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                onClick={toggle}
                >
                    <FaMountain/> Equipment</SidebarLink>
            </SidebarItem>
            <SidebarItem>
                <SidebarLink
                to="contact" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                onClick={toggle}
                >
                    <FaMountain/> Contact</SidebarLink>
            </SidebarItem>
        </SidebarMenu>
    </SidebarLinksContainer>
  )
}
