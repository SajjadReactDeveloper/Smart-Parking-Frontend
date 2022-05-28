import React from "react";
import Navbar from "../ClientPanel/Navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ComplaintStatus from "../ClientPanel/Complaints/ComplaintStatus";
import './complaintStatus.scss';

function UserComplaintStatus() {
  return (
    // <div>
    //   <Navbar />
    //   <div className="row">
    //     <div className="col-2">
    //       <Sidebar />
    //     </div>
    //     <div className="col-9">
    //       <ComplaintStatus />
    //     </div>
    //   </div>
    // </div>
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ComplaintStatus />
      </div>
    </div>
  );
}

export default UserComplaintStatus;
