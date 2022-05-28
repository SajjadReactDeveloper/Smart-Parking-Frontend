import React from "react";
import Navbar from '../ClientPanel/Navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import RegisterComplaint from '../ClientPanel/Complaints/RegisterComplaint';
import './addComplaint.scss'

function AddComplaint() {
  return (
    // <div>
    //   <Navbar />
    //   <div className="row">
    //     <div className="col-2">
    //       <Sidebar />
    //     </div>
    //     <div className="col-9">
    //       <RegisterComplaint />
    //     </div>
    //   </div>
    // </div>
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <RegisterComplaint />
      </div>
    </div>
  );
}

export default AddComplaint;
