import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logo from '../Logo/Logo';
import MobileLogo from '../Logo/MobileLogo';

function MobileNav(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return ( 
    <div>
      <Navbar color="faded position-absolute w-100" dark style={{zIndex: 4,top:0}}>
        <NavbarBrand  tag={Link} to={'/'} className="nav-logo-mobile d-flex align-items-center mt-1 " style={{marginLeft:'20px'}}>
                   <MobileLogo/>
        </NavbarBrand >
        <NavbarToggler onClick={toggleNavbar} className="" style={{marginLeft:"auto", color:"#fff"}} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav  navbar className='text-center position-relative navbar-mobile'
                style={{backdropFilter: "blur( 8px )",
                height:"100vh",
                zIndex:"2",
                backgroundColor: "rgba(0, 0, 0, 0.08)"}}
              >
                 <NavLink tag={Link} to={'/programs'} className="nav-link nav-list-item p-3">Our Program</NavLink>
                <NavLink tag={Link} to={'/for-employers'}  className="nav-list-item p-3">For Employers</NavLink>   
                <NavLink tag={Link} to={'/wip'} className="nav-list-item p-3">WIP</NavLink>   
                <NavLink tag={Link} to={'/whitepapers'} className="nav-list-item p-3">White Papers</NavLink> 
                {/* <NavLink tag={Link} to={'/programs'} className="nav-list-item">Our Programs</NavLink>       */}
                <NavLink tag={Link} to={'/about'} className="nav-list-item p-3">About</NavLink> 
                <NavLink tag={Link} to={'/careers'} className="nav-list-item p-3">Careers</NavLink> 
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MobileNav;