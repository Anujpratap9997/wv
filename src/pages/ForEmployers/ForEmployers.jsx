import React from 'react'
import { Container } from 'reactstrap'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionFive from './SectionFive/SectionFive'
import { useMediaQuery } from 'react-responsive'
import MobileForEmp from './Mobile/MobileForEmp'

function ForEmployers() {
  const isMobile=useMediaQuery({
    query:'(max-width:900px)'
  })
  if(isMobile){
    return <MobileForEmp/>
  }
  return (
    <div>
      <SectionOne/>
      <SectionTwo/>
    </div>
  )
}

export default ForEmployers