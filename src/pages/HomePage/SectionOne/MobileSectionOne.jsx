import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import './MobileSectionOne.css'

import graduate_man from "../../../assets/images/360-small/graduate-man.svg"
import graduate_left from "../../../assets/images/360-small/graduate-left.svg"
import graduate_right from "../../../assets/images/360-small/graduate-right.svg"
import robot_left from "../../../assets/images/360-small/robot-left.svg"
import robot_right from "../../../assets/images/360-small/robot-right.svg"
import { gsap , Power3 } from 'gsap/gsap-core'
import MobileMidLogo from '../../../components/Logo/MobileMidLogo'
function HomeSectionOne() {
     // gsap
     let tl = new gsap.timeline();
     let ease = Power3.easeOut();
     let mm = gsap.matchMedia();
     
    // ref elements
    let imageContainerRef = useRef(null)
    let headingContainerRef = useRef(null) 
    let logoRef = useRef(null)
    let leftRoboRef = useRef(null)
    let rightRoboRef = useRef(null)
    let leftGraudateRef = useRef(null)
    let rightGraudateRef = useRef(null)
  
  useEffect(() => {
    mm.add("(max-width: 900px)",() => {
      gsap.set(["#mobileMidLogo", ".apply-heading",".bg-shadow", ".glowing-text"], {opacity: 0})
      
      tl.from(leftGraudateRef,{x:0,  opacity:0, scale: 2},"<")
      .from(leftRoboRef,{x:0,  opacity:0, scale: 2},"<")
      .from(rightRoboRef,{x: 0,  opacity:0, scale: 2},"<")
      .from(rightGraudateRef,{x: 0,  opacity:0, scale: 2},"<")

      // logo opacity to 1
      tl.from(logoRef, {opacity : 0, duration:.7})
  
      .set('.bg-shadow-left', {opacity:1, y:0, duration:.4})
      // heading to visible
      tl.from(headingContainerRef,1,{ //
          opacity: 0,
          duration:.4,
          stagger:{ 
              amount:.1
          },
          ease: Power3.easeIn()
      })
      .set([".homepage-section-two",".homepag-section-thee",".section-four-container",".homepage-section-five"],{display: 'none'})
      // image to visable}]
      .from([imageContainerRef],2,{
          opacity:0,
          duration:.7,
          stagger:{
              amount:.1
          },
          ease: ease
      },"<.9")
      .from([headingContainerRef,imageContainerRef],3,{
          duration:.7,
          y:200,
          stagger:{
              amount:.1
          },
          ease: ease     
      },"<.3")
      
      .to('.bg-shadow-left', {opacity:1, y:200, duration:3},"<")
      .to('.bg-shadow-right', {opacity:1, y:-200, duration:3},"<")
      .to("#mobileMidLogo", {opacity:1, duration: .8})
      .to("#mobileMidLogo", {opacity:1, duration: .8, rotation: 360},"<")
      // .to(".logo-3", {opacity:1, duration: .8, rotation: 360},"<")
      
      .to(leftGraudateRef,{x:0,y:18, duration: 0.8, scale:0.9, opacity:0.8},"<")
      .to(leftRoboRef,{x:0,y:15, duration: 0.9, scale:0.9, opacity:0.8},"<")
      .to(rightGraudateRef,{x: 0,y:15,duration: 0.9, scale:0.9,  opacity:0.8},"<")
      .to(rightRoboRef,{x: 0,y:18, duration: 0.8, scale:0.9, opacity:0.8},"<")
      
      .to('.bg-shadow', {opacity:1, y:200, duration:.9},"<")
      .to(".glowing-text",{opacity:1},"<")
      .to(".apply-heading",{opacity:1, duration:1,  opacity:0.8},"<")
      .to([".homepage-section-two",".homepag-section-thee",".section-four-container",".homepage-section-five"],{display: 'block'},"+=.4")
  })
  },[])
  return (
    <div className='homepage-section-one-mobile'>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="container-fluid py-5 landing-page-text" ref={el => headingContainerRef = el }> 
                            <h1 className="text-center fw-bold heading-text"><span className='highlight-heading'>Outsmart </span>
                                <span className="heading-text-inner">Artifical Inteligence </span><br/>
                                <span className='heading-text-default-mobile'>By enhancing your </span>
                                <span className='highlight-heading'> workplace Inteligence</span></h1>                 
                        </div>
                    </div>
                </div>
                <div className='img-container-mobile'>
                    <div className='d-flex justify-content-center  landing-page-image-mobile' ref={el => imageContainerRef = el } >
                        <img ref={el => leftGraudateRef = el} src={graduate_left} className='img-fluid landing-image-item-mobile'></img>
                        <img ref={el => leftRoboRef = el} src={robot_left} className='img-fluid landing-image-item-mobile'></img>
                        <img  src={graduate_man} className='img-fluid landing-image-item-mobile'></img>
                        <img ref={el => rightGraudateRef = el } src={graduate_right} className='img-fluid landing-image-item-mobile'></img>
                        <img ref={el => rightRoboRef = el} src={robot_right} className='img-fluid landing-image-item-mobile'></img>
                    </div>
                    <div className='mid-logo-Container'>
                        <MobileMidLogo/>
                     </div>
                </div>
                
                

                <div className="row justify-content-center">
                  <div className="col-sm-8">
                  <div className='apply-heading-mobile p-4 m-4'>
                    <h1 className='heading-text-default-mobile'> 
                        Apply to the <span className='highlight-heading'>SMART FELLOWSHIP</span><br/>
                        Get an unique edge over other candidates: <br/> <span style={{
                            color: '#BAFFF7'
                        }}>humans or bots!</span>
                    </h1>
                </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-10">
                        <p className='glow-sm-link text-center fw-bold'>Placement linked | Domain Specific <br/> Simulated Learning Experince  | INR 2999</p>
                  </div>
                </div>

           
        </div>
  )
}

export default HomeSectionOne