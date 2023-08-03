import React,{useEffect} from 'react'
import Header from '../components/Header'
import Header from '../components/Header'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


import '../App.css'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function About() {
  console.log("constructor");

  

useEffect(()=>{
//   ScrollTrigger.create({
//     animation: gsap.from(".logo",{
//         y:"5vh",
//         scale: 1,
//         yPercent: -50,
//     }),
//     scrub: true,
//     trigger:".content",  //point from which triggered
//     start: "top center", //start position
//     endTrigger:".content",
//     end:"top bottom",  //end position
//     // markers: true,
// });
  ScrollTrigger.create({
    animation: gsap.from(".logo",{
        y:"50vh",
        scale: 4,
        yPercent: -50,
    }),
    scrub: true,
    trigger:".content-2",  //point from which triggered
    start: "top bottom", //start position
    endTrigger:".content-2",
    end:"top center",  //end position
    // markers: true,
});
 });


 
  return (
    <div className='m-5'>
          {console.log("render ")}
        {/* <div className='content'>
            
        </div>
        <div className='content-2'>
            element 2
        </div> */}
        <div className='logo'>
           WORKVERSE
        </div>
  

    </div>
  )
}
