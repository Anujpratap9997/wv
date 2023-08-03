// import React from "react";
// import "./HYL.css";
// import ID from "../../../assets/images/Our Programs/HowYouLearn/ID.svg";
// import Maze from "../../../assets/images/Our Programs/HowYouLearn/Maze.svg";
// import Mobile from "../../../assets/images/Our Programs/HowYouLearn/Mobile.svg";
// import Tools from "../../../assets/images/Our Programs/HowYouLearn/tools.svg";
// import MasterClass from "../../../assets/images/Our Programs/HowYouLearn/MasterClass.svg";
// import play from "../../../assets/images/Our Programs/HowYouLearn/play.svg";
// import { Button } from "reactstrap";
// import Arrow from '../../../assets/images/Our Programs/arrow.png';

// function HYL({handleNext}) {
//   return (
//     <div className="container">
//       <div className="row mt-5 py-5">
//         <div className="col-md-6">
//           <div className="ProText1">
//             <h1>Learn by doing</h1>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col">
//             <h1 className="para">
//               The Smart Fellowship is a role play and workplace simulation based
//               learning journey. Instead of passively listening to gyaan, you
//               master soft skills, mental models and workplace hacks by doing! 
//               <br />
//               <br />
//               <br />
//               No two situations that you face are ever the same, which is where
//               simulated experiences give you a huge advantage. Scientifically
//               speaking, they help create new ‘neural pathways’ or connections in
//               your brain that ensure you’re prepared to tackle similar scenarios
//               in real life instinctively by adapting to the situation and
//               contextualizing your decisions accordingly.
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className="row mt-5 py-5">
//         <div className="col-md-6">
//           <div className="ProText2">
//             <h1 style={{ height: 34 }}>01. Work in an Imaginary Company</h1>
//           </div>
//         </div>

//         <div className="row">
//           <div className="row justify-content-space-between">
//             <div className="www">
//               <h1 className="para1">
//                 The Smart Fellowship is a role play and workplace simulation
//                 based learning journey. Instead of passively listening to gyaan,
//                 you master soft skills, mental models and workplace hacks by
//                 doing! 
//                 <br />
//                 <br />
//                 <br />
//                 No two situations that you face are ever the same, which is
//                 where simulated experiences give you a huge advantage.
//                 Scientifically speaking, they help create new ‘neural pathways’
//                 or connections in your brain that ensure you’re prepared to
//                 tackle similar scenarios in real life instinctively by adapting
//                 to the situation and contextualizing your decisions accordingly.
//               </h1>
//             </div>
//             <div className="id">
//               <img src={ID} className="img-fluid" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <div className="ProText2">
//           <h1 style={{ height: 34 }}>02. Gripping StoryLine</h1>
//         </div>
//       </div>

//       <div className="row">
//         <div className="row justify-content space-between">
//           <div className="www">
//             <h1 className="para1">
//               Not a moment will be without action, tension and tough decisions
//               to make. Apply mental models, hacks and soft skills to solve
//               twisted problems, draft compelling communication, negotiate deals
//               and find the smartest ways out of multi-layered situations.
//               <br />
//               <br />
//               <br />
//               All of these are superpowers for success in the real world.
//             </h1>
//           </div>
//           <div className="id">
//             <img src={Maze} className="img-fluid"/>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <div className="ProText2">
//           <h1 style={{ height: 34 }}>03. Get Work Done</h1>
//         </div>
//       </div>

//       <div className="row">
//         <div className="row justify-content space-between">
//           <div className="www">
//             <h1 className="para1">
//               Solving tasks, challenges and group projects in this storyline
//               will train your brain to build new neural pathways so that nothing
//               takes you by surprise in your actual job.
//             </h1>
//           </div>
//           <div className="id">
//             <img src={Mobile} className="img-fluid"/>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <div className="ProText2">
//           <h1 style={{ height: 34 }}>04. Learn New Tools</h1>
//         </div>
//       </div>

//       <div className="row">
//         <div className="row justify-content space-between">
//           <div className="www">
//             <h1 className="para1">
//               You will practice using tools such as Slack, Miro & Chat GPT to
//               complete your tasks efficiently.
//               <br />
//               <br />
//               Proficiency in such platforms are a must in the new world of work.
//             </h1>
//           </div>
//           <div className="id">
//             <img src={Tools} className="img-fluid" />
//           </div>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <div className="ProText2">
//           <h1 style={{ height: 34 }}>
//             05. Masterclasses by Real World Masters
//           </h1>
//         </div>
//       </div>

//       <div className="row">
//         <div className="row justify-content space-between">
//           <div className="www">
//             <h1 className="para1">
//               While you’re ‘working’, spend 1 hour every week learning from real
//               world experts who will activate your superpower soft skills by
//               showing you how they have enhanced their own superpowers to
//               achieve success!
//             </h1>
//           </div>
//           <div className="id">
//             <img src={MasterClass} className="img-fluid"/>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <div className="ProText2">
//           <h1 style={{ height: 34 }}>06. 50+ hours of secondary content</h1>
//         </div>
//       </div>

//       <div className="row">
//         <div className="row justify-content space-between">
//           <div className="www">
//             <h1 className="para1">
//               We curate articles, podcasts and videos on topics that help you
//               achieve your goals in the simulation while also enhancing your
//               general exposure that is essential to have an edge amongst others
//               who are competing for the next promotion.
//               <br />
//               <br />
//               Proficiency in such platforms are a must in the new world of work.
//             </h1>
//           </div>
//           <div className="id">
//             <img src={play} className="img-fluid"/>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-8">
//         <div className="ProText2">
//           <h1 style={{}}>
//             You may wonder, why don’t I just do an internship instead? <br />
//             Well here’s why this experience will be more valuable…
//           </h1>
//         </div>
//       </div>

//       <div className="row mt-5">
//         <div className="row justify-content space-between">
//           <div className="www">
//             <ul className="para2">
//               <li>
//                 Your internship responsibilities are generally themed on the
//                 technical or theoretical aspect of your field rather than
//                 thinking-based tasks.
//               </li>
//               <li>
//                 You are not in the driver's seat there whereas in the SMART
//                 fellowship - your decisions, actions, and communications have
//                 consequences which act like positive pressure to activate new
//                 areas in your brain.
//               </li>
//               <li>
//                 How / what you learn during internships is heavily dependent on
//                 the involvement of your boss in teaching you and also on the
//                 nature of tasks that you get.
//               </li>
//               <li>
//                 In the Smart fellowship, you get to do meaningful and
//                 significant tasks which offer a better platform for mastering
//                 soft skills.
//               </li>
//             </ul>
//             <h1 className="para1">All set to become a Smart Fellow?</h1>
//             </div>
//         </div>
//       </div>



      // <div style={{paddingBottom:"350px"}}>
      // <hr className="hr1 mt-5" />
      // <div class='row'>
      //       <div class='col-md-9'></div>
      //       <div class='col-md-3 justify-content-end'>
      //           <Button className="buttn"  onClick={ e =>  handleNext('tab-4')} style={{width:'100%', alignContent:'centre', alignItem:'centre'}}>
      //           <text className="txt">Next: Placement Support</text>
      //       <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
      //           </Button>
      //       </div>
      //   </div>
      // </div>
//     </div>
//   );
// }

// export default HYL;

import React from "react";
import "./HYL.css";
import ID from "../../../assets/images/Our Programs/HowYouLearn/ID.svg";
import Maze from "../../../assets/images/Our Programs/HowYouLearn/Maze.svg";
import Mobile from "../../../assets/images/Our Programs/HowYouLearn/Mobile.svg";
import Tools from "../../../assets/images/Our Programs/HowYouLearn/tools.svg";
import MasterClass from "../../../assets/images/Our Programs/HowYouLearn/MasterClass.svg";
import play from "../../../assets/images/Our Programs/HowYouLearn/play.svg";
import { Button } from "reactstrap";
import Arrow from '../../../assets/images/Our Programs/arrow.png';

export default function HYL ({handleNext}) {
  return (
    <div className="container">
      <div className="row mt-5 py-5">
        <div className="col-md-6">
          <div className="ProText1">
            <h1  style={{marginBottom: '20px'}}>Learn by doing</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="para">
              The Smart Fellowship is a role play and workplace simulation based
              learning journey. Instead of passively listening to gyaan, you
              master soft skills, mental models and workplace hacks by doing! 
              <br />
              <br />
              <br />
              No two situations that you face are ever the same, which is where
              simulated experiences give you a huge advantage. Scientifically
              speaking, they help create new ‘neural pathways’ or connections in
              your brain that ensure you’re prepared to tackle similar scenarios
              in real life instinctively by adapting to the situation and
              contextualizing your decisions accordingly.
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="ProText2">
        <h1 style={{ marginBottom: '20px' }}>01. Work in an Imaginary Company</h1>
      </div>
      <div className="www">
        <h1 className="para1">
          The Smart Fellowship is a role play and workplace simulation based learning journey. Instead of passively listening to gyaan, you master soft skills, mental models, and workplace hacks by doing! 
          <br />
          <br />
          <br />
          No two situations that you face are ever the same, which is where simulated experiences give you a huge advantage. Scientifically speaking, they help create new ‘neural pathways’ or connections in your brain that ensure you’re prepared to tackle similar scenarios in real life instinctively by adapting to the situation and contextualizing your decisions accordingly.
        </h1>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
      <div className="id">
        <img src={ID} alt="ID" style={{ marginRight: '20px' }} />
      </div>
    </div>
  </div>
</div>



<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="ProText2">
        <h1 style={{ height: 34, marginBottom: '20px' }}>02. Gripping StoryLine</h1>
      </div>
      <div className="www">
        <h1 className="para1">
          Not a moment will be without action, tension and tough decisions
          to make. Apply mental models, hacks and soft skills to solve
          twisted problems, draft compelling communication, negotiate deals
          and find the smartest ways out of multi-layered situations.
          <br />
          <br />
          <br />
          All of these are superpowers for success in the real world.
        </h1>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
      <div className="id">
        <img src={Maze} className="img-fluid" alt="Maze" style={{ marginRight: '20px' }} />
      </div>
    </div>
  </div>
</div>


<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="ProText2">
        <h1 style={{ height: 34, marginBottom: '20px' }}>03. Get Work Done</h1>
      </div>
      <div className="www">
        <h1 className="para1">
          Solving tasks, challenges and group projects in this storyline
          will train your brain to build new neural pathways so that nothing
          takes you by surprise in your actual job.
        </h1>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
      <div className="id">
        <img src={Mobile} className="img-fluid" alt="Mobile" style={{ marginRight: '20px' }} />
      </div>
    </div>
  </div>
</div>

<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="ProText2">
        <h1 style={{ height: 34, marginBottom: '20px' }}>04. Learn New Tools</h1>
      </div>
      <div className="www">
        <h1 className="para1">
        You will practice using tools such as Slack, Miro & Chat GPT to
            complete your tasks efficiently.
            <br />
            <br />
            Proficiency in such platforms is a must in the new world of work.
        </h1>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
      <div className="id">
        <img src={Tools} className="img-fluid" alt="Mobile" style={{ marginRight: '20px' }} />
      </div>
    </div>
  </div>
</div>





{/* <div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="ProText2">
        <h1 style={{ height: 34 }}>04. Learn New Tools</h1>
      </div>
      <div className="d-flex justify-content-between">
        <div className="www">
          <h1 className="para1">
            You will practice using tools such as Slack, Miro & Chat GPT to
            complete your tasks efficiently.
            <br />
            <br />
            Proficiency in such platforms is a must in the new world of work.
          </h1>
        </div>
        <div className="id">
          <img src={Tools} alt="Tools" style={{ marginLeft: '20px' }} />
        </div>
      </div>
    </div>
  </div>
</div> */}

<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="ProText2">
        <h1 style={{marginBottom: '20px' }}>05. Masterclasses by Real World Masters</h1>
      </div>
      <div className="www" style={{marginTop:'20px'}}>
        <h1 className="para1">
        While you’re ‘working’, spend 1 hour every week learning from real
              world experts who will activate your superpower soft skills by
              showing you how they have enhanced their own superpowers to
              achieve success!
        </h1>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
      <div className="id">
        <img src={MasterClass} className="img-fluid" alt="Mobile" style={{ marginRight: '20px' }} />
      </div>
    </div>
  </div>
</div>

<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="ProText2">
        <h1 style={{ height: 34, marginBottom: '20px' }}>06. 50+ hours of secondary content</h1>
      </div>
      <div className="www" style={{marginTop:'20px'}}>
        <h1 className="para1">
          <br/>
          <br/>
          We curate articles, podcasts and videos on topics that help you
              achieve your goals in the simulation while also enhancing your
              general exposure that is essential to have an edge amongst others
              who are competing for the next promotion.
              <br />
              <br />
              Proficiency in such platforms are a must in the new world of work.
        </h1>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
      <div className="id">
        <img src={play} className="img-fluid" alt="Mobile" style={{ marginRight: '20px' }} />
      </div>
    </div>
  </div>
</div>


<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="ProText2">
        <h1 style={{marginBottom: '20px' }}> You may wonder, why don’t I just do an internship instead? <br />
            Well here’s why this experience will be more valuable…</h1>
      </div>
      <div className="www" style={{marginTop:'20px'}}>
        <h1 className="para1">
          
          <ul className="para2">
            
              <li>
                Your internship responsibilities are generally themed on the
                technical or theoretical aspect of your field rather than
                thinking-based tasks.
              </li>
              <li>
                You are not in the driver's seat there whereas in the SMART
                fellowship - your decisions, actions, and communications have
                consequences which act like positive pressure to activate new
                areas in your brain.
              </li>
              <li>
                How / what you learn during internships is heavily dependent on
                the involvement of your boss in teaching you and also on the
                nature of tasks that you get.
              </li>
              <li>
                In the Smart fellowship, you get to do meaningful and
                significant tasks which offer a better platform for mastering
                soft skills.
              </li>
            </ul>
            <h1 className="para1">All set to become a Smart Fellow?</h1>
        </h1>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
      <div className="id">
        {/* <img src={""} className="img-fluid" alt="Mobile" style={{ marginRight: '20px' }} /> */}
      </div>
     
    </div>
  </div>
</div>



<div class='container mt-1'>
  <div class='row'>
  <hr className="hr1 mt-5" />

  </div>
  <div class='row'>
    <div class='col-md-9'></div>
    <div class='col-md-3'><Button className="buttn"  onClick={ e =>  handleNext('tab-4')} style={{width:'100%', alignContent:'centre', alignItem:'centre'}}>
                <text className="txt">Next: Placement Support</text>
            <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
                </Button></div>
  </div>
</div>



    
{/* <div style={{paddingBottom:"10%"}}>
      <hr className="hr1 mt-5" />
      <div class='row'>
            <div class='col-md-9'></div>
            <div class='col-md-3 justify-content-end'>
                <Button className="buttn"  onClick={ e =>  handleNext('tab-4')} style={{width:'100%', alignContent:'centre', alignItem:'centre'}}>
                <text className="txt">Next: Placement Support</text>
            <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
                </Button>
            </div>
        </div>
      </div> */}
    </div>
  );
}