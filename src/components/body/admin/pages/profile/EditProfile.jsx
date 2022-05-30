import React from "react";
import Sidebar from '../../../../body/user/sidebar/Sidebar'
import EditProfile from "../../components/profile/EditProfile";
import Navbar from '../../../../body/user/ClientPanel/Navbar/Navbar'
import "./profile.scss";

function Profiles() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer" style={{ background: "#F8F0E9" }}>
        <Navbar />
        <EditProfile />
      </div>
    </div>
  );
}

export default Profiles;
