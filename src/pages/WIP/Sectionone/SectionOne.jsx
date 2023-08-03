import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'reactstrap'

import wipProfile from '../../../assets/images/wip/wip-profile.svg'
import wipHIW from '../../../assets/images/wip/wip-how-it-works.svg'
import wipWhy from '../../../assets/images/wip/wip-why.svg'
import wipContext1 from '../../../assets/images/wip/wip-context-1.svg'
import wipContext2 from '../../../assets/images/wip/wip-context-2.svg'

import wipslide1 from '../../../assets/images/wip/WIP 3.svg'
import wipslide2 from '../../../assets/images/wip/wipslide2.svg'

import wipslide3 from '../../../assets/images/wip/wipslide3.svg'

import '../Sectionone/wip-sectionOne.css'

import Slider from "react-slick";

import Qoute from '../../../components/Quote'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SectionOne() {

    const scannerRef = useRef(null);
    // let isGoingRight = true;

    useEffect(() => {
        const scanner = scannerRef.current;
        const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0 });
        let isGoing = true;
        tl.fromTo(
            scanner,
            { x: "-70%" },
            { x: "3310%", duration: 6, ease: 'power1.inOut', },
        );




        // Optionally, add any other animations or effects you want
        //   tl.to(scanner, { opacity: 0, duration: 0.1 });

        return () => {
            tl.kill(); // Kill the timeline on unmount to prevent memory leaks
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4500,
        cssEase:"linear",
        centerMode: true,
        pauseOnHover: true,
        
      };


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
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });


        gsap.fromTo(div2, {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5,
        });

        gsap.fromTo(div3, {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: 1,
        });

        gsap.fromTo(div4, {
            scale: 0,
            opacity: 0,
        }, {
            delay: 1.5,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div5, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div5,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div6, {

            // y: "0%",
            scale:2.5,
            opacity: 0, // Starting positio (e.g., no horizontal movement)
          }, {
            scrollTrigger: {
                trigger: div6,
                start: "top bottom", // Set the start point of the animation trigger
                end: "bottom top", // Set the end point of the animation trigger
                scrub: true, // Enable scrubbing for smooth animation
                // pin: true,
              },
            // x: "100%",
            // y: "100%",
            opacity: 1,
            duration: 1,
            scale:1,
            ease: "power2.out",
        });

        gsap.fromTo(div7, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div7,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div8, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div8,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div9, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div9,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div10, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div10,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div11, {

            // y: "0%",
            scale:2.5,
            opacity: 0, // Starting positio (e.g., no horizontal movement)
          }, {
            scrollTrigger: {
                trigger: div11,
                start: "top bottom", // Set the start point of the animation trigger
                end: "bottom top", // Set the end point of the animation trigger
                scrub: true, // Enable scrubbing for smooth animation
                // pin: true,
              },
            // x: "100%",
            // y: "100%",
            opacity: 1,
            duration: 1,
            scale:1,
            ease: "power2.out",
        });

        gsap.fromTo(div12, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div12,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div13, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div13,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div14, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div14,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div15, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div15,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div16, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div16,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div17, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div17,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div18, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div18,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div19, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div19,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div20, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div20,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div21, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div21,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div22, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div22,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div23, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div23,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div24, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div24,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.fromTo(div25, {
            scale: 0,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: div25,
                start: "top 110%",
                end: "bottom 50%",
                scrub: true,
            },
            // x: "100%",
            // y: "100%",
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
        });



    }, [])



    return (
        <Container fluid="sm" className='px-0'>
            {/* wip intro  */}
            <section className='wip-sec' id='wipHeader'>
                <div ref={div1Ref} className="row mt-5 pt-4 justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6  ">
                        <h1 className='primary-text text-center fw-bold'>Workplace Intelligence Profile</h1>
                    </div>
                </div>
                <div ref={div2Ref} className="row justify-content-center">
                    <div className="col-md-4">
                        <h4 className='text-white text-center fw-light'>The certification that really matters!?</h4>
                    </div>
                </div>
                <div ref={div3Ref} className="row mt-md-5 justify-content-center">
                    <Slider {...settings}>
                        <div className="col-md-12 ">
                            <img src={wipslide1} className='img-fluid wip-slide-img' alt="" />
                        </div>
                        <div className="col-md-12 ">
                            <img src={wipslide2} className='img-fluid wip-slide-img' alt="" />
                        </div>
                        <div className="col-md-12 ">
                            <img src={wipslide3} className='img-fluid wip-slide-img' alt="" />
                        </div>

                    </Slider>

                </div>
            </section>

            {/* what section  */}

            <section className='wip-sec' id='wipWhat'>
                <div ref={div4Ref} className="row mt-2 mt-md-5 mb-0 my-md-5
             py-4 justify-content-center text-center">
                    <div className="col-md-9">
                        <h3 className="text-white fw-light">
                            In the world of work where a candidate's 'smartness' matters as much as their knowledge, how does one really get an insight into
                        </h3>
                        <h3 className='primary-text fw-bold'>How they think, solve & communicate? </h3>
                    </div>
                </div>
                <div ref={div5Ref} className="row justify-content-center text-center ">
                    <div className="col-md-9">
                        <h3 className='mb-1 mb-md-5 pb-4 text-white fw-light'>
                            The Workplace Intelligence Profile (WIP) provides an understanding of how a candidate applies the 9 superpower soft skills in a diverse range of workplace situations in the context of their domain.
                        </h3>
                        <h3 className='mb-1 mb-md-5 text-white fw-light'>
                            WIP gives a hiring advantage to candidates and employers both since they have research-backed insights that let the brightest talent stand out.
                        </h3>
                    </div>
                </div>
            </section>

            {/* How it works section  */}

            <section className='wip-sec' id='wipHow'>
                <div ref={div6Ref} className="row mt-5 mt-md-5 pt-1 pt-md-5 justify-content-center text-center">
                    <div className="col-md-12">
                        <h1 className="primary-text fw-bold">How it Works!</h1>
                    </div>
                </div>


                {/* <div ref={div7Ref} className="row my-0 my-md-5 py-5">
                <div className="col-md-12">
                    <img src={wipHIW} className='img-fluid' alt="" />
                </div>
            </div> */}


                <div ref={div7Ref} className="row py-5">
                    <div className="col-md-12">
                        {/* <img src={wipHIW} className='img-fluid' alt="" /> */}
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                            <img src={wipHIW} className='img-fluid' alt="" />
                            <div
                                ref={scannerRef}
                                style={{
                                    width: '3%',
                                    height: '100%',
                                    background: '#07EDC4', // Customize the scanning line appearance
                                    position: 'absolute',
                                    bottom: '0',
                                    // border: "2px solid black",
                                    // borderRadius:"5px",
                                    boxShadow: "0px 0 100px #07EDC4",

                                }}

                            />
                        </div>
                    </div>
                </div>


                <div className="row justify-content-center text-center">
                    <div className="col-md-9">
                        <h3 ref={div8Ref} className="text-white fw-light mb-4  mb-md-5 py-md-5">
                            The SMART fellowship puts learners in the center of 100+ real life workplace scenarios including solving complex problems, applying 'common sense', collaborating with multiple stakeholders, communicating effectively through different mediums, and using the required tools to be tech-savvy.
                        </h3>
                        <h3 ref={div9Ref} className="text-white fw-light">
                            Each learner's behavior is closely monitored based on our research-backed assessment matrix.
                        </h3>
                        <h3 ref={div10Ref} className="text-white fw-light  my-4 my-md-5 py-5">
                            Once learners meet the benchmark to become Smart Fellows, we leverage their WIP to enable job access in aspirational & meaningful roles.
                        </h3>
                    </div>
                </div>

            </section>

            {/* Why section  */}

            <section className='wip-sec' id='wipWhy'>
                <div ref={div11Ref} className="row justify-content-center text-center py-md-5">
                    <div className="col-md-9">
                        <h1 className="primary-text fw-bold">Why does this Work</h1>
                    </div>
                </div>
                <div ref={div12Ref} className="row justify-content-center pt-4">
                    <div className="col-md-12">
                        <h3 className="primary-text fw-bold">Accuracy</h3>
                    </div>
                </div>
                <div ref={div13Ref} className="row justify-content-center">
                    <div className="col-md-12">
                        <h3 className="text-white fw-light">
                            Between scanning resumes and taking interviews, recruiters get to interact with a candidate during a short window of only 30-60 minutes.
                        </h3>
                    </div>
                </div>
                <div ref={div14Ref} className="row justify-content-center py-4 py-md-5">
                    <div className="col-md-12">
                        <h3 className="text-white fw-light">
                            This is not enough to get a true insight into how they would contextualize and apply their innate intelligence for delivering outcomes at work.
                        </h3>
                    </div>
                </div>
                <div ref={div15Ref} className="row justify-content-center text-center">
                    <div className="col-md-12">
                        <img src={wipWhy} alt="" className="img-fluid" />
                    </div>
                </div>
                <div ref={div16Ref} className="row justify-content-center my-md-5 py-3 my-md-3">
                    <div className="col-md-12">
                        <h3 className="text-white fw-light">
                            Whereas, The inputs in our WIP are based on the learner's behavior for 50+ hours and across 100+ use cases.
                        </h3>
                    </div>
                </div>

            </section>



            <section className='wip-sec' id='wipContext'>
                <div ref={div17Ref} className="row justify-content-center pt-4">
                    <div className="col-md-12">
                        <h3 className="primary-text fw-bold">Context</h3>
                    </div>
                </div>
                <div ref={div18Ref} className="row justify-content-center mb-md-5">
                    <div className="col-md-12">
                        <h3 className="text-white fw-light">
                            Standard psychometrics do not help conclude on how a candidate would apply their generalist intelligence / soft skills in the context of India specific, inter-connected & multi-layered workplace scenarios.
                        </h3>
                    </div>
                </div>
                <div ref={div19Ref} className="row justify-content-center text-center my-2 my-md-5">
                    <div className="col-md-10">
                        <img src={wipContext1} alt="" className="img-fluid" />
                    </div>
                </div>
                <div ref={div20Ref} className="row align-items-center  mb-5 py-md-5">
                    <div className="col-md-8 p-4">
                        <h3 className="text-white fw-light">
                            Our assessment metric is designed to observe the cause effect of a learner's actions, reactions & decisions to give a more qualitative insight into their behaviors, attitudes & approaches at work.
                        </h3>
                    </div>
                    <div ref={div21Ref} className="col-md-4">
                        <img src={wipContext2} alt="" className="img-fluid" />
                    </div>
                </div>

            </section>

            <section id="wipScience">
                <div ref={div22Ref} className="row justify-content-center pt-4">
                    <div className="col-md-12">
                        <h3 className="primary-text fw-bold">Science</h3>
                    </div>
                </div>

                <div ref={div23Ref} className="row justify-content-end justify-content-md-start">
                    <div className=" col-md-10 pt-5">
                        <div className="science-card p-5">
                            <Qoute />
                            <h3 className='text-white fw-light px-3 py-3 science-card-text'>Simulated learning experiences allow learners to explore complex and challenging scenarios that may be difficult to replicate in traditional learning environments. They promote critical thinking, problem-solving, and decision-making skills by providing a platform for learners to analyze, synthesize, and apply knowledge in a realistic context. </h3>
                            <p className='text-white py-3 fw-bold text-start text-md-end'><i>Excerpt taken from research conducted by <br/>Cook, D. A., & Triola, M. M. (2009)</i></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6"></div>
                        <div className="col-12 col-md-4">
                            {/* <p className='text-white py-3 fw-bold '><i className='text-le'>Excerpt taken from research conducted by Cook, D. A., & Triola, M. M. (2009)</i></p> */}
                        </div>
                    </div>
                </div>

                <div ref={div24Ref} className="row justify-content-end jus">
                    <div className="col-md-10 pt-5">
                        <div className="science-card p-5">
                            <Qoute />
                            <h3 className='text-white fw-light px-3 py-3 science-card-text'>Behavioral analysis enables employers to evaluate candidates' problem-solving abilities, interpersonal skills, and adaptability, which are crucial for success in dynamic and changing work environments. By assessing candidates' past behaviors, employers can identify those who have demonstrated the desired competencies and are more likely to excel in challenging situations. </h3>
                            <p className='text-white py-3 fw-bold text-start text-md-end'><i>Hurtz, G. M., & Donovan, J. J. (2000).
                                <br />
                                Personality and job performance: The Big Five revisited. Journal of Applied Psychology
                            </i></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4"></div>
                        <div className="col-12 col-md-8">
                            {/* <p className='text-white py-3 fw-bold text-start text-md-end'><i>Hurtz, G. M., & Donovan, J. J. (2000).
                                <br />
                                Personality and job performance: The Big Five revisited. Journal of Applied Psychology
                            </i></p> */}
                        </div>
                    </div>
                </div>

            </section>

        </Container>
    )
}

export default SectionOne