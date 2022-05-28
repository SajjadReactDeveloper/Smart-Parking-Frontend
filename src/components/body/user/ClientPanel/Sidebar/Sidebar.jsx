import React from 'react'
import './sidebar.scss'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChatIcon from '@mui/icons-material/Chat';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from 'react-router-dom'
import axios from 'axios';

function Sidebar() {
    const handleLogout = async() => {
        try {
            await axios.get('/user/logout');
            localStorage.removeItem('firstLogin');
            window.location.href = "/"
        } catch (error) {
            window.location.href = "/";
        }
    }
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Smart Parking</span>
      </div>
      <hr />
      <div className="center">
        <ul className="sidebarUL">
          <p className="title">Main</p>
          <li>
            <HomeIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <Link to="/admin/user" style={{ textDecoration: "none" }}>
            <li>
                <DirectionsCarIcon className="icon" />
                <span>Car</span>
                <ArrowDropDownIcon className="arrowIcon" />
              <ul className="sidebarUL">
                <li>Register Car</li>
                <li>My Car</li>
              </ul>
            </li>
          </Link>
          <Link to="/admin/viewVehicles" style={{ textDecoration: "none" }}>
            <li>
              <LocalParkingOutlinedIcon className="icon" />
              <span>Booking</span>
            </li>
          </Link>
          <Link to="/admin/complaints" style={{ textDecoration: "none" }}>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <img src="https://img.icons8.com/ios-glyphs/20/000000/complaint.png" color='white'/> */}
              <div className="">
                <FeedIcon className="icon" />
                <span>Complaints</span>
              </div>
              <div className="">
                <ArrowDropDownIcon className="arrowIcon" />
              </div>
            </li>
          </Link>
          <p className="title">Usefuls</p>
          <Link to="/admin/chat" style={{ textDecoration: "none" }}>
            <li>
              <ChatIcon className="icon" />
              <span>Chat</span>
            </li>
          </Link>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <Link to="/admin/profile" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={handleLogout}>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar