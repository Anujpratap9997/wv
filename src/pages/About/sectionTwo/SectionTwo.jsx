import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import "./aboutsection-two.css"
import aimIcon from '../../../assets/images/about/section-two/aim-icon.png'
import rocketIcon from '../../../assets/images/about/section-two/rocket-icon.png'
import evolution from '../../../assets/images/about/progress.svg'
import team from '../../../assets/images/about/section-two/team.svg'
// import aditya from '../../../assets/images/about/team/aditya.png'
import ncat from '../../../assets/images/about/team/ncat.svg'
import manish from '../../../assets/images/Our Team/Manish 1.svg';
import samyak from '../../../assets/images/Our Team/Samyak.svg';
import ayan from '../../../assets/images/Our Team/Ayan.svg';
import ruchika from '../../../assets/images/Our Team/Ruchika.svg';
import ashok from '../../../assets/images/Our Team/Ashok.svg';
import ritika from '../../../assets/images/Our Team/Ritika.svg';
import aditya from '../../../assets/images/Our Team/Aditya 4.svg';
import siya from '../../../assets/images/Our Team/Siya.svg';
import sylwin from '../../../assets/images/Our Team/Sylwin.svg';

import amit from '../../../assets/images/advisor/amit.svg';
import aparna from '../../../assets/images/advisor/aparna.svg';
import ashwani from '../../../assets/images/advisor/ashwani.svg';
import Lakshmi from '../../../assets/images/advisor/Lakshmi.svg';
import milind from '../../../assets/images/advisor/milind.svg';
import nikhil from '../../../assets/images/advisor/nikhil.svg';
import poonam from '../../../assets/images/advisor/poonam.svg';
import sandeep from '../../../assets/images/advisor/sandeep.svg';
import vivek from '../../../assets/images/advisor/vivek.svg';
import yashraj from '../../../assets/images/advisor/yashraj.svg';

import mukesh from '../../../assets/images/about/Testimonials/mukesh.svg'
import amisha from '../../../assets/images/about/Testimonials/amisha.svg'
import kashish from '../../../assets/images/about/Testimonials/kashish.svg'
import anubhav from '../../../assets/images/about/Testimonials/anubhav.svg'
import akhil from '../../../assets/images/about/Testimonials/akhil.svg'

import BackQuote from "../../../components/Testimonial/BackQuote";
// import "./Carousel.css";
// import Carousel from "./Carousel";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive'

function SectionTwo() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Your array of items to map
    const items2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Your array of items to map
    // const isMobile=useMediaQuery({
    //     query:'(max-width:900px)'
    //   })

    const isMobile=useMediaQuery({
        query:'(max-width:1200px)'
    });
    


    
  const testimonialSettings = {
    dots: false,
    infinite: true, // Enable infinite looping
    speed: 300, // Animation speed in milliseconds (adjust as needed)
    slidesToShow: isMobile?1:3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set autoplay speed (adjust as needed)
    cssEase: "linear",
    pauseOnHover: false,
  };

//   const testimonialCards = [1, 3, 4, 5, 6];
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
        <div className="card testimonial-card bg-dark mt-5" style={{ margin: isMobile ? "auto" : "" }}>
          <img src={item.img_src} className="testimonial-img" alt="" />
          <div className="card-inner">
            <BackQuote class="backquotes" />
            <p className="testimonial-card-text text-white ">
                {item.text}
            </p>
          </div>
          <div className="footer-text">
            <h5 className="text-white fw-light">{item.name}</h5>
            <p className="ts-text">{item.col_name}</p>
          </div>
        </div>
      </>
    </div>
  ));

  // Duplicate the slides to ensure a continuous loop
  const allTestimonialSlides = [...testimonialSlides, ...testimonialSlides];



    // Create an array of refs for each item
    const itemRefs = useRef(items.map(() => React.createRef()));
    const itemRefs2 = useRef(items2.map(() => React.createRef()));

    const ourTeam = [
        {
            img_src: manish,
            deg_name: "Director",
            exp_text: "6 Years Experience as a Lead Designer Leader for Change"
        },
        {
            img_src: samyak,
            deg_name: "Managing Director",
            exp_text: "6 Years Experience as a Lead Designer Leader for Change"
        },
        {
            img_src: ayan,
            deg_name: "Chief Operations Architect",
            exp_text: "6 Years Experience as a Lead Designer Leader for Change"
        },
        {
            img_src: ruchika,
            deg_name: "Chief Operations Architect",
            exp_text: "6 Years Experience as a Lead Designer Leader for Change"
        },
        {
            img_src: ashok,
            deg_name: "Trainer & Content Architect",
            exp_text: "6 Years Experience as a Lead Designer Leader for Change"
        },
        {
            img_src: ritika,
            deg_name: "Program Manager",
            exp_text: "6 Years Experience as a Lead Designer Leader for Change"
        },
        {
            img_src: aditya,
            deg_name: "Curriculum Design Architect",
            exp_text: "6 Years Experience as a Lead Designer Leader for Change"
        },
        {
            img_src: siya,
            deg_name: "Creative Generalist",
            exp_text: "6 Years Experience as a Lead Designer Leader for Change"
        },
        {
            img_src: sylwin,
            deg_name: "Visual Architect",
            exp_text: "6 Years Experience as a Lead Designer Leader for Change"
        },
    ]
    

    const ourAdvisor = [
        {
            img_src: amit,
            deg_name: "Trainer & Content Architect",

        },
        {
            img_src: aparna,
            deg_name: "Trainer & Content Architect",

        },
        {
            img_src: ashwani,
            deg_name: "Trainer & Content Architect",

        },
        {
            img_src: Lakshmi,
            deg_name: "Trainer & Content Architect",

        },
        {
            img_src: milind,
            deg_name: "Trainer & Content Architect",

        },
        {
            img_src: nikhil,
            deg_name: "Trainer & Content Architect",

        },
        {
            img_src: poonam,
            deg_name: "Trainer & Content Architect",

        },
        {
            img_src: sandeep,
            deg_name: "Trainer & Content Architect",

        },
        {
            img_src: yashraj,
            deg_name: "Trainer & Content Architect",

        },
    ]

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



    useEffect(() => {

        itemRefs.current.forEach((ref) => {
            gsap.fromTo(
                ref.current,
                { opacity: 0, y: 250 }, // Initial state
                {
                    opacity: 1,
                    y: 0,
                    duration: 1, // Animation duration
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top bottom', // When to trigger the animation (80% from the top of the viewport)
                        end: 'bottom 50%',
                        srub: true,
                    },
                }
            );
        });


        itemRefs2.current.forEach((ref2) => {
            gsap.fromTo(
                ref2.current,
                { opacity: 0, y: 250 }, // Initial state
                {
                    opacity: 1,
                    y: 0,
                    duration: 1, // Animation duration
                    scrollTrigger: {
                        trigger: ref2.current,
                        start: 'top bottom', // When to trigger the animation (80% from the top of the viewport)
                        end: 'bottom 50%',
                        srub: true,
                    },
                }
            );
        });




        const div1 = div1Ref.current
        const div2 = div2Ref.current
        const div3 = div3Ref.current
        const div4 = div4Ref.current

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


        gsap.fromTo(div1, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div1,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })


        gsap.fromTo(div2, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div2,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })


        gsap.fromTo(div3, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div3,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })



        gsap.fromTo(div4, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div4,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })



        gsap.fromTo(div5, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div5,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })



        gsap.fromTo(div6, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div6,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })



        gsap.fromTo(div7, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div7,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })



        gsap.fromTo(div8, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div8,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })



        gsap.fromTo(div9, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div9,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })



        gsap.fromTo(div10, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div10,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })



        gsap.fromTo(div11, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div11,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })


        gsap.fromTo(div12, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div12,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })


        gsap.fromTo(div13, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div13,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })


        gsap.fromTo(div14, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div14,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })


        gsap.fromTo(div15, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div15,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })


        gsap.fromTo(div16, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div16,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })


        // gsap.fromTo(div16,{
        //     opacity:0,
        //     y:100,
        // },{
        //     scrollTrigger:{
        //         trigger:div16,
        //         start:"top bottom",
        //         end:"bottom 50%"
        //     },
        //     stagger:1,
        //     y:0,
        //     delay:1,
        //     scale:1,
        //     duration:2,
        //     opacity:1,
        //     ease:"power2.out"
        // })


        gsap.fromTo(div17, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div17,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })


        gsap.fromTo(div18, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div18,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
        })












    }, [])

    return (
        <Container>
            <section id="whatWeAre">

                <div ref={div1Ref} className="row">
                    <div className="col-12 mt-5">
                        <h1 className='text-center  primary-text'>What we are</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <h1 className='text-center text-white fw-light'>Workverse is a virtual workplace environment where graduates master 21st century soft skills and contextualize their innate intelligence for applications at work.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ourMission">
                <div className="row">

                    <div ref={div2Ref} className="col-md-6 pt-5 col-lg-12 text-center">
                        <img src={aimIcon} alt="Aim" className='img-fluid pt-4 mb-2' />
                    </div>
                    <div ref={div3Ref} className="col-12">
                        <h1 className='text-center primary-text'>Our Mission</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h3 className='text-center text-white fw-light'>
                                    To ensure every graduate has the necessary exposure to train themselves to start thinking where A.I stops</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section id="ourVission">
                <div className="row">
                    <div ref={div4Ref} className="col-md-12 col-lg-12 pt-5 text-center">
                        <img src={rocketIcon} alt="Vission Icon" className='img-fluid ' />
                    </div>
                    <div ref={div5Ref} className="col-12 pt-3">
                        <h1 className='text-center primary-text'>Our Vision</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-6 pb-5">
                                <h3 className='text-center text-white fw-light'>
                                    To build future ready smart generalists for the 5th industrial revolution</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ourPurpose">
                <div className="row">
                    {/* TODO : may be images will be there */}
                    {/* <div className="col-md-12 col-lg-12 text-center">
                    <img src={rocketIcon} alt="Vission Icon" className='img-fluid p-5' />
                </div> */}
                    <div className="col-12 pt-5">
                        <h1 ref={div6Ref} className='text-center primary-text'>Our Purpose</h1>
                        <div ref={div7Ref} className="row justify-content-center">
                            <div className="col-md-10">
                                <h3 className='text-center text-white fw-light'>
                                    The popular perception is that education is about ‘attaining knowledge’ and an intelligent person therefore means who can meticulously apply that information to draw conclusions. With the emergence of artificial intelligence, the value of knowledge driven intelligence has declined. The new world of work will need professionals who can solve, create & communicate in ‘uncertainty’ and at the intersection of emotions, purpose/motivator and personalized context.
                                </h3>
                            </div>
                        </div>
                        <div ref={div8Ref} className="row pt-5 justify-content-center">
                            <div className="col-md-10">
                                <h3 className='text-center text-white fw-light'>However our conventional education system does not train human brains to remain ‘Smarter’ than A.I.  <span className='primary-text fw-bold'>That's why we exist!</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ourEvolution">
                <div className="row pt-5">
                    <div ref={div9Ref} className="col-md-12">
                        <h1 className='text-center p-md-5 primary-text'>Our Evolution</h1>
                    </div>
                    <div ref={div10Ref} className="col-md-12 text-center">
                        <img src={evolution} className="img-fluid" alt="workverse " />
                    </div>
                </div>
            </section>
            <section id="ourEvolution">
                <div className="row">
                    <div ref={div11Ref} className="col-md-12">
                        <h1 className='text-center p-md-5  primary-text'>Our Impact</h1>
                    </div>
                </div>
                <div className="row">
                    <div ref={div12Ref} className="col-md-4 text-center mt-3">
                        <h3 className='impact-text'><b>1,000,000+</b></h3>
                        <h3 className='text-white fw-light glowyText'>Learners</h3>
                    </div>
                    <div ref={div13Ref} className="col-md-4 text-center mt-3">
                        <h3 className='impact-text'><b>40+</b></h3>
                        <h3 className='text-white fw-light glowyText'>Partner Institutions</h3>
                    </div>
                    <div ref={div14Ref} className="col-md-4 text-center mt-3">
                        <h3 className='impact-text'><b>85%</b></h3>
                        <h3 className='text-white fw-light glowyText'>Placement Preference</h3>
                    </div>
                </div>
            </section>
            <section id="ourTeam">
                <div className="row pt-5">
                    <div ref={div15Ref} className="col-md-12">
                        <h1 className='text-center p-md-5  primary-text'>Our Team</h1>
                    </div>
                </div>
                <div className="row">
                    {ourTeam.map((item, index) => (
                        <div key={index} ref={itemRefs.current[index]} className="col-md-3 text-center">
                            <div className="team-card text-center">
                                <img src={item.img_src} alt="Team" className='team-img img-fluid' />
                                <div className="team-details">
                                    <p className='team-degnation-text'>{item.deg_name}</p>
                                    <p className='team-exp-text'><i>{item.exp_text}</i></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            <section id="ourInvestor">
                <div ref={div16Ref} className="row pt-5">
                    <div className="col-md-12">
                        <h1 className='text-center p-md-5  primary-text'>Our Investor</h1>
                    </div>
                </div>
                <div ref={div17Ref} className="row justify-content-center">

                    <div className="col-md-4 text-center">
                        <img src={ncat} alt="Team" className='team-img img-fluid' />
                    </div>

                </div>
            </section>
            <section id="ourAdvisoryBoard">
                <div ref={div18Ref} className="row pt-5">
                    <div className="col-md-12">
                        <h1 className='text-center p-md-5 primary-text'>Our Advisory Board</h1>
                    </div>
                </div>
                <div className="row">
                    {ourAdvisor.map((item, index) => (
                        <div key={index} ref={itemRefs2.current[index]} className="col-md-3 text-center">
                            <div className="team-card text-center my-5">
                                <img src={item.img_src} alt="Team" className='team-img1 img-fluid' />
                                <div className="team-details">
                                    <p className='team-degnation-text py-2'>{item.deg_name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

               
            </section>


        {/* Testimonials  */}
        <section className="sec">
          <div className="row">
            <Slider {...testimonialSettings}>{allTestimonialSlides}</Slider>
          </div>
        </section>


        </Container>
    )
}

export default SectionTwo