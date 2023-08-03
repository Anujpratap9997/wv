import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import step1 from '../../../assets/images/career/steps-1.svg'
import step2 from '../../../assets/images/career/steps-2.svg'
import step3 from '../../../assets/images/career/steps-3.svg'
import step4 from '../../../assets/images/career/steps-4.svg'
import currentCareerImage from '../../../assets/images/career/current-career-image.svg'
import "./careers-sectionone.css"

function SectionOne() {
  const div1Ref =useRef(null);
  const div2Ref = useRef(null);

  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  const div5Ref = useRef(null);
  const div6Ref = useRef(null);

  const div7Ref = useRef(null);
  const div8Ref = useRef(null);
  const div9Ref = useRef(null);

  useEffect(()=>{
    const div1 =div1Ref.current;
    const div2 =div2Ref.current;
    
    const div3 = div3Ref.current;
    const div4 = div4Ref.current;

    const div5 = div5Ref.current;
    const div6 = div6Ref.current;

    const div7 = div7Ref.current;
    const div8 = div7Ref.current;
    const div9 = div7Ref.current;

    gsap.fromTo(div1,{
      scale:0,
      opacity:0,
    },{
      scale:1,
      opacity:1,
      duration:1,
      ease:"power2.inOut",
    });



    gsap.fromTo(div2,{
      scale:0,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:div2,
        start:"top bottom",
        end:"bottom 40%",
        scrub:true
      },
      scale:1,
      opacity:1,
      duration:1,
      ease:"power2.inOut",
    });



    gsap.fromTo(div3,{
      scale:0,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:div3,
        start:"top bottom",
        end:"bottom 50%",
        scrub:true
      },
      scale:1,
      opacity:1,
      duration:1,
      ease:"power2.inOut",
    });


    gsap.fromTo(div4,{
      scale:0,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:div4,
        start:"top bottom",
        end:"bottom 50%",
        scrub:true
      },
      scale:1,
      opacity:1,
      duration:1,
      ease:"power2.inOut",
    });


    gsap.fromTo(div5,{
      scale:0,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:div5,
        start:"top bottom",
        end:"bottom 50%",
        scrub:true
      },
      scale:1,
      opacity:1,
      duration:1,
      ease:"power2.inOut",
    });


    gsap.fromTo(div6,{
      scale:0,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:div6,
        start:"top bottom",
        end:"bottom 50%",
        scrub:true
      },
      scale:1,
      opacity:1,
      duration:1,
      ease:"power2.inOut",
    });


    gsap.fromTo(div7,{
      scale:0,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:div7,
        start:"top bottom",
        end:"bottom 70%",
        scrub:true
      },
      scale:1,
      opacity:1,
      duration:1,
      ease:"power2.inOut",
    });





  })



  return (
    <Container>
      <section id="careerIntroSection">
      {/* <div className="bg-shadow"></div>
      <div className="bg-shadow-left"></div>
      <div className="bg-shadow-right"></div> */}
        <div ref={div1Ref} className="row mt-5 pt-5">
            <div className="col-md-12 ">
            <h1 className='primary-text text-center fw-bold my-2'>Working at Workverse is a state of mind.</h1>
            <h3 className='text-white text-center fw-light'>We are a room full of creators, thinkers, solvers & curious individuals for whom their role here is not a “job”, but a way to play their part in building something meaningful for the world..</h3>
            <h3 className='text-white text-center fw-light my-5'>If this aligns with you, Apply to join us!</h3>
            </div>
          </div>
      </section>
      <section id="hiringProcessSection">
          <div ref={div2Ref} className="row my-md-5">
            <div className="col-md-12 ">
              <h3 className='primary-text text-center'>Our hiring processs is as follows</h3>
              <h3 className='text-white fw-light text-center mb-5'>We follow a strict no work from home policy.</h3>
              <h3 className='text-white fw-light text-center'>Afterall, could the Beatles have created their everlasting magic if they collaborated on zoom?</h3>
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-5">
              <ul class="list-group">
              {/* <div className="bg-shadow"></div>
              <div className="bg-shadow-right"></div>
              <div className="bg-shadow-left"></div> */}
                <li ref={div3Ref} class="list-group-item my-2  border-0 bg-transparent d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <div  className='step-icon text-center text-md-start'>
                      <img src={step1} alt="" className='img-fluid py-4 p-md-1' />
                    </div>
                    <span className='px-5'>
                        <h3 className='fw-bold primary-text text-center text-md-start'>Step 1</h3>
                        <h3 className='text-white fw-sm-light text-center text-md-start'>Submission of CV</h3>
                    </span>
                </li>
                <li ref={div4Ref} class="list-group-item my-2  border-0 bg-transparent d-flex d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <div className="step-icon text-center text-md-start">
                      <img src={step2} alt="" className='img-fluid py-4 p-md-1' />
                    </div>
                    <span className='px-5'>
                        <h3 className='fw-bold primary-text text-center text-md-start'>Step 2</h3>
                        <h3 className='text-white fw-sm-light text-center text-md-start'>First interview with Leader</h3>
                    </span>
                </li>
                {/* <div className="bg-shadow"></div>
      <div className="bg-shadow-left"></div>
      <div className="bg-shadow-right"></div> */}
                <li ref={div5Ref} class="list-group-item my-2  border-0 bg-transparent d-flex flex-column flex-md-row justify-content-center align-items-center">
                   <div className="step-icon text-center text-md-start">
                    <img src={step3} alt="" className='img-fluid py-4 p-md-1' />
                   </div>
                    <span className='px-5'>
                        <h3 className='fw-bold primary-text text-center text-md-start'>Step 3</h3>
                        <h3 className='text-white fw-sm-light text-center text-md-start'>Short Assignment</h3>
                    </span>
                </li>
                <li ref={div6Ref} class="list-group-item my-2   border-0 bg-transparent d-flex flex-column flex-md-row justify-content-center align-items-center">
                   <div className="step-icon  text-center text-md-start">
                    <img src={step4} alt="" className='img-flui d py-4 p-md-1' />
                   </div>
                    <span className='px-5'>
                        <h3 className='fw-bold primary-text  text-center text-md-start'>Step 4</h3>
                        <h3 className='text-white fw-sm-light text-center text-md-start '>Final Interview with Founder</h3>
                    </span>
                </li>
              </ul>
                            </div>
          </div>
      </section>
      <section ref={div7Ref} id="vacancySection">
      {/* <div className="bg-shadow"></div>
      <div className="bg-shadow-left"></div>
      <div className="bg-shadow-right"></div> */}
        <div className="row my-5">
          <div className="col-md-12">
              <h3 className='text-white fw-bold'>Current Vacancy</h3>
          </div>
        </div>
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
      {/* <div className="bg-shadow"></div>
      <div className="bg-shadow-right"></div>
      <div className="bg-shadow-left"></div> */}
        <div class="col">
          <div class="card card-col-careers">
            <img src={currentCareerImage} class="card-img-top" alt="" />
            <div class="card-body jsb">
              <h5 class="card-title text-white">Chief Technology Officer</h5>
              <button className='btn career-applynow-btn'>APPLY NOW</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card card-col-careers">
            <img src={currentCareerImage} class="card-img-top" alt="" />
            <div class="card-body jsb">
              <h5 class="card-title text-white">Chief Technology Officer</h5>
              <button className='btn career-applynow-btn'>APPLY NOW</button>
            </div>
          </div>
        </div>
      </div>
      </section>
        
    </Container>
  )
}

export default SectionOne