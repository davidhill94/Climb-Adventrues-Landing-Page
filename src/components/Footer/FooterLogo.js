import React from 'react';
import logo from '../../images/LogoWhite.png';
import { LogoLink, LogoImage } from './Styling/FooterLogoElements';
import { animateScroll as scroll } from 'react-scroll';

export const FooterLogo = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <LogoLink to="/">
            <LogoImage src={logo} alt={"logo"} onClick={toggleHome} />
        </LogoLink>
    )
}
