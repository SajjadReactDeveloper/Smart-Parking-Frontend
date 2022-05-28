import React from "react";
import Navbar from "../../../ClientPanel/Navbar/Navbar";
import Sidebar from "../../../sidebar/Sidebar";
import ViewCar from "../../../../Cars/viewCar";
import './viewCar.scss';

function UserViewCar() {
  return (
    // <div>
    //   <Navbar />
    //   <div className="row">
    //     <div className="col-2">
    //       <Sidebar />
    //     </div>
    //     <div className="col-9">
    //       <viewCar />
    //     </div>
    //   </div>
    // </div>
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ViewCar />
      </div>
    </div>
  );
}

export default UserViewCar;
