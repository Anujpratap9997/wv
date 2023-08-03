import React from "react";
import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="faqh1">Frequently Asked Questions</h2>
        <h3 className="faqh2">1.  What are the fees and how is it structured</h3>
        <p className="faqh3" style={{width:"50%"}}>
          The total fee is INR 9,999/- and the payment is structured in two
          parts: <br /> 
          INR 2,999/- to be paid upfront before the program begins <br />
          Remaining INR 7,000/- to be paid after going through our placement
          support process and getting placed at a job
        </p>
      </div>

      <div className="row">
        <h3 className="faqh2">2.  Who is eligible to join the fellowship?</h3>
        <p className="faqh3" style={{width:"50%"}}>
        The program is ideal for individuals in the final year of their undergraduate degree or with a <br /> 
        work experience of up to 2 years. As of now, the learners must be based in Mumbai for the <br /> 
        current batches.
        </p>
      </div>

      <div className="row">
        <h3 className="faqh2">3. Do I need any prior knowledge, experience, or scores?</h3>
        <p className="faqh3" style={{width:"50%"}}>
        Your college scores have no weightage on your eligibility to join this course. However, <br /> 
        what we are looking for is driven people who have participated in extracurricular activities, <br /> 
        leadership positions, or any other experience that shows their motivation to do more than <br /> 
        what is expected of them.
        </p>
      </div>

      <div className="row">
        <h3 className="faqh2">4.  How will this fellowship help get me a job?</h3>
        <p className="faqh3" style={{width:"50%"}}>
        The program takes you through a simulated learning experience which not only teaches <br /> you 21st Century soft skills, but also provides exposure to mentoring sessions and <br /> masterclasses. After we help you prepare for placements, you’re all set to interview with <br /> our partner recruiters.
        </p>
      </div>

      <div style={{paddingBottom:"350px"}}>
      <hr className="hr1 mt-5" />

      </div>



    </div>
  );
};

export default Faqs;