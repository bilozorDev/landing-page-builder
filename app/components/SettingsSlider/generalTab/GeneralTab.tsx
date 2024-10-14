import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import MetaDataUpdate from './MetaDataUpdate'

const GeneralTab = () => {
  return (
    <>
    <SectionTitle title='Website identity'/>
    <MetaDataUpdate/>
    <SectionTitle title='Logo'/>
    <SectionTitle title='Colors'/>
    </>
  )
}

export default GeneralTab