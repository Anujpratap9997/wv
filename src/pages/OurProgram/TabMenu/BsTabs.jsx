import React, {useState} from 'react';
import {Container,Row,Tabs,Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./tabStyle.css';
import Intro from '../Intro/Intro';
import WhoIsThisFor from '../WhoIsThisFor/WhoIsThisFor';
import WhatYouLearn from '../WatYouLearn/WhatYouLearn';
import Faqs from '../FAQ/Faqs';
import Schedule from '../Schedule/Schedule';
import HYL from '../HowYouLearn/HYL';
import Placement from '../Placement/Placement';
import Advantage from '../Advantages/Advantage';
import { useState } from 'react';

function BsTabs() {
  const [activeTab, setActiveTab] = useState("tab-1")
  const tabHandler = (currTab) => { 
    console.log(currTab)
    setActiveTab(currTab)
    window.scrollTo(0,0)
   }
  const handleJump = (currTab) => { 
    console.log(currTab)
    setActiveTab(currTab)
   }
  return (
    <Container className='py-2 px-0 ' style={{width:'100vw',}}>
      <Row className='justify-content-center scroll scrol'>
      <div className="scrollable-tabs" >
        <Tabs justify variant="pills" activeKey={activeTab} scrollable onSelect={e=> handleJump(e)} >
          <Tab eventKey="tab-1" title="Intro">
          <div className="tabContentScroll"> {/* Apply the tabContentScroll class */}
                <Intro handleNext={tabHandler} />
              </div>
          </Tab>
          <Tab eventKey="tab-2" title="What you learn">
            <div className="tabContentScroll"> {/* Apply the tabContentScroll class */}
                <WhatYouLearn handleNext={tabHandler}/>
            </div>
          </Tab>
          <Tab eventKey="tab-3" title="How you learn">
                <div className="tabContentScroll"> {/* Apply the tabContentScroll class */}
                    <HYL handleNext={tabHandler}/>
                </div>
          </Tab>
          <Tab eventKey="tab-4" title="Placement support">
          <div className="tabContentScroll"> {/* Apply the tabContentScroll class */}
          <Placement handleNext={tabHandler}/>
          </div>
          </Tab>
          <Tab eventKey="tab-5" title="Advantages">
          <div className="tabContentScroll"> {/* Apply the tabContentScroll class */}
          <Advantage handleNext={tabHandler}/>
          </div>
          </Tab>
          <Tab eventKey="tab-6" title="Who is this for">
          <div className="tabContentScroll"> {/* Apply the tabContentScroll class */}
          <WhoIsThisFor handleNext={tabHandler}/>
          </div>
          </Tab>
          <Tab eventKey="tab-7" title="Schedule">
          <div className="tabContentScroll"> {/* Apply the tabContentScroll class */}
          <Schedule handleNext={tabHandler}/>
          </div>
          </Tab>
          <Tab eventKey="tab-8" title="FAQs">
          <div className="tabContentScroll"> {/* Apply the tabContentScroll class */}
          <Faqs handleNext={tabHandler}/>
          </div>
          </Tab>
        </Tabs>
        </div>
      </Row>
    </Container>

    // <Container className='wrapper'>
    //   <div className='icon'><i className='fa-solid fa-angle-left'></i></div>
    //   <ul className='tabs-box'>
    //     <li className='tab'>Intro</li>
    //     <li className='tab'>What you Learn</li>
    //     <li className='tab'>How you Learn</li>
    //     <li className='tab'>Placement Support</li>
    //     <li className='tab'>Advantages</li>
    //     <li className='tab'>Who is this for</li>
    //     <li className='tab'>Schedule</li>
    //     <li className='tab'>FAQs</li>
    //   </ul>
    //   <div className='icon'><i className='fa-solid fa-angle-right'></i></div>

    // </Container>
  );
}

export default BsTabs;
