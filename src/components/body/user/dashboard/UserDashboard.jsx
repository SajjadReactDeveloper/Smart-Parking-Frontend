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
    <>
      <h1 className="smartParking text-center mt-5">
        Welcome to Smart Parking
      </h1>
      <div class="flip-box">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <DirectionsCarIcon className="dashicon" />
            {/* <img src="qw.png" alt="" width = "100px" height = "100px"/> */}
          </div>
          <div class="flip-box-back">
            <div className="">
              <h4>Register Car</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, modi?
              </p>
            </div>
          </div>
        </div>
        <div class="flip-box-inner1">
          <div class="flip-box-front">
            <LocalParkingIcon className="dashicon" />
          </div>
          <div class="flip-box-back">
            <div className="">
              <h4>Book Parking</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi modi?
              </p>
            </div>
          </div>
        </div>
        <div class="flip-box-inner2">
          <div class="flip-box-front">
            <AssignmentIcon className="dashicon" />
          </div>
          <div class="flip-box-back">
            <div className="">
              <h4>Register Complaint</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi,modi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard