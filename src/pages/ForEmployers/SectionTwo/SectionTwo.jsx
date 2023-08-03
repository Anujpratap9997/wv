import React, { useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import "./SectionTwo.css";
import sectionTwo_img1 from "../../../assets/images/ForEmployers/SectionTwo/part2-img1.svg";
import sectionTwo_img2 from "../../../assets/images/ForEmployers/SectionTwo/part2-img2.svg";
import sectionTwo_img3 from "../../../assets/images/ForEmployers/SectionTwo/part2-img3.svg";
import sectionTwo_img4 from "../../../assets/images/ForEmployers/SectionTwo/part2-img4.svg";
import mentalModel from "../../../assets/images/ForEmployers/SectionTwo/mental-model.svg";
import hacksImg from "../../../assets/images/ForEmployers/SectionTwo/hacks.svg";
import fellow from "../../../assets/images/ForEmployers/SectionTwo/fellows.svg";
import peoples from "../../../assets/images/ForEmployers/SectionTwo/peoples.svg";
import sectionTwo_img5 from "../../../assets/images/ForEmployers/SectionTwo/part2-img5.svg";
import program2 from "../../../assets/images/ForEmployers/SectionTwo/program2.svg";
import program3 from "../../../assets/images/ForEmployers/SectionTwo/program3.svg";
import user1 from "../../../assets/images/ForEmployers/testimonials/user1.svg";
import inner from "../../../assets/images/ForEmployers/SectionTwo/inner.svg";
import outer from "../../../assets/images/ForEmployers/SectionTwo/outer.svg";
import SF_F from "../../../assets/images/ForEmployers/SectionTwo/SF - Finance.png"
import SF_IT from "../../../assets/images/ForEmployers/SectionTwo/SF - IT.png"
import SF_Media from "../../../assets/images/ForEmployers/SectionTwo/SF - Media.png"
import ContactForm from '../../ForEmployers/ContactForm'

// testimonials images

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

import { gsap, Power3 } from "gsap";
gsap.registerPlugin(ScrollTrigger);

function SectionTwo() {
  let tl = gsap.timeline();
  let ease = Power3.easeOut();
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    centerMode: true,
    pauseOnHover: false,
  };

  const testimonialSettings = {
    dots: false,
    infinite: true, // Enable infinite looping
    speed: 3000, // Animation speed in milliseconds (adjust as needed)
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (adjust as needed)
    cssEase: "linear",
    pauseOnHover: false,
  };

  // const testimonialCards = [1, 3, 4, 5, 6];

// Testimonials array

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
      </>
    </div>
  ));

  // Duplicate the slides to ensure a continuous loop
  const allTestimonialSlides = [...testimonialSlides, ...testimonialSlides];

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


  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const div1 = div1Ref.current;
    const div2 = div2Ref.current;

    setShowDiv(true);

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

    gsap.fromTo(div1, {
      scale: 0,
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: div1,
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


    gsap.fromTo(div2, {
      scale: 0,
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: div2,
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

    gsap.fromTo(div3, {
      scale: 0,
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: div3,
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

    gsap.fromTo(div4, {
      scale: 0,
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: div4,
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
      scale: 0,
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: div6,
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
      scale: 0,
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: div11,
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



    tl.to(
      ".emp-section-one-img1",
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
        ".emp-section-one-img2",
        {
          rotate: -360,
          duration: 30,
          ease: "linear",
          repeat: -1,
          yoyo: false,
          delay: 1,
        },
        "<"
      )






    // const trigger = {
    //   trigger: div1,
    //   start: "bottom bottom",
    // };

    // const trigger1 = {
    //   trigger: div3,
    //   start: "bottom bottom",
    // };

    // const trigger2 = {
    //   trigger: div5,
    //   start: "bottom bottom",
    // };

    // const trigger3 = {
    //   trigger: div7,
    //   start: "bottom bottom",
    // };

    // const trigger4 = {
    //   trigger: div9Ref.current,
    //   start: 'top 80%', // Adjust the start value to control when the animation starts
    //   end: 'bottom 80%', // Adjust the end value to control when the animation ends
    //   scrub: 1, // Adjust the scrub value for smoothness (set to 1 for no scrubbing)
    // };


    // gsap.from(div1, {
    //   scrollTrigger: trigger,
    //   x: "-100%",
    //   y: "100%",
    //   opacity: 0,
    //   duration: 0.5,
    //   ease: "power2.out",
    //   onComplete: () => {
    //     gsap.to([div1, div2], {
    //       x: "+=20",
    //       yoyo: true,
    //       repeat: 1,
    //       duration: 1,
    //       ease: "power2.inOut",
    //     });
    //   },
    // });

    // gsap.from(div2, {
    //   scrollTrigger: trigger,
    //   x: "100%",
    //   y: "100%",
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    // });

    // gsap.from(div3, {
    //   scrollTrigger: trigger1,
    //   x: "-100%",
    //   y: "100%",
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    //   onComplete: () => {
    //     gsap.to([div3, div4], {
    //       x: "+=20",
    //       yoyo: true,
    //       repeat: 1,
    //       duration: 0.3,
    //       ease: "power2.inOut",
    //     });
    //   },
    // });

    // gsap.from(div4, {
    //   scrollTrigger: trigger1,
    //   x: "100%",
    //   y: "100%",
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    // });

    // gsap.from(div5, {
    //   scrollTrigger: trigger2,
    //   x: "-100%",
    //   y: "100%",
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    //   onComplete: () => {
    //     gsap.to([div5, div6], {
    //       x: "+=20",
    //       yoyo: true,
    //       repeat: 1,
    //       duration: 0.3,
    //       ease: "power2.inOut",
    //     });
    //   },
    // });

    // gsap.from(div6, {
    //   scrollTrigger: trigger2,
    //   x: "100%",
    //   y: "100%",
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    // });

    // gsap.from(div7, {
    //   scrollTrigger: trigger3,
    //   x: "-100%",
    //   y: "100%",
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    //   onComplete: () => {
    //     gsap.to([div7, div8], {
    //       x: "+=20",
    //       yoyo: true,
    //       repeat: 1,
    //       duration: 0.3,
    //       ease: "power2.inOut",
    //     });
    //   },
    // });

    // gsap.from(div8, {
    //   scrollTrigger: trigger3,
    //   x: "100%",
    //   y: "100%",
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    // });

    // gsap.from(div9Ref.current, {
    //   scrollTrigger: {
    //     trigger: div9Ref.current,
    //     start: 'top 80%', // Adjust the start value to control when the animation starts
    //     end: 'bottom 80%', // Adjust the end value to control when the animation ends
    //     scrub: 1, // Adjust the scrub value for smoothness (set to 1 for no scrubbing)
    //   },
    //   x: '-200%', // Move the element from left to right
    //   opacity: 0, // Set the initial opacity to 0
    //   duration: 1.5, // Duration of the animation in seconds
    //   ease: 'power2.out', // Easing function
    // });

    // gsap.from(div10Ref.current, {
    //   scrollTrigger: {
    //     trigger: div10Ref.current,
    //     start: 'top 90%', // Adjust the start value to control when the animation starts
    //     end: 'bottom 10%', // Adjust the end value to control when the animation ends
    //     scrub: 1, // Adjust the scrub value for smoothness (set to 1 for no scrubbing)
    //   },
    //   x: '100%', // Move the element from right to left
    //   opacity: 0, // Set the initial opacity to 0
    //   duration: 1.5, // Duration of the animation in seconds
    //   ease: 'power2.out', // Easing function
    // });

    // gsap.from(div9Ref.current, {
    //   scrollTrigger: trigger4,
    //   x: '-100%', // Move div9 from left to right
    //   opacity: 0, // Set the initial opacity to 0
    //   duration: 1, // Duration of the animation in seconds
    //   ease: 'power2.out', // Easing function
    // });

    // gsap.from(div10Ref.current, {
    //   scrollTrigger: trigger4,
    //   x: '0%', // Move div10 from right to left
    //   opacity: 0, // Set the initial opacity to 0
    //   duration: 1, // Duration of the animation in seconds
    //   ease: 'power2.out', // Easing function
    // });



    // tl.to(
    //   ".emp-section-one-img2",
    //   { rotate: -360, duration: 2000, ease: "linear", repeat: -1, yoyo: false },
    //   "<"
    // );
    // .to("#sec1", {opacity:1, duration: .4})
    // .to("#sec2", {opacity:1, duration: .4})
    // .to("#sec3", {opacity:1,duration: .4})
    // .to("#sec4", {opacity:1,duration: .4})
    // .to("#sec5", {opacity:1,duration: .4})
    // .to("#sec6", {opacity:1,duration: .4})

    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: '.for-employers-section-two',
    //   start : "top 100px",
    //   end : "+=1000",
    //   scrub : true,
    //   pin: true,
    //   anticipatePin:1,
    // })

    // gsap.from(".sec", { opacity: 0 });
    // gsap.to(".sec:not(:last-child)", {
    //   yPercent: -100,
    //   opacity: 1,
    //   ease: "none",
    //   stagger: 0.5,
    //   scrollTrigger: {
    //     trigger: "#container",
    //     start: "top top",
    //     end: "+=1000%",
    //     scrub: true,
    //     //   pin: true
    //   },
    // });
    // gsap.to(".bg-shadow-left", {
    //   opacity: 1,
    //   y: 200,
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: ".sec",
    //     start: "top 100px",
    //     end: "+1000",
    //     scrub: true,
    //   },
    // });
    // gsap.to(".bg-shadow-right", { opacity: 1, y: -200, duration: 3 }, "<");

    // gsap.to("#sec1", {
    //   scrollTrigger: {
    //     trigger: "#sec1",
    //     start: "top 80%",
    //     markers: true,
    //     scrub: true,
    //   },
    //   ease: ease,
    //   opacity: 1.5,
    //   duration: 0.3,
    //   y: 100,
    // });

    // gsap.to("#sec2", {
    //   scrollTrigger: {
    //     trigger: "#sec2",
    //     start: "top 80%",
    //     markers: true,
    //     scrub: true,
    //   },
    //   ease: ease,
    //   opacity: 1.5,
    //   duration: 0.3,
    //   y: 100,
    // });

    // gsap.to("#sec3", {
    //   scrollTrigger: {
    //     trigger: "#sec3",
    //     start: "top 80%",
    //     markers: true,
    //     scrub: true,
    //   },
    //   ease: ease,
    //   opacity: 1.5,
    //   duration: 0.3,
    //   y: 100,
    // });

    // gsap.to("#sec4", {
    //   scrollTrigger: {
    //     trigger: "#sec4",
    //     start: "top 80%",
    //     markers: true,
    //     scrub: true,
    //   },
    //   ease: ease,
    //   opacity: 1.5,
    //   duration: 0.3,
    //   y: 100,
    // });
    // gsap.to("#sec5", {
    //   scrollTrigger: {
    //     trigger: "#sec5",
    //     start: "top 80%",
    //     markers: true,
    //     scrub: true,
    //   },
    //   ease: ease,
    //   opacity: 1.5,
    //   duration: 0.3,
    //   y: 100,
    // });
    gsap.to("#sec6", {
      scrollTrigger: {
        trigger: "#sec6",
        start: "top 90%",
        // markers: true,
        scrub: true,
      },
      ease: ease,
      opacity: 1.5,
      duration: 0.3,
      y: 100,
    });
    // gsap.to("#sec7", {
    //   scrollTrigger: {
    //     trigger: "#sec7",
    //     start: "top 90%",
    //     markers: true,
    //     scrub: true,
    //   },
    //   ease: ease,
    //   opacity: 2,
    //   duration: 0.3,
    //   y: 100,
    // });

    // gsap.set(".sec", { zIndex: (i, target, targets) => targets.length - i });

    // if (div9) {
    //   // Create a GSAP timeline for the animation
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: div9,
    //       start: "bottom bottom", // Start the animation when the bottom of the div is at the bottom of the viewport
    //       end: "center center", // End the animation when the center of the div is at the center of the viewport
    //       scrub: true, // Enable smooth scrubbing when scrolling
    //     },
    //   });

    //   // Add animation properties to the timeline
    //   tl.to(div9, {
    //     x: "100%", // Move div to the right
    //     opacity: 0, // Fade out the div
    //     duration: 2, // Animation duration in seconds
    //     ease: "power2.inOut", // Easing function (optional, adjust as needed)
    //   });
    // }

    // if (div10) {
    //   // Create a GSAP timeline for the animation
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: div9,
    //       start: "top 80%", // Start the animation when the top of the div is 80% down the viewport
    //       end: "center center", // End the animation when the center of the div is at the center of the viewport
    //       scrub: true, // Enable smooth scrubbing when scrolling
    //     },
    //   });

    //   // Add animation properties to the timeline
    //   tl.from(div10, {
    //     x: "100%", // Move div from right to left
    //     opacity: 0, // Fade in the div
    //     duration: 1, // Animation duration in seconds
    //     ease: "power2.out", // Easing function (optional, adjust as needed)
    //   });
    // }
  }, []);

  return (
    <Container className="for-employers-section-two mt-5" id="container">

      <div className="mt-0 pt-0 ">
        {/* <div className="bg-shadow"></div> */}
        {/* <div className="bg-shadow-left"></div>
                <div className="bg-shadow-right"></div> */}

        {/* part 2  */}
        <section className="sec" id="sec1">
          <div ref={div1Ref} className="row mt-5 pt-5">
            <div className="col-12 ">
              <h2 className="part-2-text text-center">
                <span className="text-capitalize">The smart fellowship</span> is
                a{" "}
                <span className="fw-bold text-capitalize">
                  workplace simulation
                </span>{" "}
                and <span className="fw-bold text-capitalize">role play</span>{" "}
                based program where graduates master 9 soft skills. These
                superpowers enhance their ability to add value to your business.{" "}
              </h2>
              <h2 className="part-2-text text-center pt-5">
                And here is how it{" "}
                <span className="fw-bold text-capitalize">works!</span>
              </h2>
            </div>
          </div>
          {/* <div className="row justify-content-center align-items-center">
            <div className="col-6 px-5 py-5 justify-content-center align-items-center">
              <img src={sectionTwo_img1} className="img-fluid" alt="" />
            </div>
             
            <div className="col-6 px-5 justify-content-center align-items-center part-2-text py-5">
              <h1 className=" opacity-50 part-2-text-number">01</h1>
              <h3 className="">
                We scout for ambitious graduates across different streams.
              </h3>
            </div>
          </div> */}

          <div className="row justify-content-center align-items-center">
            <div
              ref={div2Ref}
              className="col-6 px-5 py-5 justify-content-center align-items-center"
            >
              <img src={sectionTwo_img1} className="img-fluid" alt="" />
            </div>
            <div
              ref={div3Ref}
              className="col-6 px-5 justify-content-center align-items-center part-2-text py-5"
            >
              <h1 className="opacity-50 part-2-text-number">01</h1>
              <h3 className="">
                We scout for ambitious graduates across different streams.
              </h3>
            </div>
          </div>
        </section>

        <section className="sec" id="sec2" >
          <div className="row justify-content-center align-items-center">
            <div
              ref={div4Ref}
              className="col-6 px-5 justify-content-center align-items-center part-2-text py-5"
            >
              <h1 className=" opacity-50 part-2-text-number">02</h1>
              <h3 className="">
                Pre-assessment for technical skills and testing learnability of
                soft skills.
              </h3>
            </div>
            <div
              ref={div5Ref}
              className="col-6 px-5 py-5 justify-content-center align-items-center"
            >
              <img src={sectionTwo_img2} className="img-fluid" alt="" />
            </div>
          </div>
        </section>
        <section className="sec" id="sec3" >
          <div className="row d-flex justify-content-center ">
            <div ref={div6Ref} className="col-6">
              <img src={sectionTwo_img3} className="image-fluid" alt="" />
            </div>
            <div
              ref={div7Ref}
              className="col-6 px-5 justify-content-center part-2-text py-5"
            >
              <h1 className=" opacity-50 part-2-text-number">03</h1>
              <h3 className="">
                Before they join you, smart fellows 'work' as a core team member
                of an imaginary company for 50 hours.
              </h3>
            </div>
          </div>
        </section>
        <section className="sec" id="sec4">
          <div className="row justify-content-center align-items-center">
            <div
              ref={div8Ref}
              className="col-4 flex-shrink px-5 justify-content-center align-items-center part-2-text py-5"
            >
              <h1 className=" opacity-50 part-2-text-number">04</h1>
              <h3 className="">Hire based on data that really matters.</h3>
            </div>
            <div
              ref={div9Ref}
              className="col-8 flex-grow px-5 py-5 justify-content-center align-items-center"
            >
              <img src={sectionTwo_img4} className="img-fluid" alt="" />
              <h5 className="text-center" style={{ color: "#009B8C" }}>
                As they 'work' in the simulation, we observe them to give you an
                insight
                <br /> into how they think, solve & communication across
                different contexts
              </h5>
            </div>
          </div>
        </section>
        <section className="sec" id="sec5" style={{ height: "200px" }}>
          <div ref={div10Ref} className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="primary-text text-center">
                <span className="">Smart Fellows</span> <span className="wont"> won't ask stupid
                  questions. Instead, they come with superpower that will empower
                  your business to thrive!</span>
              </h3>
            </div>
          </div>
        </section>
        <section className="sec" id="sec6">
          <div className="row my-5 reduced-top-margin">
            <div ref={div11Ref} className="col-md-6 animate-me" style={{ marginTop: "5%" }}>

              <ul className="list-group">
                <li class="list-group-item my-5  border-0 bg-transparent d-flex justify-content-start align-items-center">
                  <div className="step-icon">
                    <img src={mentalModel} alt="" className="img-fluid p-1" />
                  </div>
                  <span className="px-5">
                    <h5 className="fw-light primary-text">
                      100+ Mental Models to solve almost any problem
                    </h5>
                  </span>
                </li>
              </ul>
              <ul className="list-group">
                <li class="list-group-item my-5  border-0 bg-transparent d-flex justify-content-start align-items-center">
                  <div className="step-icon">
                    <img src={hacksImg} alt="" className="img-fluid p-1" />
                  </div>
                  <span className="px-5">
                    <h5 className="fw-light primary-text">
                      200+ Hacks to get work done
                    </h5>
                  </span>
                </li>
              </ul>

            </div>
            {/* <div
              className={`animated-div1 ${showDiv ? "slide-in-right" : ""}`}
            // ref={divRef}
            > */}
            <div
              className="col-md-6 px-5 justify-content-center align-items-center"
              id="empSectionOneRight"
              style={{
                backgroundImage: `url(${peoples})`,
                backgroundPosition: "right top",
              }}
            >
              <img
                src={inner}
                className="emp-section-one-img1"
                alt=""
                style={{ marginLeft: 30, marginTop: 40, animation: "rotateCounterclockwise 10s linear infinite", }}
              />
              <img
                src={outer}
                className="emp-section-one-img2"
                alt=""
                style={{
                  marginLeft: -25,
                  marginTop: -80,
                  animation: "rotateCounterclockwise 10s linear infinite",
                }}
              />
            </div>
            {/* </div> */}
          </div>
        </section>

        <section className="sec" style={{ height: 400, marginTop: "20%" }}>
          <div ref={div12Ref} className="row justify-content-center">
            <div className="col-md-10 text-center ">
              <h3 className="text-white fw-light">
                <span className="primary-text fw-bold">Storylines</span> of the
                simulation are domain specific.
              </h3>
              <h3 className="text-white fw-light">
                Smart fellows adapt applications of non-technical skills to
                their specific domains.
              </h3>
            </div>
          </div>
        </section>

        <section className="sec">
          <div ref={div13Ref} className="row justify-content-center text-center my-5">
            <Slider {...settings}>
              <div className="col-md-12 ">
                <img src={SF_F} alt="" className="img-fluid" />
              </div>
              <div className="col-md-12 ">
                <img src={SF_Media} alt="" className="img-fluid" />
              </div>
              <div className="col-md-12 ">
                <img src={SF_IT} alt="" className="img-fluid" />
              </div>
            </Slider>
          </div>
        </section>

        <section className="sec">
          <div ref={div14Ref} className="row">
            <Slider {...testimonialSettings}>{allTestimonialSlides}</Slider>
          </div>
        </section>

        <section>
          <div className="row mb-5">
            <div className="pt-5 mt col-md-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default SectionTwo;