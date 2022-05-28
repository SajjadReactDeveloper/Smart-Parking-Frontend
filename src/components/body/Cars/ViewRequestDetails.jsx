import React from "react";
import ViewRequestedCarsDetails from "./ViewRequestedCarsDetails";
import Navbar from "../../../components/body/user/ClientPanel/Navbar/Navbar";
import Sidebar from "../../../components/body/user/sidebar/Sidebar";
import "./viewDetails.scss";

function ViewRequestdetail() {
  return (
    <div>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <ViewRequestedCarsDetails />
        </div>
      </div>
    </div>
  );
}

export default ViewRequestdetail;
