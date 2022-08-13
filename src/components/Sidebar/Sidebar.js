import React from 'react'
import { LogoLink, SidebarContainer, SidebarLogo } from './Styling/SidebarElements';
import logo from '../../images/Logo.png';
import { SidebarLinks } from './SidebarLinks';
import { SidebarSocial } from '../Social/SidebarSocial/SidebarSocial';

export const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <LogoLink to="/" onClick={toggle}>
      <SidebarLogo src={logo}/>
      </LogoLink>
        <SidebarLinks toggle={toggle}/>
        <SidebarSocial toggle={toggle}/>
    </SidebarContainer>
  )
}
