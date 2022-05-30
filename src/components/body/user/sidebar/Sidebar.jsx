import React from 'react'
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import axios from 'axios';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Sidebar() {
  const [collapse, setCollapse] = React.useState(false);

  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/login";
    } catch (error) {
      window.location.href = "/";
    }
  };
  return (
    <ProSidebar
      style={{ height: "100vh", backgroundColor: '#265077' }}
      toggled="true"
      collapsed={collapse}
      breakPoint="xs"
      onToggle={() => {
        setCollapse(true);
      }}
    >
      <SidebarHeader>
        <div className="logo-details" style={{ padding: 10 }}>
          {collapse ? (
            <div style={{ padding: 8 }}>
              <MenuOpenIcon
                onClick={() => {
                  setCollapse(!collapse);
                }}
                style={{
                  color: "white",
                  marginLeft: 20,
                  fontSize: 30,
                  cursor: "pointer",
                }}
              />
            </div>
          ) : (
            <div>
              <LocalParkingIcon
                style={{
                  fontSize: "30px",
                  color: "#fff",
                  height: "45px",
                  minWidth: "45px",
                  textAlign: "center",
                  lineHeight: "30px",
                  marginLeft: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              />
              <span className="logo_name">Smart Parking</span>
              <CloseIcon
                style={{ color: "white", marginLeft: 45, cursor: "pointer" }}
                onClick={() => {
                  setCollapse(!collapse);
                }}
              />
            </div>
          )}
        </div>
      </SidebarHeader>
      <Menu popperArrow innerSubMenuArrows>
        <MenuItem style={{ paddingLeft: 0 }} icon={<HomeIcon />} active>
          Dashboard
          <Link to="/dashboard" />
        </MenuItem>
        <SubMenu title="Cars" icon={<DirectionsCarIcon />}>
          <MenuItem>
            Register Car
            <Link to="/addCar" />
          </MenuItem>
          <MenuItem>
            My Cars
            <Link to="/viewCar" />
          </MenuItem>
          <MenuItem>
            Requested Cars
            <Link to="/viewRequestedCar" />
          </MenuItem>
        </SubMenu>
        <SubMenu title="Complaints" icon={<AssignmentIcon />}>
          <MenuItem>
            Register Complaint
            <Link to="/registerComplaint" />
          </MenuItem>
          <MenuItem>
            My Complaints
            <Link to="/myComplaint" />
          </MenuItem>
          <MenuItem>
            Track Complaint
            <Link to="/complaintStatus" />
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<PaymentIcon />}>Payment</MenuItem>
        <MenuItem icon={<ChatIcon />}>
          Chat
          <Link to="/chat" />
        </MenuItem>
        <MenuItem icon={<AccountCircleIcon />}>
          Profile
          <Link to="/profile" />
        </MenuItem>
        <MenuItem icon={<LogoutIcon />} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar