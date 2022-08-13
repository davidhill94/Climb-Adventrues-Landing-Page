import React from 'react';
import { About } from '../components/About/About';
import { Adventures } from '../components/Adventures/Adventures';
import { Contact } from '../components/Contact/Contact';
import { Equipment } from '../components/Equipment/Equipment';
import { HeroSection } from '../components/HeroSection/HeroSection';

export const Home = ({toggle, isOpen}) => {
  return (
    <>
    <HeroSection toggle={toggle} isOpen={isOpen}/>
    <About />
    <Adventures />
    <Equipment />
    <Contact />
    </>
  )
}
