import { useHeaderSettings } from '@/components/contexts/HeaderTabSettings'
import React from 'react'

const MenuItems = () => {
    const {headerSettings} = useHeaderSettings()
 
  return (
    <>
    {headerSettings.menuItems.map((item)=>item.name)}
    </>
  )
}

export default MenuItems