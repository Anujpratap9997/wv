import React, { useEffect, useState, useRef, startTransition } from "react";
import { Container } from "reactstrap";
import "./sectionone.css";
import graduate_man from "../../../assets/images/753w-large/graduate-man.svg";
import graduate_man_md from "../../../assets/images/465-medium/graduate-man.svg";
import graduate_man_sm from "../../../assets/images/360-small/graduate-man.svg";

import graduate_left from "../../../assets/images/753w-large/graduate-left.svg";
import graduate_left_md from "../../../assets/images/465-medium/graduate-left.svg";
import graduate_left_sm from "../../../assets/images/360-small/graduate-left.svg";

import graduate_right from "../../../assets/images/753w-large/graduate-right.svg";
import graduate_right_md from "../../../assets/images/465-medium/graduate-right.svg";
import graduate_right_sm from "../../../assets/images/360-small/graduate-right.svg";

import robot_left_md from "../../../assets/images/465-medium/robot-left.svg";
import robot_left from "../../../assets/images/753w-large/robot-left.svg";
import robot_left_sm from "../../../assets/images/360-small/robot-left.svg";

import robot_right_md from "../../../assets/images/465-medium/robot-right.svg";
import robot_right from "../../../assets/images/753w-large/robot-right.svg";
import robot_right_sm from "../../../assets/images/360-small/robot-right.svg";

import HomeSectionOne from "./MobileSectionOne";
//gsap
import { gsap, Power3, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../../../components/Logo/MidLogo";
import SvgLogo from "../../../components/Logo/LogoSvg";
import { useMediaQuery } from "react-responsive";
import glass from "../../../assets/images/home/glass1.svg";

gsap.registerPlugin(ScrollTrigger);

function SectionOne() {
  const isMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });
  // gsap
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  let mm = gsap.matchMedia();

  let imageContainerRef = useRef(null);
  let headingContainerRef = useRef(null);
  let logoRef = useRef(null);
  let leftRoboRef = useRef(null);
  let rightRoboRef = useRef(null);
  let leftGraudateRef = useRef(null);
  let rightGraudateRef = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    // animation s
    mm.add("(min-width: 1600px)", () => {
      gsap.set(["#logo-svg", ".apply-heading", ".bg-shadow", ".glowing-text"], {
        opacity: 0,
      });

      // logo opacity to 1
      tl.from(logoRef, { opacity: 0, duration: 0.7 })
      .set(".bg-shadow-left", { opacity: 1, y: 0, duration: 0.4 });
      // heading to visible
      tl.from(headingContainerRef, 1, {
        opacity: 0,
        duration: 0.4,
        stagger: {
          amount: 0.1,
        },
        ease: Power3.easeIn(),
      })
        .set(
          [
            ".homepage-section-two",
            ".homepag-section-thee",
            ".section-four-container",
            ".homepage-section-five",
          ],
          { display: "none" }
        )
        // image to visable}]
        .from(
          [imageContainerRef],
          2,
          {
            opacity: 0,
            duration: 0.7,
            stagger: {
              amount: 0.1,
            },
            ease: ease,
          },
          "<.9"
        )
        .from(
          [headingContainerRef, imageContainerRef],
          3,
          {
            duration: 0.7,
            y: 200,
            stagger: {
              amount: 0.1,
            },
            ease: ease,
          },
          "<.3"
        )

        .to(".bg-shadow-left", { opacity: 1, y: 200, duration: 3 }, "<")
        .to(".bg-shadow-right", { opacity: 1, y: -200, duration: 3 }, "<")
        .to("#logo-svg", { opacity: 1, duration: 0.8 })
        .to("#logo-svg", { opacity: 1, duration: 0.8, rotation: 360 }, "<")
        // .to(".logo-3", {opacity:1, duration: .8, rotation: 360},"<")

        .to(
          leftGraudateRef,
          { x: -40, y: 10, duration: 0.9, opacity: 0.8 },
          "<"
        )
        .to(leftRoboRef, { x: -40, y: 50, duration: 0.9, opacity: 0.8 }, "<")
        .to(rightRoboRef, { x: 40, y: 50, duration: 0.9, opacity: 0.8 }, "<")
        .to(
          rightGraudateRef,
          { x: 40, y: 10, duration: 0.9, opacity: 0.8 },
          "<"
        )
        .to(".bg-shadow", { opacity: 1, y: 200, duration: 0.9 }, "<")
        .to(".glowing-text", { opacity: 1 }, "<")
        .to(".apply-heading", { opacity: 1, duration: 1, opacity: 0.8 }, "<")
        .to(
          [
            ".homepage-section-two",
            ".homepag-section-thee",
            ".section-four-container",
            ".homepage-section-five",
          ],
          { display: "block" },
          "+=.4"
        );
    });
  }, []);
  if (isMobile) {
    return <HomeSectionOne />;
  }

  return (
    <Container fluid className="homepage-section-one">
      <div className="row">
        <div
          className="col-md-12 p-1 landing-page-text"
          ref={(el) => (headingContainerRef = el)}
        >
          <h1 className="text-center fw-bold heading-text">
            <span className="highlight-heading">Outsmart </span>
            <span className="heading-text-inner">Artifical Inteligence </span>
            <br />{" "}
            <span className="heading-text-default">By enhancing your </span>
            <span className="highlight-heading"> workplace Inteligence</span>
          </h1>
        </div>
        <div className="bg-shadow"></div>
        <div className="bg-shadow-left"></div>
        <div className="bg-shadow-right"></div>
      </div>

      <div className="row">
        <div
          className="col-md-12 d-flex mt-5 pt-5 justify-content-center align-items-end landing-page-image  "
          ref={(el) => (imageContainerRef = el)}
        >
          <img
            src={graduate_left}
            ref={(el) => (leftGraudateRef = el)}
            srcSet={` ${graduate_left_md} 1368w,${graduate_left} 1600w, ${graduate_left_sm} 900w`}
            className="img-fluid landing-image-item "
          ></img>
          <img
            src={robot_left}
            srcSet={` ${robot_left_md} 1368w, ${robot_left} 1600w, ${robot_left_sm} 900w`}
            ref={(el) => (leftRoboRef = el)}
            className="img-fluid landing-image-item left-roboto"
          ></img>
          <img
            src={graduate_man}
            srcSet={` ${graduate_man_md} 1368w,${graduate_man} 1600w,  ${graduate_man_sm} 900w `}
            className="img-fluid landing-image-item"
          ></img>
          <img
            src={graduate_right}
            srcSet={` ${graduate_right_md} 1368w,${graduate_right} 1600w, ${graduate_right_sm} 900w`}
            ref={(el) => (rightGraudateRef = el)}
            className="img-fluid landing-image-item"
          ></img>
          <img
            src={robot_right}
            srcSet={` ${robot_right_md} 1368w,${robot_right} 1600w, ${robot_right_sm} 900w `}
            ref={(el) => (rightRoboRef = el)}
            className="img-fluid landing-image-item right-robo"
          ></img>
        </div>
        <div className="d-block h-50">
          <p className="palcement-link glowing-text">Placement linked</p>
          <p className="price-link glowing-text">₹ 2999/-</p>
          <p className="simulated-link glowing-text">
            Simulated Workplace experience
          </p>
          <p className="domain-link glowing-text">Domain specific</p>
        </div>
      </div>
      <div className="d-flex ml-5  p-4  justify-content-center align-items-center">
        <SvgLogo
          logoRef={logoRef}
          classNames={"workverse-logo-mid"}
          scale={0.7}
        />
      </div>
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-md-6 d-flex justify-content-center ">
          <div className="apply-heading  d-flex justify-content-center align-items-center" style={{backgroundImage : `url(${glass})`}}>
          <h3 className='text-white text-center mt-2 fw-light p-5'> 
                        Apply to the &nbsp;<span className='primary-text fw-bold
                        '>SMART FELLOWSHIP</span><br/>
                        Get an unique edge over other candidates: <br/> <span style={{
                            color: '#BAFFF7'
                        }}>humans or bots!</span>
                    </h3>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SectionOne;
