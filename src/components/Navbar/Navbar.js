import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavLink,NavItem, NavbarBrand } from 'reactstrap'
import "../Navbar/Navbar.css"
import Logo from '../Logo/Logo'
import MobileNav from './MobileNav'
import {gsap , Power3 , } from 'gsap'
import { useMediaQuery } from 'react-responsive'
// import tagline from "../../assets/images/tagline.svg"
import tagline from "../../assets/images/tagline.svg"

function Navbar() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  const [navRef, setNavRef] = useState(null)

  const isMobile = useMediaQuery({
    query : "(max-width: 900px)"
  })

  useEffect(() => {
      tl.from(navRef,.8, {opacity :0, y:40, ease : Power3.easeIn})
  },[])
  

    if(isMobile){
        return <MobileNav/>
    }

  return (
        <Nav className="nav d-flex justify-content-end p-4"  ref={el => headingContainerRef = el}>             
                <NavLink tag={Link} to={'/'} className="nav-logo d-flex align-items-center" style={{marginLeft:'20px'}}>
                    <Logo scale="scale-n3"/>
                    <div className='logo-text'>Workverse<br/><img src={tagline} className='tagline-text'/></div>
                </NavLink>
                <NavLink tag={Link} to={'/programs'} className="nav-link nav-list-item">Our Program</NavLink>
                <NavLink tag={Link} to={'/for-employers'}  className="nav-list-item">For Employers</NavLink>   
                <NavLink tag={Link} to={'/wip'} className="nav-list-item">WIP</NavLink> 
                <NavLink tag={Link} to={'/whitepapers'} className="nav-list-item">White Papers</NavLink> 
                {/* <NavLink tag={Link} to={'/programs'} className="nav-list-item">Our Programs</NavLink>  */}
                <NavLink tag={Link} to={'/about'} className="nav-list-item">About</NavLink> 
                <NavLink tag={Link} to={'/careers'} className="nav-list-item">Careers</NavLink> 
        </Nav>
  )
}

export default Navbar;