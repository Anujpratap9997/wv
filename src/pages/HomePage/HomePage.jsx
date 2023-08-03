import React, { useEffect, useState } from 'react'
import LoadingPage from './LoadingPage'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionThree from './SectionThree/SectionThree'
import SectionFour from './SectionFour/SectionFour'
import SectionFive from './SectionFive/SectionFive'

function HomePage() {

  return (
    <div>
     
      <SectionOne/>
      <SectionTwo/>
       <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      
    </div>
  )
}

export default HomePage