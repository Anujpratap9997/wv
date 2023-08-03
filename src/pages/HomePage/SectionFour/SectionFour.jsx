import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import"./sectionfour.css"
import prefrence_icon from '../../../assets/images/home/section-four/prefrence_icon.svg'
import negotiation_icon from '../../../assets/images/home/section-four/negotiation_icon.svg'
import brain_icon from '../../../assets/images/home/section-four/brain_icon.svg'
import file_icon from '../../../assets/images/home/section-four/file_icon.svg'
import ai_icon from '../../../assets/images/home/section-four/ai_icon.svg'
import growht_people_icon from '../../../assets/images/home/section-four/growht_people_icon.svg'
import final_door from '../../../assets/images/home/section-four/final_door.svg'

function SectionFour() {
  const div1Ref = useRef(null);


  const div1 =div1Ref.current;

  useEffect(()=>{
    gsap.fromTo(".bar-li",{
      opacity:0,
    },{
      scrollTrigger:{
        trigger:div1,
        start:"top bottom"
      },
      stagger:1,
      delay:1,
      opacity:1,
      duration:1,
      ease:"power2.out"
    })
  },[])
  return (
    <Container fluid className='section-four-container mb-10'>                                               
       <div className="row mb-10 ">
            <div className="col-md-12">      
                <div ref={div1Ref} className="chart">
                    <ul className='bars'>
                      <h1 className='mt-5 pt-5'>YOUR ADVANTAGE</h1>
                        <li className='bar-li'>
                            <div className="bar" data-percentage="100">
                             <img src={prefrence_icon} alt="prefrence icon" width={'100px'} />
                            <span>
                            Your get preference
                          </span> 
                            <p className='p-4 text-center'>250+ Applicants for each job </p>
                          </div>
                          </li>
                        <li className='bar-li'>
                          <div className="bar" data-percentage="150" >
                          <img src={negotiation_icon} alt="negotiation icon" width={'100px'} />
                          <span>Negotiation upto 20% more</span>
                          <p className='p-4 text-center'>Low starting salary</p>
                          </div>
                         
                        </li>
                        <li className='bar-li'>
                            <div className="bar" data-percentage="200" >
                            <img src={brain_icon} alt="brain icon" width={'100px'} />
                              <span>Brain trained to tackle 100+ scenarios</span>
                              <p className='p-4 text-center'>Needs time to adjust to a fast paced work environment</p>
                            </div>
                        </li>
                        <li className='bar-li'>
                            <div className="bar" data-percentage="250" >
                            <img src={file_icon} alt="file icon" width={'100px'} />
                              <span>Get chosen for more important & significant tasks</span>
                              <p className='p-4 text-center'>Blending in with the crowd and being given same menial task as all other entry level talent</p>
                            </div>
                        </li>
                        <li className='bar-li'>
                          <div className="bar" data-percentage="300" >
                          <img src={ai_icon} alt="ai icon" width={'100px'} />
                            <span>AI can't do what you can for very long time</span>
                            <p className='p-4 text-center'>AI is taking over repetitive & knowledge-driven tasks</p>
                          </div>
                        </li>
                        <li className='bar-li'>
                          <div className="bar" data-percentage="350" >
                            <img src={growht_people_icon} alt="growth icon" width={'100px'} />
                            <span >Your boss already sees you as future leader. Command at least 20% Year-on growth</span>
                            <p className='p-4 text-center'>Getting chosen for promotion </p>
                          </div>
                        </li>
                      
                        <li className='bar-li'>
                          <div className="bar" data-percentage="350" >
                            {/* TODO: have to add svg icon here */}
                            {/* <img src={growht_people_icon} alt="growth icon" width={'100px'} /> */}
                            <span className='final-bar-text'>
                                <p>Builds own professional brand</p>
                                <p>Networks with industry leaders</p>
                                <p>Gives talks and interviews to inspire young professionals</p>
                            </span>
                          </div>
                        </li>
                        <li className='bar-li'>
                          <div className="bar" data-percentage="400" >
                            <img src={final_door} alt="Final icon" width={'100px'} />
                          </div>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
    </Container>
  )
}

export default SectionFour