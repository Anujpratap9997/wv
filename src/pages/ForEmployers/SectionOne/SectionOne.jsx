import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import './SectionOne.css'
import sectionOne_img1 from '../../../assets/images/ForEmployers/SectionOne/section-one-img-1.svg'
import smartFelllows from '../../../assets/images/ForEmployers/SectionOne/emp-smart-fellows.svg'
import smartCircle from '../../../assets/images/ForEmployers/SectionOne/smart-circle-text.svg'

import {gsap, Power3} from 'gsap'
gsap.registerPlugin(ScrollTrigger)


function SectionOne() {
    let tl = gsap.timeline()
    let ease = Power3.easeOut()

    useEffect( () => {
        tl.from("#empSectionOneleft",{opacity :0, y:300},)
        .from("#empSectionOneRight",{opacity :0,y:300},"<")
        .to("#empSectionOneleft",{opacity :1, duration : 2,},"<")
        .to("#empSectionOneRight",{opacity :1, duration: 2},"<")
        .to(".emp-section-one-img1",{rotate: 360, duration: 30, ease: ease,repeat:-1,yoyo:false,delay:1},"<")
        
    },[])
  return (
    <Container className='for-employers-section-one'>
        <div className="emp-section-inner ">
        {/* <div className="bg-shadow"></div>
              <div className="bg-shadow-left"></div>
              <div className="bg-shadow-right"></div> */}
            <div className="row justify-content-center align-items-center">
                <div className="col-6 px-5 " id="empSectionOneleft">
                    <div className="row">
                        <div className="col">
                            <h1 className='emp-heading-text'>Would you like to <span className='fw-bold'>Hire</span> a <br/> <span className='fw-bold text-capitalize'>smart fellow?</span></h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <h3 className='emp-heading-text'>We transform entry level talent into smart generalists who can think, solve & communicate beyond just their technical skills. </h3>
                        </div>
                    </div>
                </div>
                <div className="col-6 px-5 justify-content-center align-items-center" id="empSectionOneRight" style={{backgroundImage : `url(${smartFelllows})`}}>
                    <img src={smartCircle } className='emp-section-one-img1' alt="" />
                   
                </div>
            </div>
            
        </div>

    </Container>
    )
}

export default SectionOne