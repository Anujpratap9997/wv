import React, { useEffect, useState, useRef } from 'react'
import { Container } from 'reactstrap'
import './MobileSectionThree.css'

import bg_grid from '../../../assets/images/grid-floor.svg'
import computer from '../../../assets/images/computer.svg'
import door from '../../../assets/images/office-door.svg'

import bosses from '../../../assets/images/section-three/bosses.svg'
import clients from '../../../assets/images/section-three/clients.svg'
import vendors from '../../../assets/images/section-three/vendors.svg'
import customers from '../../../assets/images/section-three/customers.svg'
import crisis from '../../../assets/images/section-three/managecrisis.svg'
import negotiate from '../../../assets/images/section-three/negotiate-deals.svg'
import masterclass from '../../../assets/images/section-three/masterclass.svg'
import slack from '../../../assets/images/section-three/slack.svg'
import workspace from '../../../assets/images/section-three/workspace.svg'
import wip from '../../../assets/images/section-three/WIPExport.svg'
import office from '../../../assets/images/section-three/office.svg'


function MobileSectionThree() {
  return (
    <div>
       <div className='mobile-section-three-container'>

            <div className="row">
              <div className="col-12 pt-4">
                <div className='pt-4'>  
                    <img src={door} className='img-fluid' alt="" />
                </div>
               
              </div>

            </div>
            <div className="row">
              <div className="col-12">
                <div className='position-relative mobile-rect-floor'></div> 
              </div>
            </div>
            <div className="row">
              <div className="col-6 m-auto mt-4 z-index-2">                
                
                <div className=''>
                    <img src={computer} className='img-fluid' alt="" />
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-12">
                  <div className='mobile-rect-desk'></div>
                
              </div>
            </div>

            

        </div>

        
    </div>
  )
}

export default MobileSectionThree