import './WhatYouLearn.css'

import React from 'react'
import img1 from "../../../assets/images/Our Programs/WhatYouLearn/Artboard-1 1.svg"
import img2 from "../../../assets/images/Our Programs/WhatYouLearn/Group 284.svg"
import img3 from "../../../assets/images/Our Programs/WhatYouLearn/Group 285.svg"
import bgBox from '../../../assets/images/Our Programs/WhatYouLearn/Rectangle 1090.svg'
import hack2 from '../../../assets/images/Our Programs/WhatYouLearn/Hack 2.svg'
import hack3 from '../../../assets/images/Our Programs/WhatYouLearn/Hack 3.svg'
import hack21 from '../../../assets/images/Our Programs/WhatYouLearn/Hack 2 (1).svg'
import hack31 from '../../../assets/images/Our Programs/WhatYouLearn/Hack 3 (1).svg'
import { Button } from "reactstrap"
// import Arrow from '../../../assets/images/Our Programs/arrow.png'
import Arrow from '../../../assets/images/Our Programs/arrow.png'
// import { Button } from 'reactstrap'

export default function WhatYouLearn({handleNext}) {
  return (
    <div className='container'>
      <div className="row justify-content-start">
        <div className=" col-md-10">
        <h1 className="WYLHeading fw-bold ">Soft skills, mental models & workplace hacks that enhance your ability to apply technical skills</h1>
        </div>
        <div className='row'> 
      <div className="col-md-8 mt-5">
          <p className='pr-5 WYLpara'>Smart Fellowship trains your brain to apply 9 superpower soft skills, 30+ mental models and workplace hacks. This experience along with a strong technical foundation will make you unstoppable at work!</p>

          <p className='WYLpara'>The superpower soft skills you will master</p>
          <Button className="btnw"><p className='WYLglowyText' >Creative Problem Solving</p></Button>
          <Button className="btnw"><p className='WYLglowyText' >Storytelling</p></Button>
          <Button className="btnw"><p className='WYLglowyText' >Emotional Intelligence</p></Button>
          <Button className="btnw"><p className='WYLglowyText' >Negotiation</p></Button>
          <Button className="btnw"><p className='WYLglowyText' >Sharp Remote Communication</p></Button>
          <Button className="btnw"><p className='WYLglowyText' >Collaboration</p></Button>
          <Button className="btnw"><p className='WYLglowyText' >Emotional Intelligence</p></Button>
          <Button className="btnw"><p className='WYLglowyText' >First Principles Thinking</p></Button>
          <Button className="btnw"><p className='WYLglowyText' >First Principles Thinking</p></Button>

        </div>
        <div className='col-md-4'>
          <img className='img-fluid' src={img1} alt="image" />
        </div>
      </div>
      </div>

      <div className="row mt-5">
        <h1 className='mental'>01. Mental Models</h1>
        <div className="col-md-8">
          <p className='WYLpara'>Mental models are ways of thinking / analyzing / deciding that help you use these superpower soft skills in every situation at work. Whether it's dealing with tough clients, smooth talking to get someone to help you, collaborating with different stakeholders, or finding smart ways to solve complex problems - these mental models will help you get to your goal.</p>

          <p className='fw-bold WYLpara'>We will train your brain to apply 30+ mental models. Here are 2 examples!</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-md-6">
          <p className='text-uppercase div-text'>Thought Journey to identify the root cause of a problem</p>
          <div className='div-img p-3'>
            <img className='img mt-5 img-fluid' src={img2} alt="" />
          </div>
        </div>
        <div className="col-md-6">
        <p className='text-uppercase div-text'>Thought Journey to Negotiate</p>
          <div className='div-img p-3'>
            <img className='img mt-5 img-fluid' src={img2} alt="" />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <h1 className='mental'>02. Workplace Hacks</h1>
        <div className="col-md-8">
         <p className='WYLpara'>Why waste time figuring it out, when we’ve done it for you?</p>

         <p className='WYLpara'>After surveying 1000+ successful professionals, we have developed ‘Hacks’ for the most common problems or tasks every professional has to perform. Use them in the simulation, so you’re a pro at them when you enter the real world of work.</p>
        </div>
      </div>
{/* 
      <div className="row mt-5">
        <div className='col-md-6'>
          <div className='tt' style={{ position: 'relative', color:'white' }}>
            <div className='z-1'>
            <img className='img-fluid' src={hack2} alt="" />
            </div>
            <div className='z-2' style={{ position: 'absolute', top: "35%", left: '5%',  color:'white' }}>
            <p className='fw-bold hackText' style={{width:'100%'}}>How to deal with an angry co-worker</p>

            <p style={{width:'60%'}}>Remain calm when faced with anger! Validate their viewpoint and share yours - this a powerful way to handle difficult situations!</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className='hackdiv'>
          <p className='fw-bold hackText'>How to get what you want in a negotiation</p>

          <p className='WYLpara'>Boost your demands by 15-20%! This extra margin becomes your leverage to secure more deliverables from the other party!</p>
          </div>

        </div>
      </div> */}

      <div className="row mt-5">
        <div className="col-md-6">
          <img src={hack21} alt="" className='img-fluid' />
        </div>
        <div className="col-md-6">
          <img src={hack31} alt="" className='img-fluid' />
        </div>
      </div>


      <div className='row mt-5 justify-content-start'>
      <h1 className='mental'>03. Pre-Placement Training</h1>
      <div className='col-md-6'>
      <ul class="ul">
      <li class="">Career counseling</li>
      <li class="">Interview tips</li>
      <li class="">How to leverage the Smart Fellowship experience to <br /> convince recruiters you’re the right fit</li>
    </ul>
      </div>

      </div>


      <div style={{paddingBottom:"350px"}}>
<hr className="hr1 mt-5" />
<div class='row'>
      <div class='col-md-9'></div>
      <div class='col-md-3 justify-content-end'>
          <Button className="buttn"  onClick={ e =>  handleNext('tab-3')} style={{width:'100%', alignContent:'centre', alignItem:'centre'}}>
          <text className="txt">Next: How You Learn</text>
      <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
          </Button>
      </div>
  </div>
</div>
  </div>
  )
}
