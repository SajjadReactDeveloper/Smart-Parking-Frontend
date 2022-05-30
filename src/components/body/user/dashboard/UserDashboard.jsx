import React from 'react';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AssignmentIcon from "@mui/icons-material/Assignment";
import './userDashboard.scss'

function UserDashboard() {
  return (
    // <div className="userDashboard">
    //   <h1 className="smartParking">Welcome to Smart Parking</h1>
    //   <div className="boxes">
    //     <div className="register">
    //       <DirectionsCarIcon className = 'dashicon'/>
    //       <h4>Register Car</h4>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    //         modi?
    //       </p>
    //     </div>
    //     <div className="register">
    //       <LocalParkingIcon className = 'dashicon'/>
    //       <h4>Book Parking</h4>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    //         modi?
    //       </p>
    //     </div>
    //     <div className="register">
    //       <AssignmentIcon className = 'dashicon'/>
    //       <h4>Register Complaint</h4>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    //         modi?
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className='p-3' style = {{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <h6 style = {{color: 'white'}}>My Account Dashboard</h6>
      </div>
      <div class="flip-box">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <DirectionsCarIcon
              className="dashicon"
              style={{ width: 70, height: 70 }}
            />
          </div>
          <div class="flip-box-back">
            <div className="">
              <h4>Register Car</h4>
              <p>
                Register your car, so that you can park your car in our parking.
              </p>
            </div>
          </div>
        </div>
        <div class="flip-box-inner1">
          <div class="flip-box-front">
            <LocalParkingIcon
              className="dashicon"
              style={{ width: 80, height: 80 }}
            />
          </div>
          <div class="flip-box-back">
            <div className="">
              <h4>Book Parking</h4>
              <p>
                View available slots and book slot of your own choice.
              </p>
            </div>
          </div>
        </div>
        <div class="flip-box-inner2">
          <div class="flip-box-front">
            <AssignmentIcon
              className="dashicon"
              style={{ width: 80, height: 80 }}
            />
          </div>
          <div class="flip-box-back">
            <div className="">
              <h4>Register Complaint</h4>
              <p>
                Register complaint if you have any problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard