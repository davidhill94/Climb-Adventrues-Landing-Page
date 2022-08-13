import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SocailItem, SocialWrapper } from './Styling/SidebarSocialElements'

export const SidebarSocial = ({toggle}) => {
  return (
    <SocialWrapper>
        <SocailItem href='/' target="_blank" onClick={toggle}>
            <FaFacebook />
        </SocailItem>
        <SocailItem href='/' target="_blank" onClick={toggle}>
            <FaInstagram />
        </SocailItem>
        <SocailItem href='/' target="_blank" onClick={toggle}>
            <FaTwitter />
        </SocailItem>
    </SocialWrapper>
  )
}
