import React from "react";
import Navbar from "../ClientPanel/Navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import MyComplaints from "../ClientPanel/Complaints/MyComplaints";
import './myComplaints.scss'

function ViewComplaint() {
  return (
    // <div>
    //   <Navbar />
    //   <div className="row">
    //     <div className="col-2">
    //       <Sidebar />
    //     </div>
    //     <div className="col-9">
    //       <MyComplaints />
    //     </div>
    //   </div>
    // </div>

    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <MyComplaints />
      </div>
    </div>
  );
}

export default ViewComplaint;
