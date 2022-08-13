import React from 'react'
import { Discover } from '../components/Discover/Discover'
import { SidebarToggle } from '../components/SidebarToggle/SidebarToggle';

export const DiscoverPage = ({toggle, isOpen}) => {
  return (
    <>
    <SidebarToggle toggle={toggle} isOpen={isOpen} />
    <Discover />
    </>
  )
}
