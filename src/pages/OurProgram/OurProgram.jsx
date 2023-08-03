import React from 'react';
import "./OurProgram.css"
import Intro from './Intro/Intro';
import BsTabs from './TabMenu/BsTabs';

//TODO: Recheck css class const, tabconst for scroll behaviour.
function OurProgram() {
  return (
    <div>
      <div className='row mt-5 py-5 container const'  >
        <div className='col-md-6 '>
          <div className='ProText mb-5'>
            <h1>The Smart Fellowship for Finance & Commerce Professionals</h1>
          </div>
        </div>
        <div className='col-md-6'>
          <button className='button button-Apply button-text-an'><div style={{border:'3px solid black',borderRadius:'4px',padding: '11px',paddingLeft: '25px',paddingRight: '25px',margin:'3px',marginRight:'-2px',marginLeft:'-1px'}}>Apply Now >></div></button>
        </div>
      </div>

      <div className='row mt-5 tabconst'>
        <BsTabs/>
      </div>
    </div>
  )
}

export default OurProgram