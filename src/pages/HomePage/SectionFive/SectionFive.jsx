// import React from 'react'
// import { Container } from 'reactstrap'
// import smarFellowshipImg from '../../../assets/images/home/section-five/smart_fellowship.svg'
// import "./sectionfive.css"
// function SectionFive() {
//   return (
//     <Container className='homepage-section-five justify-content-center align-items-center'>
//         <div className="row ">
//             <div className="col-md-12 ">
//                 <img src={smarFellowshipImg} width={'100%'} alt="Smart Fellowship" className='img-fluid' />
//             </div>
//         </div>
//     </Container>
//   )
// }

// export default SectionFive


import React from 'react'
import { Container } from 'reactstrap'
import smarFellowshipImg from '../../../assets/images/home/section-five/smart_fellowship.svg'
// import inner from "../../../assets/images/ForEmployers/SectionTwo/inner.svg";
// import outer from "../../../assets/images/ForEmployers/SectionTwo/outer.svg";
import SF_F from "../../../assets/images/ForEmployers/SectionTwo/SF - Finance.png"
import SF_IT from "../../../assets/images/ForEmployers/SectionTwo/SF - IT.png"
import SF_Media from "../../../assets/images/ForEmployers/SectionTwo/SF - Media.png"

// testimonials images

import mukesh from '../../../assets/images/about/Testimonials/mukesh.svg'
import amisha from '../../../assets/images/about/Testimonials/amisha.svg'
import kashish from '../../../assets/images/about/Testimonials/kashish.svg'
import anubhav from '../../../assets/images/about/Testimonials/anubhav.svg'
import akhil from '../../../assets/images/about/Testimonials/akhil.svg'

import BackQuote from "../../../components/Testimonial/BackQuote";
import "./sectionfive.css"

import Slider from 'react-slick'
function SectionFive() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: false,
    centerMode: true,
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


  

  return (
    <Container className='homepage-section-five justify-content-center align-items-center'>
        <div className="row ">
            {/* <div className="col-md-12 ">
                <img src={smarFellowshipImg} width={'100%'} alt="Smart Fellowship" className='img-fluid' />
            </div> */}
          <Slider {...settings}>
              <div className="col-md-12 ">
                <img src={SF_F} width={'100%'} alt="" className="img-fluid" />
              </div>
              <div className="col-md-12 ">
                <img src={SF_IT} width={'100%'} alt="" className="img-fluid" />
              </div>
              <div className="col-md-12 ">
                <img src={SF_Media} width={'100%'} alt="" className="img-fluid" />
              </div>
          </Slider>
        </div>
        <section id="ourEvolution">
                <div className="row mt-5">
                    <div  className="col-md-12">
                        <h1 className='text-center p-md-5  primary-text'>Our Impact</h1>
                    </div>
                </div>
                <div className="row">
                    <div  className="col-md-4 text-center mt-3">
                        <h3 className='impact-text'><b>1,000,000+</b></h3>
                        <h3 className='text-white fw-light glowyText'>Learners</h3>
                    </div>
                    <div className="col-md-4 text-center mt-3">
                        <h3 className='impact-text'><b>40+</b></h3>
                        <h3 className='text-white fw-light glowyText'>Partner Institutions</h3>
                    </div>
                    <div className="col-md-4 text-center mt-3">
                        <h3 className='impact-text'><b>85%</b></h3>
                        <h3 className='text-white fw-light glowyText'>Placement Preference</h3>
                    </div>
                </div>
            </section>
            <section className="sec mb-5">
          <div className="row mt-5">
            <Slider {...testimonialSettings}>{allTestimonialSlides}</Slider>
          </div>
        </section>
    </Container>
  )
}

export default SectionFive