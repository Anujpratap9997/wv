import React, { useEffect } from 'react'
// import first from "../../assets/images/first.svg"
// import second from "../../assets/images/secondLayer.svg"
// import third from '../../assets/images/third.svg'
import first from "../../assets/images/inner-glow.svg"
import second from "../../assets/images/inner-ring.svg"
import third from '../../assets/images/out-ring.svg'
import '../Logo/Logo.css'
import { gsap } from "gsap";

function Logo({scale , logoRef ,classNames }) {
  return (
      <div className={`workverse-logo d-flex ${scale} ${classNames}`} >
         <ul className="list-unstyled d-flex justify-content-center align-items-center sizeLogo">
                     <li className="logo-3 wv-logo-animate">
                        <img src={third}></img>
                    </li>
                    
                    <li className="logo-2 wv-logo-animate" >
                        <img src={second}></img>
                    </li>   
                    <li className="logo-1 " >
                        <img src={first}></img>
                    </li>             
            </ul>
            
      </div>
               
  )
}

export default Logo