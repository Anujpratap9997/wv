import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavLink,NavItem, NavbarBrand } from 'reactstrap'
import '../App.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export default function Header() {
  // useEffect(()=>{
  //     ScrollTrigger.create({
  //       animation: gsap.from(".logo",{
  //           y:"50vh",
  //           scale: 4,
  //           yPercent: -50,
  //       }),
  //       scrub: true,
  //       trigger:".content-2",  //point from which triggered
  //       start: "top bottom", //start position
  //       endTrigger:".content-2",
  //       end:"top center",  //end position
  //       // markers: true,
  //   });
  //    });

  return (
    <Nav justified  className="nav px-5">             
                <NavbarBrand className="justify-content-center pt-2 px-5" href="/home">WORKVERSE</NavbarBrand>
                <NavLink tag={Link} to={'home'} className="nav-link item-left px-0">HOME</NavLink>
                <NavLink tag={Link} to={'/about'}  className="item-left px-0">ABOUT US</NavLink>   
                <NavLink tag={Link} to={'/'} className="item-left">PROGRAMS</NavLink>   
                {/* <div className='logo mt-2'>
                     WORKVERSE
                </div> */}
                <NavLink tag={Link} to={'/'} className="item-right ms-4">CONTACT</NavLink>      
                <NavLink tag={Link} to={'/'} className="item-right">CAREERS</NavLink> 
                <NavLink tag={Link} to={'/logo'} className="item-right">LOGO</NavLink>          
    </Nav>
  )
}
