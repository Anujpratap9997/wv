import React from "react";
import road from "../../../assets/images/Our Programs/Schedule/road.svg";
import mobRoad from '../../../assets/images/Our Programs/Schedule/mob-schedule.svg'
import "./Schedule.css";
import { Button } from "reactstrap"
import Arrow from '../../../assets/images/Our Programs/arrow.png'

function Schedule({handleNext}) {
  return (
    <div class="container px-3">
      <div class="row">
        <div class="col-md-4">
          <div className="ProText">
            <h1>Schedule</h1>
          </div>
        </div>
      </div>
      <div id="scheduleweb" class="row" style={{ padding: "5%" }}>
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <img src={road} class="img-fluid" alt="Responsive Image" />
        </div>

        <div class="col-md-2"></div>
      </div>

    


      <div class="row">
        <div class="col-md-4">
          <div className="ProText1">
            <h1>Total commitment- 48 hours</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div >
            <h1 className="para">Commit just 8-9 hours out of your week and see how fast your workplace intelligence gets activated! Here’s a sample schedule of what one week in the program looks like</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
      <table className="custom-table" >
      <thead>
        <tr>
          <th>Program Orientation</th>
          <th>2 hours</th>
          <th>2 In-Person (Mumbai)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Masterclass</td>
          <td>4 hours</td>
          <td>Online</td>
        </tr>
        <tr>
        <td>Weekly Meeting</td>
          <td>5 hours</td>
          <td>Online</td>
        </tr>
        <tr>
        <td>Self Study</td>
          <td>9 hours</td>
          <td>Online</td>
        </tr>
        <tr>
        <td>Task</td>
          <td>22 hours</td>
          <td>Online</td>
        </tr>
        <tr>
        <td>Challenges</td>
          <td>3 hours</td>
          <td>Online</td>
        </tr>
        <tr>
        <td>Pre-placement Sessions</td>
          <td>2 hours</td>
          <td>Online</td>
        </tr>
        <tr>
        <td>Graduation Ceremony</td>
          <td>2 hours</td>
          <td>In-Person</td>
        </tr>
        
        
      </tbody>
    </table>
    </div>
      </div>

      <div id="scheduleMob" class="row mt-3" style={{ padding: "5%" }}>
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <img src={mobRoad} class="img-fluid" alt="Responsive Image" />
        </div>

        <div class="col-md-2"></div>
      </div>


      
      <div style={{paddingBottom:"350px"}}>
      <hr className="hr1 mt-5" />
      <div class='row'>
            <div class='col-md-9'></div>
            <div class='col-md-3 justify-content-end'>
                <Button className="buttn"  onClick={ e =>  handleNext('tab-8')} style={{width:'100%', alignContent:'centre', alignItem:'centre'}}>
                <text className="txt">Next: FAQs</text>
            <img src={Arrow} alt="" width={20} height={30} style={{marginLeft:"8px"}}/>
                </Button>
            </div>
        </div>
      </div>






    </div>
  );
}

export default Schedule;