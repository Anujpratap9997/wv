import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'reactstrap'
import circleText from '../../../assets/images/ForEmployers/mobile/foremp-circle.svg'
import empCenter from '../../../assets/images/ForEmployers/mobile/emp-center-img.svg'
import one from '../../../assets/images/ForEmployers/mobile/01.svg'
import two from '../../../assets/images/ForEmployers/mobile/02.svg'
import three from '../../../assets/images/ForEmployers/mobile/03.svg'
import four from '../../../assets/images/ForEmployers/mobile/04.svg'

import oneEmp from '../../../assets/images/ForEmployers/mobile/1emp.svg'
import twoEmp from '../../../assets/images/ForEmployers/mobile/2emp.svg'
import threeEmp from '../../../assets/images/ForEmployers/mobile/3emp.svg'
import fourEmp from '../../../assets/images/ForEmployers/mobile/4emp.svg'
import vector from '../../../assets/images/ForEmployers/mobile/vector.svg'
import bulb from '../../../assets/images/ForEmployers/mobile/bulb.svg'
import innerText from '../../../assets/images/ForEmployers/mobile/inner-text.svg'
import outerText from '../../../assets/images/ForEmployers/mobile/outer-text.svg'
//promgam images
import program1 from '../../../assets/images/ForEmployers/mobile/SF - Finance Mobile.png'
import program2 from '../../../assets/images/ForEmployers/mobile/SF - IT Mobile.png'
import program3 from '../../../assets/images/ForEmployers/mobile/SF - Media Mobile.png'

//testimonial image
import user1 from "../../../assets/images/ForEmployers/testimonials/user1.svg";
import BackQuote from "../../../components/Testimonial/BackQuote";


import mukesh from '../../../assets/images/about/Testimonials/mukesh.svg'
import amisha from '../../../assets/images/about/Testimonials/amisha.svg'
import kashish from '../../../assets/images/about/Testimonials/kashish.svg'
import anubhav from '../../../assets/images/about/Testimonials/anubhav.svg'
import akhil from '../../../assets/images/about/Testimonials/akhil.svg'


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./forEmpMobile.css"
import ContactForm from '../ContactForm'

function MobileForEmp() {

    const div1Ref = useRef(null);
    const div2Ref = useRef(null);

    const div3Ref = useRef(null);
    const div4Ref = useRef(null);

    const div5Ref = useRef(null);
    const div6Ref = useRef(null);

    const div7Ref = useRef(null);
    const div8Ref = useRef(null);

    const div9Ref = useRef(null);
    const div10Ref = useRef(null);

    const div11Ref = useRef(null);
    const div12Ref = useRef(null);

    const div13Ref = useRef(null);
    const div14Ref = useRef(null);

    const div15Ref = useRef(null);
    const div16Ref = useRef(null);

    const div17Ref = useRef(null);
    const div18Ref = useRef(null);

    const div19Ref = useRef(null);
    const div20Ref = useRef(null);

    const div21Ref = useRef(null);
    const div22Ref = useRef(null);

    const div23Ref = useRef(null);
    const div24Ref = useRef(null);

    const div25Ref = useRef(null);

    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplaySpeed: true,
    //     centerMode: true,
    // };

    
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2500,
    cssEase:"linear",
    centerMode: true,
    pauseOnHover: false,
  };

    const testimonialSettings = {
        dots: false,
        infinite: true, // Enable infinite looping
        speed: 3000, // Animation speed in milliseconds (adjust as needed)
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed (adjust as needed)
        cssEase: "linear",
        pauseOnHover: false,
        centerMode: true,
    };

    // const testimonialCards = [1, 3, 4, 5, 6];
    const testimonialCards = [
        {
        img_src:mukesh,
        text:"Two years ago, I found a job vacancy, that required only graduates. Despite not having graduated, I got hired over other candidates through storytelling a skill that I learned through Workverse. Their program prioritizes personal as well as professional growth, which helped me develop confidence and become a better version of myself.",
        name:"Mukesh Tiwari",
        col_name:"Udaan India Foundation",
      },
    
        {
        img_src:amisha,
        text:"Workverse training emphasized the importance of non-technical skills in the workplace. It provided a balanced exposure to technical and interpersonal skills, teaching me effective communication, emotional management, and problem-solving. Now, I'm more confident and capable of handling various challenges, becoming a better version of myself.",
        name:"AMISHA GONSALVES",
        col_name:"Fr. Conceicao Rodrigues College of Engineering",
      },
    
        {
        img_src:kashish,
        text:"I'm immensely grateful to the Workverse team for an incredible learning experience. Since joining, my confidence has grown, my time management skills improved, and my professional relationships strengthened. The diverse and holistic curriculum facilitated my overall development, overcoming workplace challenges as a fresher",
        name:"KASHISH KHURANA",
        col_name:"Jagran Lakecity University",
      },
    
        {
        img_src:anubhav,
        text:"The Workverse program improved my professional and interpersonal skills comprehensively, from communication to task management. It enhanced my understanding of the corporate sector. Previously hesitant in approaching people, I now confidently engage and keep them interested. Being proactive at work has impressed my seniors.",
        name:"ANUBHAV GUPTA",
        col_name:"SRM College",
      },
    
        {
        img_src:akhil,
        text:"Workverse's Sept 2022 program taught me creative problem-solving through simple mental models. Increased productivity and better management of daily work issues are the valuable outcomes. Grateful to Workverse for the freshers' program that gave me a unique edge in my work.",
        name:"AKHIL RANA",
        col_name:"Government Polytechnic College, Hamirpur",
      },
    
    
    ];

    const testimonialSlides = testimonialCards.map((item, index) => (
        <div key={index} className="testimonial-slide">
            <>
                <div className='mx-2'>
                    <div className="card testimonial-card bg-dark mt-5">
                        <img src={item.img_src} className="testimonial-img" alt="" />
                        <div className="card-inner">
                            <BackQuote class="backquotes" />
                            <p className="testimonial-card-text text-white ">
                                <i>{item.text}</i>
                            </p>
                        </div>
                        <div className="footer-text">
                            <h5 className="text-white fw-light">{item.name}</h5>
                            <p className="ts-text">{item.col_name}</p>
                        </div>
                    </div>

                </div>

            </>
        </div>
    ));

    // Duplicate the slides to ensure a continuous loop
    const allTestimonialSlides = [...testimonialSlides, ...testimonialSlides];


    let tl = gsap.timeline();
    useEffect(() => {
        tl.to(
            ".emp",
            {
                rotate: 360,
                duration: 20,
                ease: "linear",
                repeat: -1,
                yoyo: false,
                delay: 1,
            },
            "<"
        )
        .to(
            ".emp-inner-circ",
            {
                rotate: 360,
                duration: 30,
                ease: "linear",
                repeat: -1,
                yoyo: false,
                delay: 1,
            },
            "<"
        )
        .to(
            ".emp-outer-circ",
            {
                rotate: -360,
                duration: 30,
                ease: "linear",
                repeat: -1,
                yoyo: false,
                delay: 1,
            },
            "<"
        );
    }, []);

    useEffect(() => {
        const div1 = div1Ref.current;
        const div2 = div2Ref.current;

        const div3 = div3Ref.current;
        const div4 = div4Ref.current;

        const div5 = div5Ref.current;
        const div6 = div6Ref.current;

        const div7 = div7Ref.current;
        const div8 = div8Ref.current;

        const div9 = div9Ref.current;
        const div10 = div10Ref.current;

        const div11 = div11Ref.current;
        const div12 = div12Ref.current;

        const div13 = div13Ref.current;
        const div14 = div14Ref.current;

        const div15 = div15Ref.current;
        const div16 = div16Ref.current;

        const div17 = div17Ref.current;
        const div18 = div18Ref.current;

        const div19 = div19Ref.current;
        const div20 = div20Ref.current;

        const div21 = div21Ref.current;
        const div22 = div22Ref.current;

        const div23 = div23Ref.current;
        const div24 = div24Ref.current;

        const div25 = div25Ref.current;


        gsap.fromTo(div1, {
            scale:0,
            opacity:0,
        }, {
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
        
          gsap.fromTo(div2, {
            scale:0,
            opacity:0,
        }, {
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            delay:0.5,
        });
      
          gsap.fromTo(div3, {
            scale:0,
            opacity:0,
        }, {
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            delay:1,
        });
      
          gsap.fromTo(div4, {
            scale:0,
            opacity:0,
        }, {
            delay:1.5,
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
          gsap.fromTo(div5, {
            scale:0,
            opacity:0,
        }, {
            scrollTrigger: {
                trigger: div5,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
          gsap.fromTo(div6, {
            scale:0,
            opacity:0,
        }, {
            scrollTrigger: {
                trigger: div6,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
          gsap.fromTo(div7, {
            scale:0,
            opacity:0,
        }, {
            scrollTrigger: {
                trigger: div7,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
          gsap.fromTo(div8, {
            scale:0,
            opacity:0,
        }, {
            scrollTrigger: {
                trigger: div8,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
          gsap.fromTo(div9, {
            scale:0,
            opacity:0,
        }, {
            scrollTrigger: {
                trigger: div9,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
          gsap.fromTo(div10, {
            scale:0,
            opacity:0,
        }, {
            scrollTrigger: {
                trigger: div10,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
          gsap.fromTo(div11, {
            scale:0,
            opacity:0,
        }, {
            scrollTrigger: {
                trigger: div11,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
          gsap.fromTo(div12, {
            scale:0,
            opacity:0,
        }, {
            scrollTrigger: {
                trigger: div12,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale:1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });
      
        gsap.fromTo(div13, {
          scale:0,
          opacity:0,
      }, {
          scrollTrigger: {
              trigger: div13,
              start: "top 110%",
              end: "bottom 50%",
              scrub: true,
          },
          // x: "100%",
          // y: "100%",
          scale:1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
      });
      
      gsap.fromTo(div14, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div14,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });
    
      gsap.fromTo(div15, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div15,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div16, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div16,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div17, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div17,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div18, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div18,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div19, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div19,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div20, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div20,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div21, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div21,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div22, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div22,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div23, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div23,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div24, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div24,
            start: "top 110%",
            end: "bottom 50%",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(div25, {
        scale:0,
        opacity:0,
      }, {
        scrollTrigger: {
            trigger: div25,
            start: "top 110%",
            end: "bottom bottom",
            scrub: true,
        },
        // x: "100%",
        // y: "100%",
        scale:1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });



    },[])


    return (
        <Container fluid="sm">
            <section id="forEmpMobile">
                <div ref={div1Ref} className="row mt-5 pt-5">
                    <div className="col-12">
                        <h1 className='text-center primary-text'>Would you like to Hire a Smart Fellow?</h1>
                    </div>
                </div>
                <div ref={div2Ref} className="row">
                    <div className="col-12 ">
                        <p className='text-white text-center'>We transform entry level talent into smart generalist who can think solve & communicate beyond just their technical skills</p>
                    </div>
                </div>
                <div ref={div3Ref} className="row">
                    <div
                        className="col-12"
                        id="empMobileImgOne"
                        style={{ backgroundImage: `url(${empCenter})` }}>
                        <img src={circleText} alt="image" className="img-fluid emp" />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12">
                        <p ref={div4Ref} className='text-center text-white'>The Smart Fellowship is a Workplace Simulation and Role Play based program where graduates master 9 Soft Skills. These superpowers enhance their ability and add value to your business.</p>
                        <h5 ref={div5Ref} className='text-center primary-text pt-3'> And here is how it Works!</h5>
                    </div>
                </div>
            </section>
            <section id="forEmpMobileSec2">
                <div className="row pt-5">
                    <div className="col-1"></div>
                    <div ref={div6Ref} className="col-2 ">
                        <img src={one} alt="num1" className='img-fluid listnum-img' />
                    </div>
                    <div className="col-1"></div>
                    <div ref={div7Ref} className="col-8">
                        <h6 className='primary-text'>We scout for ambitious graduates across different streams.</h6>
                    </div>
                    <div ref={div8Ref} className="col-12 text-center">
                        <img src={oneEmp} className='img-fluid' alt="emp one" />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-1"></div>
                    <div ref={div9Ref} className="col-2 ">
                        <img src={two} alt="num1" className='img-fluid listnum-img' />
                    </div>
                    <div className="col-1"></div>
                    <div ref={div10Ref} className="col-8">
                        <h6 className='primary-text'>Pre-assessment for technical skills and testing learnability of soft skills</h6>
                    </div>
                    <div ref={div11Ref} className="col-12 text-center">
                        <img src={twoEmp} className='img-fluid' alt="emp two" />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-1"></div>
                    <div ref={div12Ref} className="col-2 ">
                        <img src={three} alt="num1" className='img-fluid listnum-img' />
                    </div>
                    <div className="col-1"></div>
                    <div ref={div13Ref} className="col-8">
                        <h6 className='primary-text'>Before they join you, Smart Fellows ‘work’ as a core team member of an imaginary company for 50 hours</h6>
                    </div>
                    <div ref={div14Ref} className="col-12 text-center">
                        <img src={threeEmp} className='img-fluid' style={{ marginTop: '-30px' }} alt="emp two" />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-1"></div>
                    <div ref={div15Ref} className="col-2 ">
                        <img src={four} alt="num1" className='img-fluid listnum-img' />
                    </div>
                    <div className="col-1"></div>
                    <div ref={div16Ref} className="col-8">
                        <h6 className='primary-text'>Pre-assessment for technical skills and testing learnability of soft skills</h6>
                    </div>
                    <div ref={div17Ref} className="col-12 text-center mt-3">
                        <img src={fourEmp} className='img-fluid' alt="emp two" />
                    </div>
                </div>

            </section>
            <section className='forEmpSec3'>
                <div ref={div18Ref} className="row mt-5">
                    <div className="col-12 mt-5">
                        <p className='text-white text-center'>Smart Fellows won’t ask stupid questions. Instead, they come with superpowers that will Empower your business to thrive!</p>
                    </div>
                </div>
                <div ref={div19Ref} className="row my-5">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <img src={vector} className='img-fluid' alt="vector" />
                    </div>
                    <div className="col-8">
                        <h6 className='text-center text-white'>100+ Mental Models to solve almost any problem</h6>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div ref={div20Ref} className="row my-5">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <img src={bulb} className='img-fluid' alt="vector" />
                    </div>
                    <div className="col-8">
                        <h6 className='text-center text-white'>200+ Hacks to get work done</h6>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div ref={div21Ref} className="row ">
                    <div
                        className="col-12"
                        id="empMobileImgOne"
                        style={{ backgroundImage: `url(${empCenter})` }}>
                        <img src={innerText} alt="image" className='img-fluid emp-inner-circ' id="empMobileCircleTextimgInner" style={{ animation: "rotateCounterclockwise 10s linear infinite", }} />
                        <img src={outerText} alt="image" className='img-fluid emp-outer-circ' id="empMobileCircleTextimg" style={{ animation: "rotateCounterclockwise 10s linear infinite", }} />
                    </div>
                </div>
            </section>
            <section id="forEmpSec4" className='mt-5 pt-5'>
                <div className="row mt-5">
                    <div className="col-12">
                        <h6 ref={div22Ref} className='text-center text-white'>Storylines of the simulation are domain specific. </h6>
                        <p ref={div23Ref} className='text-center text-white'>Smart fellows adapt applications of non-technical skills to their specific domains.</p>
                    </div>
                </div>
            </section>
            <section id="forEmpSec5">
                <div ref={div24Ref} className="row my-5">
                    <Slider {...settings}>
                        <div className="col-md-12 ">
                            <img src={program1} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-12 ">
                            <img src={program2} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-12 ">
                            <img src={program3} alt="" className="img-fluid" />
                        </div>
                    </Slider>
                </div>
            </section>
            <section id="forEmpSecSix">
                <div ref={div25Ref} className="row my-5">
                    <div className="col-12">
                        <Slider {...testimonialSettings}>{allTestimonialSlides}</Slider>
                    </div>
                </div>
            </section>


            <section id="mobContactForm">
          <div className="row">
            <div className="pt-5 mt col-md-6">
                <ContactForm></ContactForm>
            </div>
          </div>
        </section>
        </Container>
    )
}

export default MobileForEmp