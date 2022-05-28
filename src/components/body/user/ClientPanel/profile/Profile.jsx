import React from "react";
import Navbar from "../../ClientPanel/Navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import Profile from "../../../../body/admin/components/profile/Profile";
import "./profile.scss";

function Profiles() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default Profiles;
