import React from 'react'
import "./Advantage.css";

import Google from "../../../assets/images/Our Programs/Advantages/google.svg";
import Growth from "../../../assets/images/Our Programs/Advantages/growth.svg";
import Placement from "../../../assets/images/Our Programs/Advantages/placement.svg";
import Supporton from "../../../assets/images/Our Programs/Advantages/support.svg";
// import Arrow from "../../../assets/images/Our Program/arrow.png";
// import { Button } from "reactstrap"
import Arrow from '../../../assets/images/Our Programs/arrow.png'
import { Button } from 'reactstrap';

const Advantage = ({handleNext}) => {
  return (
    <div className='container'>
      <div className="smart">
        <h2 style={{fontSize:"24px"}}>
          <b>Smart Fellows are in-demand in the new world of work</b>
        </h2>
      </div>

      <div>
          <div className="mt-5">
            <p className="smart" >
              Here’s what you get at the end of this program.
            </p>
          </div>
            <div className='mt-5 text-center'>
            <img className='img-fluid'
              src={Google}
              alt=""
            />
            </div>
      </div>

      <div id="workplaceprofile1">
        <div className="row d-flex justify-content-between d-inline-flex">
        <div><h4 className="growth1 mt-5" >
              <b>01. <span>Growth</span></b>
            </h4></div>
          <div className="col-8 mt-5">
            <ul className='un'>
                <li >
                    <p>This experience empowers you to immediately start thinking and taking actions independently instead of having to rely on instructions or support</p>
                </li>
                <li >
                    <p> The mental models learned will enable you to do work that others cannot, ensuring that you get noticed by your seniors for quicker promotions</p>
                </li>
            </ul>
          </div>
          <div className="col-4">
            <img className='img-fluid'
              src={Growth}
              alt=""
              
            />
          </div>
        </div>
      </div>

      <div id="mobileworkplaceprofile1">
      <div className="row d-flex justify-content-between d-inline-flex">
        <div><h4 className="growth1 mt-5" >
              <b>01. <span>Growth</span></b>
            </h4></div>
            <div className="col-md-4">
            <img className='img-fluid'
              src={Growth}
              alt="" 
            />
          </div>
            <div className="col-md-8 mt-5">
            <ul className='un'>
                <li >
                    <p>This experience empowers you to immediately start thinking and taking actions independently instead of having to rely on instructions or support</p>
                </li>
                <li >
                    <p> The mental models learned will enable you to do work that others cannot, ensuring that you get noticed by your seniors for quicker promotions</p>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="workplaceprofile1">
        <div className="row d-flex justify-content-between d-inline-flex">
        <div><h4 className="growth1 mt-5" >
              <b>02. <span>Placement</span></b>
            </h4></div>
            <div className="col-8 mt-5">
            <ul className='un'>
                <li >
                    <p>0-15% higher negotiating power</p>
                </li>
                <li >
                    <p> 0-15% higher negotiating power</p>
                </li>
                <li >
                    <p> Unique edge in a market where 250+ people apply for the same job with similar degrees and certifications</p>
                </li>
            </ul>
          </div>
          <div className="col-4">
            <img className='img-fluid'
              src={Placement}
              alt=""
              
            />
          </div>

        </div>
      </div>

      <div id="mobileworkplaceprofile1">
      <div className="row d-flex justify-content-between d-inline-flex">
        <div><h4 className="growth1 mt-5" >
             <b>02. <span>Placement</span></b>
            </h4></div>
            <div className="col-md-4">
            <img className='img-fluid'
              src={Placement}
              alt=""
              
            />
          </div>
            <div className="col-md-8 mt-5">
            <ul className='un'>
                <li >
                    <p>0-15% higher negotiating power</p>
                </li>
                <li >
                    <p> 0-15% higher negotiating power</p>
                </li>
                <li >
                    <p> Unique edge in a market where 250+ people apply for the same job with similar degrees and certifications</p>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="workplaceprofile1">
        <div className="row d-flex justify-content-between d-inline-flex">
        <div><h4 className="growth1 mt-5" >
              <b>03. <span>Support on the Job</span></b>
            </h4></div>
            <div className="col-8 mt-5">
            <ul className='un'>
                <li >
                    <p>Access to 100+ mental models that will help you tackle all challenges or tasks in the real world of work</p>
                </li>
                <li >
                    <p> 50+ hours of proprietary training content</p>
                </li>
                <li >
                    <p> Lifetime access to masterclass recordings, even ones that happen after your batch is finished</p>
                </li>
            </ul>
          </div>
          <div className="col-4">
            <img className='img-fluid'
              src={Supporton}
              alt=""
            />
          </div>
        </div>
      </div>

      <div id="mobileworkplaceprofile1">
      <div className="row d-flex justify-content-between d-inline-flex">
      <div><h4 className="growth1 mt-5" >
              <b>03. <span>Support on the Job</span></b>
            </h4></div>
            <div className="col-md-4">
            <img className='img-fluid'
              src={Supporton}
              alt=""
            />
          </div>
            <div className="col-md-8 mt-5">
            <ul className='un'>
                <li >
                    <p>Access to 100+ mental models that will help you tackle all challenges or tasks in the real world of work</p>
                </li>
                <li >
                    <p> 50+ hours of proprietary training content</p>
                </li>
                <li >
                    <p> Lifetime access to masterclass recordings, even ones that happen after your batch is finished</p>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{paddingBottom:"350px"}}>
      <hr className="hr1 mt-5" />
      <div class='row'>
            <div class='col-md-9'></div>
            <div class='col-md-3 justify-content-end'>
                <Button className="buttn"  onClick={ e =>  handleNext('tab-6')} style={{width:'100%', alignContent:'centre', alignItem:'centre'}}>
                <text className="txt">Next: Who is this for</text>
            <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
                </Button>
            </div>
        </div>
      </div>



      {/* <div className="mt-4 p-2 next d-flex d-inline-flex">
        <h4 className="ww">Next: Who is this for   </h4>
        <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
      </div> */}
    </div>
  )
}

export default Advantage