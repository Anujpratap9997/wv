import React from 'react';
import "./WhoIsThisFor.css"
import Img1 from '../../../assets/images/Our Programs/WhoIsThisFor/Img1.svg'
import Img2 from '../../../assets/images/Our Programs/WhoIsThisFor/Img2.svg'
import Img3 from '../../../assets/images/Our Programs/WhoIsThisFor/Img3.svg'
import { Button } from "reactstrap"
import Arrow from '../../../assets/images/Our Programs/arrow.png'


function WhoIsThisFor({handleNext}) {
    return (
        <div className='container'>
            <div className='row px-5'>
                <h3 className='WhoHead'>
                    <b><span>01.</span> Mindset</b>
                </h3>
            </div>

            <div className='row mt-4 px-5'>
                <div className='col-md-8'>
                    <p className='textColWhoIsThisFor' style={{ fontSize: "1em" }}>
                        The Smart Fellowship is for the ambitious ones who want to fast track their journey to growth and leadership. Think of it as net practice where, if you succeed, you automatically qualify to play the big game.
                    </p>
                </div>
            </div>

            <div className='row px-5'>
                <h3 className='WhoHead'>
                    <b><span>02.</span> Stage of Career</b>
                </h3>
            </div>

            <div className='row px-5 mt-5 mx-3'>
                <div className='col-md-3 '>
                    <div className='row'>
                        <img src={Img1} className='imgWhoIsThisFor' />
                    </div>
                    <div className='row textColWhoIsThisFor text-center mt-3'>
                        <p>Final year student in college in finance, commerce or a banking-related field</p>
                    </div>
                </div>
                <div className='col-md-1 d-flex justify-content-center align-items-center'>
                    <h5 style={{ color: '#fff', fontWeight: 2 }} className='fw-bold'>OR</h5>
                </div>
                <div className='col-md-3'>
                    <div className='row'>
                        <img src={Img2} className='imgWhoIsThisFor' />
                    </div>
                    <div className='row textColWhoIsThisFor text-center mt-3'>
                    <p>Pursuing competitive exams like CA / CS, and want to enhance non-technical skills </p>
                    </div>
                </div>
                <div className='col-md-1 d-flex justify-content-center align-items-center'>
                    <h5 style={{ color: '#fff' }} className='fw-bold'>OR</h5>
                </div>
                <div className='col-md-3'>
                    <div className='row'>
                        <img src={Img3} className='imgWhoIsThisFor' />
                    </div>
                    <div className='row textColWhoIsThisFor text-center mt-3'>
                    <p>Currently employed with 1 month to 2 years of work experience, and want to switch to a better job</p>
                    </div>
                </div>
                {/* <div className='col-md-3 col-sm-6 imgContIntro'>
                    <img src={connect} className='imgSizeIntro' />
                </div> */}
            </div>

            <div className='row px-5 mt-5'>
                <h3 className='WhoHead'>
                    <b><span>03.</span> Job Profiles</b>
                </h3>
            </div>
                
            <div className='row mt-4 px-5'>
                <div>
                    <ul className='textColWhoIsThisFor' >
                        <li>Finance, accounts and auditing</li>
                        <li>Vendor and purchase management</li>
                        <li>Banking and insurance services </li>
                        <li>Statutory compliance</li>
                        <li>Investment banking</li>
                        <li>Risk management</li>
                    </ul>
                </div>
            </div>



            <div style={{paddingBottom:"350px"}}>
      <hr className="hr1 mt-5" />
      <div class='row'>
            <div class='col-md-9'></div>
            <div class='col-md-3 justify-content-end'>
                <Button className="buttn"  onClick={ e =>  handleNext('tab-7')} style={{width:'100%', alignContent:'centre', alignItem:'centre'}}>
                <text className="txt">Next: Schedule</text>
            <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
                </Button>
            </div>
        </div>
      </div>
        </div>

        
    );
}

export default WhoIsThisFor;