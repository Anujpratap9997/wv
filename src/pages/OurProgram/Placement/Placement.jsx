import React from "react";
import "./Placement.css";

import Workplace from "../../../assets/images/Our Programs/Placement/Workverse.svg";
import Workverse from "../../../assets/images/Our Programs/Placement/Workplace.svg";
import Joboffer from "../../../assets/images/Our Programs/Placement/JobOffers.svg";
import { Button } from "reactstrap";
import Arrow from '../../../assets/images/Our Programs/arrow.png'
// import Arrow from "../../../assets/images/Our Program/arrow.png";


const Placement = ({handleNext}) => {
  return (
    <div className="container">
      <div className="placement1">
        <h2>
          <b>Be the chosen 1 amongst 250+ applicants</b>
        </h2>
      </div>
      <div className="placement2" style={{ width: "50%" }}>
        Smart Fellows get a unique advantage because you can think, solve and{" "}
        <br />
        communicate ‘smarter’ than others in the sea of applicants. You have
        what <br /> cannot be automated.
        <br />
        <br />
        After successfully completing your learning journey, we pair you with
        new <br /> age enterprises looking for ambitious hustlers in their
        finance function.
      </div>

      <div className="placement3 " id="workplaceprofile">
        <h3>
          01. You graduate with your unique Workplace Intelligence Profile
        </h3>
        <div className="row d-flex justify-content-between d-inline-flex">
          <div className="col-6">
            <p className="placement2" >
              {" "}
              The Workplace Intelligence Profile (WIP) provides employers with
              an understanding of how you would apply 9 superpower soft skills
              in a diverse range of workplace situations. Think of this as a new
              age ‘certification’ which is more valuable than just degrees.
            </p>
          </div>
          <div className="col-6">
            <img
              src={Workplace}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="placement3 " id="mobileworkplaceprofile">
        <h3>
          01. You graduate with your unique Workplace Intelligence Profile
        </h3>
        <div className="row d-flex justify-content-between d-inline-flex">
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
            <img
              src={Workplace}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
            <p className="placement2" >
              {" "}
              The Workplace Intelligence Profile (WIP) provides employers with
              an understanding of how you would apply 9 superpower soft skills
              in a diverse range of workplace situations. Think of this as a new
              age ‘certification’ which is more valuable than just degrees.
            </p>
          </div>
        </div>
      </div>

      <div className="placement3 " id="workplaceprofile">
        <h3>02. Recruiters get your WIP</h3>
        <div className="row d-flex justify-content-between d-inline-flex">
          <div className="col-6">
            <p className="placement2" >
              {" "}
              The Workplace Intelligence Profile (WIP) provides employers with
              an understanding of how you would apply 9 superpower soft skills
              in a diverse range of workplace situations. Think of this as a new
              age ‘certification’ which is more valuable than just degrees.
            </p>
          </div>
          <div className="col-6">
            <img
              src={Workverse}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="placement3 " id="mobileworkplaceprofile">
        <h3>02. Recruiters get your WIP</h3>
        <div className="row d-flex justify-content-between d-inline-flex">
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
            <img
              src={Workverse}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
            <p className="placement2" >
              {" "}
              TThe Workplace Intelligence Profile (WIP) provides employers with
              an understanding of how you would apply 9 superpower soft skills
              in a diverse range of workplace situations. Think of this as a new
              age ‘certification’ which is more valuable than just degrees.
            </p>
          </div>
        </div>
      </div>

      <div className="placement3 " id="workplaceprofile">
        <h3>03. Choose your Dream Job Offer</h3>
        <div className="row d-flex justify-content-between ">
          <div className="col-6">
            <p className="placement2" >
              {" "}
              We schedule interviews for you with our partner employers and will
              guide you to ace the interview process. So be prepared to make a
              tough choice between at least 2 exciting offers.
            </p>
          </div>
          <div className="col-6">
            <img src={Joboffer} alt="" width={359} height={300} />
          </div>
        </div>
      </div>

      <div className="placement3 " id="mobileworkplaceprofile">
        <h3>03. Choose your Dream Job Offer</h3>
        <div className="row d-flex justify-content-between ">
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
            <img src={Joboffer} alt="" width={359} height={300} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
            <p className="placement2" >
              {" "}
              We schedule interviews for you with our partner employers and will
              guide you to ace the interview process. So be prepared to make a
              tough choice between at least 2 exciting offers.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div  className="tranparantdiv p-4 mt-5">
          <h4 style={{color:"white"}} >TERMS AND CONDITIONS</h4>
          <p style={{color:"white"}}>
            Placement support is only for those candidates who have successfully
            completed the program and receive the minimum required score on the
            WIP. You are free to reject all offers however in that scenario you
            will have to pay us the placement support fee if you receive a
            minimum of 2 offers from partner employers. You can continue using
            the shareable version of the WIP should you choose to seek job
            offers outside of the fellowship.
          </p>
        </div>
      </div>

      <div style={{paddingBottom:"350px"}}>
      <hr className="hr1 mt-5" />
      <div class='row'>
            <div class='col-md-9'></div>
            <div class='col-md-3 justify-content-end'>
                <Button className="buttn"  onClick={ e =>  handleNext('tab-5')} style={{width:'100%', alignContent:'centre', alignItem:'centre'}}>
                <text className="txt">Next: Advantages</text>
            <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
                </Button>
            </div>
        </div>
      </div>

      {/* <div className="mt-4 p-2 next d-flex d-inline-flex">
        <h4 className="ww">Next: Advantages </h4>
        <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
      </div> */}
    </div>
  );
};

export default Placement;