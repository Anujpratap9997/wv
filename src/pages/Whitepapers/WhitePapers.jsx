import { Container, Card , CardBody,CardText } from 'reactstrap'
import React, { useEffect, useRef } from 'react'

function WhitePapers() {
  const div1Ref =useRef(null);
  const div2Ref =useRef(null);


  useEffect(()=>{

    const div1=div1Ref.current;
    const div2=div2Ref.current;

    gsap.fromTo(div1,{
      // scale:0,
      opacity:0,
      y:300,
    },{
      // scale:1,
      y:0,
      duration:1,
      opacity:1,
      ease: "power2.out"
    });

    gsap.fromTo(".cad",{
      // scale:0,
      opacity:0,
      y:100,
    },{
      stagger: 1,
      y:0,
      delay:1,
      scale:1,
      duration:2,
      opacity:1,
      ease: "power2.out"
    })

  },[])

  return (
    <Container>
      <section className='white-papers'>
      <div className="bg-shadow"></div>
              <div className="bg-shadow-left"></div>
              <div className="bg-shadow-right"></div>
      <div ref={div1Ref} className='row mt-5'>
          <div className="col-md-12">
              <h1 className='text-center primary-text mt-5'>Workplace Knowledge Vault</h1>
              <h3 className='text-center text-white fw-light'>Exploring White Papers</h3>
          </div>
      </div>
      <div ref={div2Ref} className="row ">
          {[1,2,3,4,5,6,6,7,8].map(() => ( 
            <div className="cad col-md-4 my-5 d-flex justify-content-center"> 
                  <a href="https://google.com/" style={{textDecoration: 'none'}} target='_blank'>
                  <Card
                    
                    style={{
                      width: '18rem',
                      background: 'linear-gradient(194.83deg, rgba(7, 237, 196, 0.61) 7.36%, rgba(2, 30, 41, 0.54) 97.94%)',
                      boxShadow: '0px 4px 9px rgba(186, 255, 247, 0.09), 0px 0px 4px rgba(7, 237, 196, 0.3)',
                      borderRadius: '16px'
                    }}
                   >
                  <img
                    alt="Card"
                    className='img-fluid'
                    style={{
                      borderTopRightRadius: '16px',
                      borderTopLeftRadius: '16px'
                    }}
                      src="https://picsum.photos/300/200"

                  />
                  <CardBody>
                    <CardText className='text-white'>
                      This is some text within a card body.
                    </CardText>
                </CardBody>
              </Card>
              </a>
           </div>
          ))}
            
      </div>
      </section>
    </Container>
  )
}

export default WhitePapers