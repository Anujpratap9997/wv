import React from 'react';
import './Intro.css'
import { Button } from "reactstrap"
import Arrow from '../../../assets/images/Our Programs/arrow.png'
// import { Button } from 'bootstrap';
import calendar from '../../../assets/images/Our Programs/Intro/calendar.svg'
import clock from '../../../assets/images/Our Programs/Intro/clock.svg'
import connect from '../../../assets/images/Our Programs/Intro/connect.svg'
import search from '../../../assets/images/Our Programs/Intro/search.svg'
import JD from '../../../assets/images/Our Programs/Intro/JD.svg'
import quote from '../../../assets/images/Our Programs/Intro/quote.svg'
import GradIntro from '../../../assets/images/Our Programs/Intro/GradIntro.svg'
import RoboGirl from '../../../assets/images/Our Programs/Intro/RoboGirl.svg'
import GridIntro from '../../../assets/images/Our Programs/Intro/GridIntro.svg'
import quote2 from '../../../assets/images/Our Programs/Intro/quote2.svg'
import mobJD from '../../../assets/images/Our Programs/Intro/mob-JD.svg'
import mobQuote from '../../../assets/images/Our Programs/Intro/mob-quote.svg'
import mobQuote2 from '../../../assets/images/Our Programs/Intro/mob-quote2.svg'
import { padding } from '@mui/system';

function Intro({handleNext}) {
    return (
        <div className='container'>
            <div className='row mob-res '>
                <h1 className='textColIntro'>
                    <b>Accelerate Your Finance Career with the Smart Fellowship</b>
                </h1>
            </div>

            <div className='row mob-res mt-4  '>
                <p className='textColIntro' style={{ fontSize: "1em" }}>
                    The <span style={{ color: '#fff', fontWeight: 'bold' }}>Smart Fellowship for Finance Professionals</span> is a roleplay and simulation based learning journey that trains your brain to start thinking where A.I stops!
                    <br />
                    <br />
                    This experience empowers you to master soft skills which are superpowers that ensure you will still have an edge over artificial intelligence at work for the next 20 years.
                </p>
            </div>

            <div className='row   mt-5'>
                <div className='col-md-3 col-sm-6 imgContIntro'>
                    <img src={calendar} className='imgSizeIntro img-fluid' />
                </div>
                <div className='col-md-3 col-sm-6 imgContIntro'>
                    <img src={clock} className='imgSizeIntro img-fluid' />
                </div>
                <div className='col-md-3 col-sm-6 imgContIntro'>
                    <img src={search} className='imgSizeIntro img-fluid' />
                </div>
                <div className='col-md-3 col-sm-6 imgContIntro'>
                    <img src={connect} className='imgSizeIntro img-fluid' />
                </div>
            </div>

            <div className='row  mx-5'>
                <p className='textColIntro textSchedule'>
                    *Schedule designed to suit students and working professionals.
                </p>
            </div>

            <div className='row mob-res  mt-4'>
                <h1 className='textColIntro'>
                    <b>2 Types of tasks you have to perform at work</b>
                </h1>
            </div>

            <div className='row mob-res mt-4  '>
                <div className='col-10'>
                    <p className='textColIntro' style={{ fontSize: "1em" }}>
                        In career domains like BFSI, Accounting and Statutory Compliance, the nature of tasks and challenges are divided into 2 broad buckets  Process-based and Thinking-based.
                    </p>
                </div>
            </div>

            <div id='introweb' className='row   mt-5'>
                <div className='col JDContIntro'>
                    <img src={JD} className='JDIntro' />
                    
                </div>
            </div>
            {/* JD images for mobile view */}
            <div id='intromob' className='row mt-5 px-3'>
                <div className='col JDContIntro'>
                    <img src={mobJD} className='JDIntro' />
                    
                </div>
            </div>

            <div id='introweb'  className='row   mt-5'>
                <div className='col-12 quoteContIntro'>
                    <img src={quote} className='quoteIntro' />
                </div>
            </div>
            {/* Quote fro mobile view */}
            <div id='intromob'  className='row   mt-5'>
                <div className='col-12 quoteContIntro'>
                    <img src={mobQuote} className='quoteIntro' />
                </div>
            </div>

            <div className='row mt-4  '>
                <div className='col-lg-7 py-3'>
                    <p className='textColIntro AcademicTextIntro' style={{ fontSize: "1em" }}>
                        Academics or competitive certifications like C.A/C.S train you to perform predictable processes (theoretical and technical) whereas real-life work experience prepares you for tackling the unpredictable (practical and real life!).
                        <br />
                        <br />
                        This combination worked perfectly well since you were expected to take 1-3 years on the job to learn skills like critical thinking, problem solving, emotional intelligence, and creativity that help you 'think' out of the box.  But those days are gone. New age business models and technologies have disrupted the world of work.
                        <br />
                        <br />
                        Today's recruiters expect much more from you, and only prefer hiring and promoting Smart professionals.
                    </p>
                </div>
                <div className='col-lg-4 GradContIntro'>
                    <img src={GradIntro} className='GradIntro img-fluid' />
                </div>
            </div>

            <div className='row  mob-res mt-5'>
                <h1 className='textColIntro'>
                    <b>What you will have to do as process-driven task are being automated</b>
                </h1>
            </div>

            <div className='row mob-res  mt-5' style={{ background: `url${GridIntro}`, backgroundSize: 'cover' ,textAlign:'justify', minHeight: '300px'}}>
                <div className='col-md-4'>

                    <div className='row' >
                        <h5 style={{ color: '#fff' }}>Entrepreneurial Thinking</h5><br />
                        <p className='textColIntro'>Build and implement an adaptive cash flow plan in context of external environment, CEO’s vision and realities of business</p>
                    </div>

                    <div className='row'>
                        <h5 style={{ color: '#fff' }}>Subjective Decision-making</h5><br />
                        <p className='textColIntro'>Take bold decisions to continue expense heads if, in collaboration with team, one “feels” they will eventually deliver tangible + intangible return</p>
                    </div>

                    <div className='row'>
                        <h5 style={{ color: '#fff' }}>Creative Problem Solving</h5><br />
                        <p className='textColIntro'>Apply jugaad to achieve workarounds if set processes and rules are being an obstacle to solution</p>
                    </div>

                    <div className='row'>
                        <h5 style={{ color: '#fff' }}>Emotional Intelligence</h5><br />
                        <p className='textColIntro'>Contextualize communication and tone  based on past and future potential of business relationships </p>
                    </div>

                    <div className='row'>
                        <h5 style={{ color: '#fff' }}>Adaptive Approach</h5><br />
                        <p className='textColIntro'>Plan who needs to do what based on capabilities, attitude and timelines </p>
                    </div>

                </div>
                <div className='col-md-5'>
                    <div className='RoboGirlContIntro'>
                        <img src={RoboGirl} className='RoboGirlIntro img-fluid' />
                    </div>
                </div>
                <div className='col-md-3 columnTextIntro' style={{textAlign:'justify'}}>
                    <div>

                        <div className='row'>
                            <h5 style={{ color: '#fff' }}>Numerical thinking</h5><br />
                            <p className='textColIntro'>Objective calculation of monthly financials</p>
                        </div>

                        <div className='row  mt-3'>
                            <h5 style={{ color: '#fff' }}>Theoretical</h5><br />
                            <p className='textColIntro'>Mathematically identify expenses that are not justified in context of revenue</p>
                            <br />
                        </div>

                        <div className='row  mt-3'>
                            <h5 style={{ color: '#fff' }}>Process Driven</h5><br />
                            <p className='textColIntro'>Identify roadblocks and propose solutions based on known rules and processes</p>
                            <br />
                        </div>

                        <div className='row  mt-3'>
                            <h5 style={{ color: '#fff' }}>Logical</h5><br />
                            <p className='textColIntro'>Send communication to vendors and clients for payments, informing of delays and consequence etc </p>
                            <br />
                        </div>

                        <div className='row  mt-3'>
                            <h5 style={{ color: '#fff' }}>Repetitive</h5><br />
                            <p className='textColIntro'>Follow up with different stakeholders involved in a task </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='row   mt-5'>
                <div className='col-12 quoteContIntro'>
                    <img src={quote2} className='quoteIntro img-fluid' />
                </div>
            </div>

            <div className='row mt-4  '>
                <div className='col-12 py-3'>
                    <p className='textColIntro AcademicTextIntro' style={{ fontSize: "1em" }}>
                        However this is actually great news and not something to be worried about. Let robots do all the repetitive and boring work! Being successful at performing higher order tasks from early on in your career empowers you to grow faster, earn more money, make new connections, and most importantly, enjoy the work you do!
                        <br />
                        <br />
                        Apply to join the placement-linked SMART Fellowship where you are at the center of 100+ scenarios that you will experience in real work life. While tackling them in the simulation, you will learn mental models, workplace hacks, and develop wisdom that has contributed to the success of many top professionals.
                        <br />
                        <br />
                        Get ready to jump start your career with a much greater foundation than others who come with only degrees and technical certifications.
                    </p>
                </div>
            </div>

<div style={{paddingBottom:"350px"}}>
<hr className="hr1 mt-5" />
<div class='row'>
      <div class='col-md-9'></div>
      <div class='col-md-3 justify-content-end'>
          <Button className="buttn"  onClick={ e =>  handleNext('tab-2')} style={{width:'100%', alignContent:'centre', alignItem:'centre'}}>
          <text className="txt">Next: What You Learn</text>
      <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
          </Button>
      </div>
  </div>
</div>
            


        </div>
    );
}

export default Intro;
