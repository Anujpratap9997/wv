import React from 'react'
import { Container } from 'reactstrap'
import './MobileSectionTwo.css'
import graduate from '../../../assets/images/graduate-man-cropped.svg'
import Logo from '../../../components/Logo/Logo'
import bggraph from '../../../assets/images/mobie-sectionTwo/bg-graph.svg'
import arrow from '../../../assets/images/mobie-sectionTwo/arrow.svg'



function MobileSectionTwo() {
  return (
    <Container className='homepage-section-two'>
        <div className='mt-1 p-5 px-3 '>
            {/* <div className='text-center'>
                <h1 className='heading-text-default mb-4 heading-text-sectionTwo-mobile'>The <span className='highlight-heading fw-bold'>SMART Fellowship</span> empowers you to start 
                thinking where A.I stops</h1>
                <h3 className='heading-text-item pt-3 mb-5' style={{color:'#fff'}}>
                  Today's companies don't want you to do work based on just technical skills,
                  But also apply your natural intelligence and these superpower soft skills.
                </h3>
            </div>
            <div className='d-flex justify-content-center section-two-img '>
              <Logo className='section-two-item'/>
              <img src={graduate} className='section-two-item'></img>
            </div>
            <div className='text-center m-5 mx-0 pt-5' >
                <h3 className='heading-text-default mt-3 mx-5 py-3' style={{fontSize:'15px'}}>Artificial Intelligence is taking up repetitive work in every sector.</h3>
                <h3 className='heading-text-secondary'  style={{fontSize:'15px'}}>But that's actually good news!</h3>
            </div> */}

            {/* section two on scroll  */}
          
          
            <div className='mt-5 pt-5 d-flex justify-content-center align-items-center ' style={{scale:"0.6"}}>
              <Logo className='section-two-item'/>
              <img src={graduate} className='section-two-item'></img>
              <img src={bggraph} className='section-two-item bg-graph-mobile'/>
              <img src={arrow} className='section-two-item bg-graph-mobile' />
              

            </div>


        </div>

    </Container>
    
  )
}

export default MobileSectionTwo