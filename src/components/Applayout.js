import React ,{useState, useEffect, useRef }from 'react'
import { Outlet , useHref } from 'react-router-dom'
import LoadingPage from '../pages/HomePage/LoadingPage'
import Header from './Header'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import {gsap , Power3} from 'gsap';


const  AppLayout  = () => {
  const [loading, setLoading] = useState(true)
  const href = useHref() 

  const showMain = () => {
    setLoading(false);
  }
  
  const pageRef = useRef(null)
  let tl = new gsap.timeline();
  let mm = gsap.matchMedia();
  let ease = Power3.easeOut();
    // gsap

  useEffect(() => {
    // setLoading(true);
    // setTimeout(() => {

    // },8000)
  },[])

  const runLogoAnimation = () => {

    // for phone 
    mm.add("(max-width: 799px)", () => {
      tl.set([".workverse-logo"],{scale: 1})

      .from('.logo-1', { opacity: 0, yPercent: '-50%' ,  scale:.1})
        .from('.logo-2', { opacity: 0})
        .from('.logo-3', { opacity: 0})
        .from('.workverse-name',{opacity: 0,x:0})
        
        // opacity and scale 
        // .to('.wv-logo-animate',{ 
        //   opacity:1,
        //   duration:.5,
        //   rotation: 360,
        //   scale:1,
        //   stagger: {
        //     amount:.5,
        //     from : "center"
        //   }
        // })
  
        // rotation animation
        .to('.logo-2', { duration: .6, rotation: 360})
        .to('.logo-3', { duration: 2, rotation: -360})
       
        .to('.workverse-logo', {scale:1, duration:.4})
        .to('.workverse-name',{duration:.4, opacity: 1},"<")
        .call(showMain, null,">.3")
    })
    // for mac 14 inch 
    mm.add("(max-width:1500px)",() => {
      tl
      .from('.logo-1', { opacity: 0, yPercent: '-50%' ,  scale:.1}) 
        .from('.logo-2', { opacity: 0})
        .from('.logo-3', { opacity: 0})
        .from('.workverse-name',{opacity: 0, x:300})
        
        // opacity and scale 
        .to('.wv-logo-animate',{
          opacity:1,
          duration:.4,
          rotation: 360,
          scale:1,
          stagger: {
            amount:.5,
            from : "center"
          }
        })
  
        // rotation animation
        .to('.logo-2', { duration: .6, rotation: 360, repeat: 1})
        .to('.logo-3', { duration: 2, rotation: -360})
        .to('.workverse-name',{duration:2,x:0 },"<1")
        .to('.workverse-logo ', {x: -600,y: -260, duration: 1, scale: .3})
        .to('.workverse-name ', {x: -480,y: -400, duration: 1, scale: .3},"<")
        // .to(pageRef,{x :'50%', duration:1})
        .call(showMain, null,">.3")
    })
   
    // for large screen 
    mm.add("(min-width:1800px)",() => {
      tl
      .from('.logo-1', { opacity: 0, yPercent: '-50%' ,  scale:.1}) 
        .from('.logo-2', { opacity: 0})
        .from('.logo-3', { opacity: 0})
        .from('.workverse-name',{opacity: 0})
        
        // opacity and scale 
        .to('.wv-logo-animate',{
          opacity:1,
          duration:.5,
          rotation: 360,
          scale:1,
          stagger: {
            amount:.5,
            from : "center"
          }
        })
  
        // rotation animation
        .to('.logo-2', { duration: .6, rotation: 360, repeat: 1})
        .to('.logo-3', { duration: .4, rotation: -360})
        .to('.workverse-name',{duration:2,x:0 },"<1")
        .to('.workverse-logo ', {x: -900,y: -360, duration: 1, scale: .3})
        .to('.workverse-name ', {x: -790,y: -520, duration: 1, scale: .3},"<")
        // .to(pageRef,{x :'50%', duration:1})
        .call(showMain, null,">.3")
    })
      
  }

  useEffect(() => {
      if(loading && href  === '/'){
      const animeStatus = runLogoAnimation()
        
      }
      // setTimeout(() => {
      //   setLoading(false)
      // },8600)
      // .call(setLoading(false))
  },[])

  // if(loading && href === '/'){
  //   return <LoadingPage />
  // }
  return (
    <div>
        <div className="container-fluid px-0 ">
           {/* <Header/> */}
           <Navbar/>
           <Outlet  ref={el => pageRef = el} />
        </div>
    </div>
  )
}

export default AppLayout
