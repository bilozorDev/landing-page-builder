import {useBodySettings } from '@/components/contexts/BodyTabSettings'
import React from 'react'

const SelectedParts = () => {
    const {bodySettings} = useBodySettings()

  return (
  <>
  {bodySettings.parts.map((part)=>{
  console.log("added " + part)
  })}
  </>
  )
}

export default SelectedParts