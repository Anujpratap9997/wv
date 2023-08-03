import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import './SectionTwo.css'
import graduate from '../../../assets/images/graduate-man-cropped.svg'
import Logo from '../../../components/Logo/Logo'
import MobileSectionTwo from './MobileSectionTwo'
import SkillsImage from '../../../assets/images/section-two-skills.svg';
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ease: "none"});

function SectionTwo() {

  const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }

    // create an event listener
    useEffect(() => {

      const tl = gsap.timeline()
      // timeline.add(
        tl.set(".grwoth-img-container",{autoAlpha :1});


        tl
          .to(".section-two-heading-text-container", {opacity:1, duration: .4})
          .to(".section-two-inner", {opacity:1, duration: .4})
          .to(".section-two-heading-text-container", {opacity:0,duration: .4})
     
          ScrollTrigger.create({
            animation: tl,
            trigger: '.homepage-section-two',
            start : "top 100px",
            end : "+=1000",
            scrub : true,
            pin: true,
            anticipatePin:1,
          })
      // //trigger on scroll to section two
      // ScrollTrigger.create({
      //   trigger:".section-two-heading-text-container",
      //   onEnter: () => { 
      //             gsap.fromTo('.section-two-heading-text-container',{ opacity: 0 },{   opacity: 1, duration: 3 }) 
      //             ,
      //             gsap.fromTo('.section-two-img',{ opacity: -3 },
      //             {   opacity: 1, duration: 1 }) 
                  
      //             gsap.from('.fromBottom', {          
      //               y: 0,
      //             }),
      //             gsap.to('.fromBottom', {          
      //               y: 50, delay:1
      //             }),
                  
      //             gsap.to('.fromBottom', {          
      //               y: -50, delay:2
      //             }),
      //             gsap.to('.text', {          
      //               opacity: 0, delay:2
      //             })

      //           },
      // }) ,
      
      // )
      // timeline.add(
       
     
      //   //trigger on scroll to section two
      //   ScrollTrigger.create({
      //     trigger:".fromBottom",
          

      //   }))
      
      // gsap.set(".text", { opacity: 0 });
    
    
      window.addEventListener("resize", handleResize)
    })

    if(isMobile){
        return <MobileSectionTwo/>
    }

  return (
    <Container className='homepage-section-two' id='containerAround'>
        <div className='mt-5 p-5 px-3' id='scrollContent'>
            <div className='text-center section-two-heading-text-container'>
                <h1 className='heading-text-default mb-2 '>The <span className='highlight-heading fw-bold'>SMART Fellowship</span> empowers you to start 
                thinking where A.I stops</h1>
                <h3 className='heading-text-secondary py-1'>Artificial Intelligence is taking up repetitive work in every sector. But that's actually good news!</h3>
                <h3 className='heading-text-item py-3' style={{color:'#DBFDFF'}}>
                  Today's companies don't want you to do work based on just technical skills,
                  <br/>
                  But also apply your natural intelligence and these superpower soft skills.
                </h3>
            </div>
              {/* <div className="section-two-inner text-center" style={
              {
                backgroundImage: `url(${SkillsImage})`,
                height: '260px',
                backgroundRepeat: "no-repeat",
              } }>
                <div className='d-flex p-1 justify-content-center section-two-img fromBottom' >
                  <Logo classNames='section-two-logo' scale={'scale-2'}/>
                  <img src={graduate} className='section-two-item'></img>
                </div>
              </div> */}
        </div>

    </Container>
  )
}

export default SectionTwo