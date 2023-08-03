import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About/About'
import AppLayout from '../components/Applayout'
import Careers from '../pages/Careers/Careers'
import HomePage from '../pages/HomePage/HomePage'
import WhitePapers from '../pages/Whitepapers/WhitePapers'
import OurProgram from '../pages/OurProgram/OurProgram'
import ForEmployers from '../pages/ForEmployers/ForEmployers'
import WIP from '../pages/WIP/WIP'

export default function 
() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="programs" element={<OurProgram/>}/>
                <Route path="careers" element={<Careers/>}/>
                <Route path="whitepapers" element={<WhitePapers/>}/>
                <Route path="for-employers" element={<ForEmployers/>}/>
                <Route path="wip" element={<WIP/>}/>
          </Route> 
        </Routes>
    </div>
  )
}
