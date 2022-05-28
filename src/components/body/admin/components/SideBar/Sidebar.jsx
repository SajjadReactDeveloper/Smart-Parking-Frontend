import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatIcon from '@mui/icons-material/Chat';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Sidebar() {
    const handleLogout = async() => {
        try {
            await axios.get('/user/logout');
            localStorage.removeItem('firstLogin');
            window.location.href = "/login"
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
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/viewVehicles" style={{ textDecoration: "none" }}>
            <li>
              <DirectionsCarIcon className="icon" />
              <span>Vehicles Request</span>
            </li>
          </Link>
          <Link
            to="/admin/viewApprovedVehicles"
            style={{ textDecoration: "none" }}
          >
            <li>
              <DirectionsCarIcon className="icon" />
              <span>Register Cars</span>
            </li>
          </Link>
          <li>
            <AddRoadIcon className="icon" />
            <span>Parking Slots</span>
          </li>
          <li>
            <LocalParkingOutlinedIcon className="icon" />
            <span>Bookings</span>
          </li>
          <Link to="/admin/complaints" style={{ textDecoration: "none" }}>
            <li>
              {/* <img src="https://img.icons8.com/ios-glyphs/20/000000/complaint.png" color='white'/> */}
              <FeedIcon className="icon" />
              <span>Manage Complaints</span>
            </li>
          </Link>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
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