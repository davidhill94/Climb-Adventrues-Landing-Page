import React from 'react'
import { Bars, Close } from './Styling/SidebarToggleElements'

export const SidebarToggle = ({toggle, isOpen}) => {
  return (
    isOpen ?
    <Close onClick={toggle}/>
    :
    <Bars onClick={toggle}/>
  )
}
