import React from "react";
import Navbar from '../ClientPanel/Navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import RegisterComplaint from '../ClientPanel/Complaints/RegisterComplaint';
import './addComplaint.scss'

function AddComplaint() {
  return (
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
