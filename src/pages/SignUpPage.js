import React from 'react'
import { SidebarToggle } from '../components/SidebarToggle/SidebarToggle'
import { SignUp } from '../components/SignUp/SignUp'

export const SignUpPage = ({toggle, isOpen}) => {
  return (
    <>
    <SidebarToggle toggle={toggle} isOpen={isOpen}/>
    <SignUp />
    </>
  )
}
