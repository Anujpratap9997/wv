import React, { useEffect, useState, useRef } from "react";
import { Container } from "reactstrap";
import "./SectionThree.css";
import { useMediaQuery } from "react-responsive";

import bg_grid from "../../../assets/images/grid-floor.svg";
import computer from "../../../assets/images/computer.svg";
import door from "../../../assets/images/office-door.svg";
import Desk from "../../../assets/images/Desk.svg";
import Text from "../../../assets/images/Text.svg";
import Groupx from "../../../assets/images/Groupx.svg";
import MC from "../../../assets/images/MC.svg";

import EN from "../../../assets/images/EN.svg";

import car from "../../../assets/images/car.svg";

import bosses from "../../../assets/images/section-three/bosses.svg";
import clients from "../../../assets/images/section-three/clients.svg";
import vendors from "../../../assets/images/section-three/vendors.svg";
import customers from "../../../assets/images/section-three/customers.svg";
import crisis from "../../../assets/images/section-three/managecrisis.svg";
import negotiate from "../../../assets/images/section-three/negotiate-deals.svg";
import masterclass from "../../../assets/images/section-three/masterclass.svg";
import slack from "../../../assets/images/section-three/slack.svg";
import workspace from "../../../assets/images/section-three/workspace.svg";
import wip from "../../../assets/images/section-three/WIPExport.svg";
import office from "../../../assets/images/section-three/office.svg";

import Logo from "../../../components/Logo/Logo";
import { gsap } from "gsap";
import MobileSectionThree from "../SectionThree/MobileSectionThreee";

function SectionThree() {
  const envelopeRef = useRef(null);
  const isMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });
  if (isMobile) {
    return <MobileSectionThree />;
  }

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".container-main",

      start: "top top",
      end: "top center",
      toggleClass: { targets: ".letter", className: "open" },
      // markers: true,
      endTrigger: ".computer",
      // end: () => `+=${section.clientHeight + 30}`,
      // toggleActions: 'play reverse none reverse',
    });


    const animationDuration = 3;

    // gsap.set([".slack, .workspace, .group"], { opacity: 0 });

    gsap.from(".door", {
        scrollTrigger: {
            trigger: ".door",
            start: "bottom bottom",
            toggleActions: "play none none none",
            onComplete: () => {
                // Animation complete, show the row div
                gsap.to(".door", { opacity: 0, duration: 0.2 });
                // gsap.set(".row", { opacity: 1 });

                gsap.from(".slack", {
                  scrollTrigger: {
                    trigger: ".door",
                    start: "bottom bottom",
                    toggleActions: "play none none none",
                    delay: 2, // Add a delay of 12 seconds before the animation starts
                  },
                  y: "80%",
                  opacity: 1, // Animate opacity from 0 to 1
                  duration: 6, // Replace "animationDuration" with your desired duration
                });
            },
            
            
        },
        y: "80%",
        opacity: 0,
        duration: animationDuration,
    });
    
    gsap.from(".right-panel", {
        scrollTrigger: {
            trigger: ".right-panel",
            start: "left left",
            toggleActions: "play none none none",
        },
        x: "-30%",
        opacity: 0,
        duration: animationDuration,
    });
    
    gsap.set(".computer-text, .computer-text1, .computer-text2, .computer-text3, .mc, .car, .computer-text4, .slack, .group, .workspace", { autoAlpha: 0 });

    // Animate computer-text
    gsap.fromTo(
      ".computer-text",
      {
        y: "100%",
      },
      {
        scrollTrigger: {
          trigger: ".computer-text",
          start: "bottom bottom",
          toggleActions: "play none none none",
        },
        y: 0,
        autoAlpha: 1,
        duration: 3,
        onComplete: () => {
          gsap.set([".computer-text", ".door"], { opacity: 0,
            duration: 1,
            delay: 1,  });
           
          // Animate computer-text and add delay before the animation starts
          gsap.fromTo(
            [".computer-text1, .slack, .workspace"],
            {
              y: "100%",
            },
            {
              scrollTrigger: {
                trigger: ".computer-text",
                start: "bottom bottom",
                toggleActions: "play none none none",
              },
              y: 0,
              autoAlpha: 1,
              duration: 3,
              delay: 1, // Add a delay of 1 second before the animation starts
              onComplete: () => {
                gsap.set([".computer-text1, .slack, .workspace "], { opacity: 0,
                  duration: 3,
                  delay: 1,  });
                // Animate computer-text2 and add delay before the animation starts
                gsap.fromTo(
                  [".computer-text2, .group"],
                  {
                    y: "100%",
                  },
                  {
                    scrollTrigger: {
                      trigger: ".computer-text",
                      start: "bottom bottom",
                      toggleActions: "play none none none",
                    },
                    y: 0,
                    autoAlpha: 1,
                    duration: 3,
                    delay: 1, // Add a delay of 1 second before the animation starts

                    onComplete: () => {
                      gsap.set([".computer-text2, .group"], { opacity: 0,
                        duration: 1,
                        delay: 1,  });
                      // Animate computer-text2 and add delay before the animation starts
                      gsap.fromTo(
                        [".computer-text3, .mc"],
                        {
                          y: "100%",
                        },
                        {
                          scrollTrigger: {
                            trigger: ".computer-text",
                            start: "bottom bottom",
                            toggleActions: "play none none none",
                          },
                          y: 0,
                          autoAlpha: 1,
                          duration: 3,
                          delay: 1, // Add a delay of 1 second before the animation starts

                          onComplete: () => {
                            gsap.set([".computer-text3, .mc"], { opacity: 0,
                              duration: 1,
                              delay: 1,  });
                            // Animate computer-text2 and add delay before the animation starts
                            gsap.fromTo(
                              [".computer-text4, .car"],
                              {
                                y: "100%",
                              },
                              {
                                scrollTrigger: {
                                  trigger: ".computer-text",
                                  start: "bottom bottom",
                                  toggleActions: "play none none none",
                                },
                                y: 0,
                                autoAlpha: 1,
                                duration: 3,
                                delay: 1, // Add a delay of 1 second before the animation starts
                              }
                            );
                          },
                        }
                      );
                    },
                  }
                );
              },
            }
          );
        },
      }
    );


    // gsap.fromTo(
    //   [".slack, .workspace"],
    //   {
    //     y: "100%",
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: ".door",
    //       start: "bottom bottom",
    //       toggleActions: "play none none none",
    //     },
    //     y: 0,
    //     autoAlpha: 1,
    //     duration: 3,
    //     delay: 3,
        
    //     onComplete: () => {
    //       gsap.set([".slack", ".workspace"], { opacity: 0,
    //         duration: 1,
    //         delay: 1,  });
           
    //       // Animate computer-text and add delay before the animation starts
    //       gsap.fromTo(
    //         ".group",
    //         {
    //           y: "100%",
    //         },
    //         {
    //           scrollTrigger: {
    //             trigger: ".group",
    //             start: "bottom bottom",
    //             toggleActions: "play none none none",
    //           },
    //           y: 0,
    //           autoAlpha: 1,
    //           duration: 3,
    //           delay: 1, // Add a delay of 1 second before the animation starts
    //           onComplete: () => {
    //             gsap.set(".group", { opacity: 0,
    //               duration: 3,
    //               delay: 1,  });
    //             // Animate computer-text2 and add delay before the animation starts
    //             gsap.fromTo(
    //               ".computer-text2",
    //               {
    //                 y: "100%",
    //               },
    //               {
    //                 scrollTrigger: {
    //                   trigger: ".computer-text2",
    //                   start: "bottom bottom",
    //                   toggleActions: "play none none none",
    //                 },
    //                 y: 0,
    //                 autoAlpha: 1,
    //                 duration: 3,
    //                 delay: 1, // Add a delay of 1 second before the animation starts

    //                 onComplete: () => {
    //                   gsap.set(".computer-text2", { opacity: 0,
    //                     duration: 1,
    //                     delay: 1,  });
    //                   // Animate computer-text2 and add delay before the animation starts
    //                   gsap.fromTo(
    //                     ".computer-text3",
    //                     {
    //                       y: "100%",
    //                     },
    //                     {
    //                       scrollTrigger: {
    //                         trigger: ".computer-text3",
    //                         start: "bottom bottom",
    //                         toggleActions: "play none none none",
    //                       },
    //                       y: 0,
    //                       autoAlpha: 1,
    //                       duration: 3,
    //                       delay: 1, // Add a delay of 1 second before the animation starts
    //                     }
    //                   );
    //                 },
    //               }
    //             );
    //           },
    //         }
    //       );
    //     },
    //   }
    // );

    // Set "slack" to be invisible initially

// gsap.from(".slack", {
//   scrollTrigger: {
//     trigger: ".door",
//     start: "bottom bottom",
//     toggleActions: "play none none none",
//     delay: 12, // Add a delay of 4 seconds before the animation starts
//   },
//   y: "80%",
//   opacity: 1, // Animate opacity from 0 to 1
//   duration: 6 // Replace "animationDuration" with your desired duration
// });
    
    
    // Animation for "slack" and "workspace" to slide down and fade out with "text2"

   

    // gsap.set(".computer-text1", { opacity: 0 });
    // gsap.set(".row", { opacity: 0 });
    // gsap.set(".computer-text2", { opacity: 0 });


  });

  return (
    <section className="homepag-section-thee">
      {/* section 3 start  */}

      {/* <Container className='homepage-section-three'>
           <div className='p-5 mt-5'>
               <div className='container-fluid p-5 mt-5'>
                   <h1 className='text-center heading-text-section-three mb-5'>Activate your 
                   <span className='highlight-heading'> Workplace Intelligence </span>
                    by doing
                   </h1>
                    <h3 className='text-center p-5 m-5 heading-text-section-three-default'>
                    <span className='heading-text-section-three'>The smart fellowship</span> is a workplace simulation based program <br/>
                    where we train your brain to apply 9 soft skills which are now 'must  <br/>
                    haves' for entry level candidates. They empower you to what a.i  <br/>
                    cannot (at least for the next 15 years!) 

                    </h3>
                    <h3 className='text-center heading-text-section-three pt-1'>48 hours | 6 weeks | Weekends only</h3>
               </div>
           </div>
       </Container> */}

      {/* Section 3  scroll 0 window */}

      <div className="container-main">
        

        <div className="floor-container scroll-5-hide"></div>
        <div className="door scroll-5-hide" >
        <div style={{ position: "relative" }}>
  <img src={EN} alt="" style={{ position: "relative", zIndex: 1 }} />
  <img src={Text} alt="" style={{ position: "absolute", top: 0, left: 0, zIndex: 0, marginTop:'-50%'}} />
</div>
        </div>

        {/* div at center  */}
        <div className="rect-floor scroll-5-hide"></div>

        {/* rect div below computer */}
        <div className="rect-desk">
        <img src={Desk} style={{width:'100%'}}alt="" />
        </div>

        <div className="computer">
          <img src={computer} alt="" />
        </div>

        {/* On scroll 0  */}
        {/* <div className='envelope-section' ref={el = envelopeRef => el}>
                <div id='wrap'>
                <div class='fold-top'></div>
                <div class='envelope'>
                    <div class='fold-right'></div>
                    <div class='fold-left'></div>
                    <div class='letter p-3 px-5'>
                        <p className='text-center mb-4'>
                            <strong><h3>Offer Letter</h3></strong>
                        </p>
                        <p>Congratulations!</p>
                        <div className='horizontal-line'></div>
                        <p>You are Core Team Member</p>
                        <div className='horizontal-line'></div>

                    </div>
                </div>
                </div>
          
            </div>

            <div className='computer-text text-center'>
                During this program, you roleplay as a core team member at an imaginary company. Face tasks and challenges on the way to achieving your company's goals. How you solve them is completely up to you and your colleagues (your batchmates)!
            </div> */}

        {/* On scroll 1  */}

        {/* <div>
                <div className='bosses'>
                    <img src={bosses} alt="" />
                </div>
                <div className='clients'>
                    <img src={clients} alt="" />
                </div>
                <div className='vendors'>
                    <img src={vendors} alt="" />
                </div>
                <div className='customers'>
                    <img src={customers} alt="" />
                </div>
                <div className='computer-text text-center'>
                    Learn how to get things done from all types of people at work as you engage with unique characters. From day 1, you will navigate conflicts with your colleagues, manage multiple stakeholders at the same time and create communication that can win over anyone.
                </div>
            </div> */}

        {/* on scroll 2 */}

        <div className="">
          <div className="row">
            <div className="col-6 offset-1 justify-content-start slack" style={{marginTop:'-10%', marginLeft:'40%'}}>
              <div className="slack">
              <img src={slack} alt="" />
              </div>
            </div>
            <div className="col-6 offset-6 workspace" style={{marginTop:'2%', marginLeft:'52%'}}>
              <div className="workspace">
              <img src={workspace} alt="" />
              </div>
            </div>
            <div className="group" style={{marginTop:'-20%', marginLeft:'20%'}}>
              <img src={Groupx} alt="" />
              </div>
              <div className="mc" style={{marginTop:'-20%', marginLeft:'10%',}}>
                <div className="computer-hh" style={{}}>
                  MASTERCLASS
                </div>
              <img src={MC} alt="" />
              </div>

              <div className="car" style={{marginTop:'-20%', marginLeft:'10%',}}>
              <img src={car} alt="" />
              </div>
          </div>

          
          <div className="computer-text text-center" style={{marginTop:'100px'}}>
          During the program, you and your batchmates roleplay as core team members in an imaginary company. You master 9 soft skills by using them to tackle 100+ business scenarios on behalf of this kompany. Along the way you learn mental models, workplace, hacks & principles that lead to success in the real world of work.
          </div>
          <div className="computer-text1 text-center">
          Through the storyline of this imaginary company you get to collaborate with unique personalities. Whether it's resolving conflicts, getting work done by tough associates or managing multiple stakeholders - you'll become a pro at the art of people management.
          </div>
          <div className="computer-text2 text-center">
          To create solutions outside of theoretical knowledge and become unstoppable in the real world, you must adapt to changing scenarios. You learn this through making emotive business pitches, building innovative solutions, negotiating deals and managing crisis situations in the simulation.
          </div>
          <div className="computer-text3 text-center">
          Attend masterclasses with accomplished professionals from the real world of work who will share their wisdom. You will also have access to 50+ hours of proprietary content derived from the experiences of 1000+ successful professionals
          </div>

          <div className="computer-text4 text-center">
          Big boss is always watching! We observe your approach in various scenarios to generate your 'Workplace Intelligence Profile'. Employers now prefer such unique insights about candidates - giving you a unique edge over competitors with just standard degrees and certifications to show!
          </div>
        </div>

        {/* <div className=''>
                <div className='slack'>
                    <img src={slack} alt="" />
                </div>
                <div className='workspace'>
                    <img src={workspace} alt="" />
                </div>
                <div className='computer-text text-center'>
                     Make a winning pitch, negotiate a tough deal, manage a seemingly impossible crisis and save the reputation of your company! The new hacks and ways of thinking that you learn from these tasks will make you unstoppable in the real world. 
                </div>
            </div> */}

        {/* On scroll 3  */}

        {/* <div>
                <div className='masterclass'>
                    <img src={masterclass} alt="" />
                </div>
                <div className='masterclass-text position-absolute z-index-2 text-uppercase justify-content-center text-center text-white fw-bold fs-3 '>masterclass</div>
                <div className='computer-text text-center '>
                    Attend masterclasses with accomplished professionals from the real world of work who will share their wisdom. You will also have access to 50+ hours of proprietary content derived from the experiences of 1000+ successful professionals. 
                </div>

            </div> */}

        {/* On scroll 4  */}

        {/* <div>
                <div className='wip'>
                    <img src={wip} alt="" />
                </div>
                <div className='computer-text text-center'>
                    Big boss is always watching! We observe your approach in various scenarios to generate your 'Workplace Intelligence Profile'. Employers now prefer such unique insights about candidates - giving you a unique edge over competitors with just standard degrees and certifications to show!
                </div>
            </div> */}

        {/* On scroll 5  */}

        {/* TODO: hide elements with className='scroll-5-hide' */}

        {/* <div>
                <div className='office'></div>
                <div className='computer-text text-center'>
                    Get placed with our partner employers! You will automatically get chosen to do more interesting and significant work that puts you on a faster growth path. Do note that access to such coveted placement opportunities is based on your performance and attendance.
                </div>
                <button className='btn btn-lg scroll-5-button text-white' disabled>Project lead</button>

            </div>
             */}

        {/* Right panel To be Hidden on scroll 5  */}

        {/* right menu section */}

        <div className="right-panel d-flex justify-content-around text-center scroll-5-hide ">
          <div className="entr">Entrepreneurial Mindset</div>
          <div className="story">Storytelling</div>
          <div className="neg">Negotiation</div>
          <div className="emot">Emotional Intelligence</div>
          <div className="fir">First Principles Thinking</div>
          <div className="coll">Collaboration</div>
          <div className="cre">Creative Problem Solving</div>
          <div className="prod">Productivity Management</div>
          <div className="sha">Sharp Remote Communication</div>
        </div>
      </div>
    </section>
  );
}
export default SectionThree;