import React from "react";
import Navbar from "../ClientPanel/Navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ComplaintDetails from "../../complaints/ComplaintDetails";
import "./addComplaint.scss";

function ComplaintDetail() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ComplaintDetails />
      </div>
    </div>
  );
}

export default ComplaintDetail;
