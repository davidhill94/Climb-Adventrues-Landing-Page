import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SocailItem, SocialWrapper } from './Styling/FooterSocialElements'

export const FooterSocial = () => {
  return (
    <SocialWrapper>
        <SocailItem href='/' target="_blank">
            <FaFacebook />
        </SocailItem>
        <SocailItem href='/' target="_blank">
            <FaInstagram />
        </SocailItem>
        <SocailItem href='/' target="_blank">
            <FaTwitter />
        </SocailItem>
    </SocialWrapper>
  )
}
