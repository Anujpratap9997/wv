import React, { useEffect, useRef } from 'react'
import {Card, CardBody,CardGroup, Container } from 'reactstrap'
import story_left from '../../../assets/images/about/section-one/story-left.svg'
import story_right from '../../../assets/images/about/section-one/story-right.svg'
import "./aboutsectionone.css"
// import "./mobileSectionOne.css"


function mobileSectionOne() {
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  const div3Ref = useRef(null);
  const div4Ref = useRef(null);


  useEffect(()=>{
    const div1 = div1Ref.current;
    const div2 = div2Ref.current;

    const div3 = div3Ref.current;

    gsap.fromTo(div1,{
      // scale:0,
      x:-300,
      opacity:0,
    },{
      scale:1,
      x:0,
      opacity:1,
      duration:1,
      ease:"power2.inout",
    });


    gsap.fromTo(div2,{
      x:300,
      opacity:0
    },{
      x:0,
      opacity:1,
      duration:1,
      ease:"power2.inout",
    })


    gsap.fromTo(div3,{
      scale:0,
      // x:-300,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:div3,
        start:"start bottom",
        end:"top 50%"
      },
      scale:1,
      // x:0,
      opacity:1,
      duration:1,
      ease:"power2.inout",
    });


  })
  return (
        <Container >
           <section id="storySection">
           <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 pt-md-5">
            <div className="bg-shadow"></div>
              <div className="bg-shadow-left"></div>
              <div className="bg-shadow-right"></div>
              <div class="col-md-6">
              
                <div ref={div1Ref} className='cs-card  justify-content-center'>
                    <img src={story_left}  className="img-fluid" alt="Samyak story" />
                    <p className='story-text text-center' style={{color:"#fff"}}>Ganesh is a 15 year old, studying in a school that was <br/> run by Workvers's founder, Samyak</p>
                </div>
              </div>
              <div className="col-md-6">
                <div ref={div2Ref} className='cs-card  justify-content-center'>
                  <img src={story_right} className="img-fluid" alt="Samyak story right" />
                    <p className='story-text text-center'style={{color:"#fff"}}>Rahul was a fresher who joined Samyak's first start up</p>
                </div>
              </div>
        
            </div>
            <div ref={div3Ref} className="row  text-center">
              <h1 className='text-white py-2 fw-light'>The above 2 interactions are amongst many triggers that played a role in the founding of Workverse.</h1>
            </div>
           </section>
        </Container>
  )
}

export default mobileSectionOne