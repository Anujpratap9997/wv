import React, { useEffect, useRef } from 'react'
// import first from "../../assets/images/logo/glow-wv1.svg"
// import second from "../../assets/images/logo/glow-wv2.svg"
// import third from '../../assets/images/logo/glow-wv3.svg'
import first from "../../assets/images/inner-glow.svg"
import second from "../../assets/images/inner-ring.svg"
import third from '../../assets/images/out-ring.svg'

import '../Logo/Logo.css'
import { gsap } from "gsap";

function Logo({scale , logoRef, classNames }) {
  return (
      <div className={` ${classNames} d-flex  p-5 mt-5  ${scale}`} ref={el => logoRef = el}>
         <ul className="list-unstyled d-flex justify-content-center align-items-center">
                     <li className="w-logo-3 logo-3">
                        <img src={third}></img>
                    </li>
                    
                    <li className="w-logo-2 logo-2" >
                        <img src={second}></img>
                    </li>   
                    <li className="w-logo-1 logo-1" >
                        <img src={first}></img>
                    </li>             
            </ul>
            
      </div>
               
  )
}

export default Logo