import React, { useRef } from 'react'
import Header from '../components/Header'
import Header from '../components/Header'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import bg_home from '../images/bg-home.jpg'
import { Container, Row, Col } from 'reactstrap';
import ai from '../images/ai.jpg'
import ai3 from '../images/ai3.png'

import { gsap } from 'gsap'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



export default function Home() {
    const ref = useRef();
    


  return (
    <>
        <div className='logo-container'>
            <div className='logo'>
                WORKVERSE
            </div>
        </div>
        <Parallax pages={2} ref={ref} style={{zIndex:-1}}> 
        
        {/*  pages */}

            <ParallaxLayer className='logo-animate' >
                
                <ParallaxLayer 
                    offset={0} //will start at the start of page 1
                    speed={1}
                    factor={2} //how much the image spans
                    style={{
                        backgroundImage: `url(${bg_home})`,
                        backgroundSize: 'cover',

                    }}
                />

                <ParallaxLayer
                    offset={1}  //starts at page 2
                    speed={1}
                    factor={1}
                style={{
                    // backgroundImage: `url(${workplace})`,
                    backgroundColor: '#050551',
                    backgroundSize: 'cover',
                }}
                ></ParallaxLayer>


                <ParallaxLayer offset={0.2} speed={-0.2} style={{ opacity: 1 }}>
                     <img src={ai3} style={{ display: 'block', width: '30%', marginLeft: '65%' }} />
          
                </ParallaxLayer>
                
                <ParallaxLayer
                className='home-text'
                offset={0.2}
                speed={-0.1}
                style={{
                    color:'white',
                    paddingLeft: 50
                }}
                onClick={() => ref.current.scrollTo(3)}
                >


                <div className='container m-0 p-0 sampletext'>
                    <h2>Outsmart artificial intelligence</h2>
                    <p className='m-0'>By enhancing <span className='landing-text' >your workplace intelligence</span> </p>
                    <p>Apply to the The S.M.A.R.T fellowship and get a unique edge over other candidates: humans or bots!</p>
                    <p>Placement linked | INR 9999 | Customized for career fields I Learn in a simulated workplace environment.</p>
                </div>

                </ParallaxLayer>

                {/* Sample Image transition */}
                <ParallaxLayer offset={1.5} speed={0.2} style={{ opacity: 0.6 }}>
                     <img src={ai} style={{ display: 'block', width: '30%', marginLeft: '35%' }} />
          
                </ParallaxLayer>

                <ParallaxLayer
                offset={1.2}
                speed={2}   //speed of the element
                style={{
                    color:'white'
                }}
                className='home-text-below'
                onClick={() => ref.current.scrollTo(0)} //scroll to the page 1
                >
                <h3 className='text-center'>The S.M.A.R.T fellowship empowers you to start thinking where AI stops.</h3>
                <div className='m-0 text-center'>
                <p className='m-0 text-center'>This is sample text.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                </ParallaxLayer>

            </ParallaxLayer>
        </Parallax>
        </>
  )
}
