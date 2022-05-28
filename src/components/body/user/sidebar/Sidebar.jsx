import React from 'react'
import './sidebar.scss'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import { useHistory } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import axios from 'axios';

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Sidebar() {
  const auth = useSelector((state) => state.authReducer);
  const { user, isLogged } = auth;

  const [collapse, setCollapse] = React.useState(false)

  const history = useHistory();

  const [show, setShow] = React.useState(true);
  const [show1, setShow1] = React.useState(true);
  const [show2, setShow2] = React.useState(true);

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
    // <div className="sidebarr">
    //   <div className="logo-details">
    //     <LocalParkingIcon className="parkingIcon" />
    //     <span className="logo_name">Smart Parking</span>
    //   </div>
    //   <ul className="sidebarLinks">
    //     <li
    //       onClick={() => {
    //         history.push("/dashboard");
    //       }}
    //     >
    //       <a href="">
    //         <HomeIcon className="sidebarIcons" />
    //         <span className="link_name">Dashboard</span>
    //       </a>
    //     </li>
    //     <li
    //       onClick={() => {
    //         setShow(!show);
    //       }}
    //     >
    //       <div className="icon_link">
    //         <a href="">
    //           <DirectionsCarIcon className="sidebarIcons" />
    //           <span className="link_name">Car</span>
    //         </a>
    //         <ArrowDropDownIcon className="arrow" />
    //       </div>
    //       <ul className={show ? "sub-menu" : "open"}>
    //         <li
    //           onClick={() => {
    //             history.push("/addCar");
    //           }}
    //         >
    //           <a className="link_name" href="">
    //             Register Car
    //           </a>
    //         </li>
    //         <li
    //           onClick={() => {
    //             history.push("/viewCar");
    //           }}
    //         >
    //           <a className="link_name" href="">
    //             My Car
    //           </a>
    //         </li>
    //         <li
    //           onClick={() => {
    //             history.push("/viewRequestedCar");
    //           }}
    //         >
    //           <a className="link_name" href="">
    //             Car Request
    //           </a>
    //         </li>
    //       </ul>
    //     </li>
    //     <li
    //       onClick={() => {
    //         setShow1(!show1);
    //       }}
    //     >
    //       <div className="icon_link">
    //         <a href="">
    //           <LocalParkingIcon className="sidebarIcons" />
    //           <span className="link_name">Booking</span>
    //         </a>
    //         <ArrowDropDownIcon className="arrow" />
    //       </div>
    //       <ul className={show1 ? "sub-menu" : "open"}>
    //         <li>
    //           <a className="link_name" href="">
    //             Book Parking
    //           </a>
    //         </li>
    //         <li>
    //           <a className="link_name" href="">
    //             Track Booking
    //           </a>
    //         </li>
    //         <li>
    //           <a className="link_name" href="">
    //             View Bookings
    //           </a>
    //         </li>
    //       </ul>
    //     </li>
    //     <li
    //       onClick={() => {
    //         setShow2(!show2);
    //       }}
    //     >
    //       <div className="icon_link">
    //         <a href="">
    //           <AssignmentIcon className="sidebarIcons" />
    //           <span className="link_name">Complaints</span>
    //         </a>
    //         <ArrowDropDownIcon className="arrow" />
    //       </div>
    //       <ul className={show2 ? "sub-menu" : "open"}>
    //         <li
    //           onClick={() => {
    //             history.push("/registerComplaint");
    //           }}
    //         >
    //           <a className="link_name" href="">
    //             Register Complaint
    //           </a>
    //         </li>
    //         <li
    //           onClick={() => {
    //             history.push("/myComplaint");
    //           }}
    //         >
    //           <a className="link_name" href="">
    //             My Complaints
    //           </a>
    //         </li>
    //         <li
    //           onClick={() => {
    //             history.push("/complaintStatus");
    //           }}
    //         >
    //           <a className="link_name" href="">
    //             Track Complaint
    //           </a>
    //         </li>
    //       </ul>
    //     </li>
    //     <li>
    //       <a href="">
    //         <PaymentIcon className="sidebarIcons" />
    //         <span className="link_name">Payments</span>
    //       </a>
    //     </li>
    //     <li
    //       onClick={() => {
    //         history.push("/profile");
    //       }}
    //     >
    //       <a href="">
    //         <AccountCircleIcon className="sidebarIcons" />
    //         <span className="link_name">Profile</span>
    //       </a>
    //     </li>
    //     <li
    //       onClick={() => {
    //         history.push("/chat");
    //       }}
    //     >
    //       <a href="">
    //         <ChatIcon className="sidebarIcons" />
    //         <span className="link_name">Chat</span>
    //       </a>
    //     </li>

    //     <li
    //       style={{
    //         borderTop: "1px solid white",
    //         marginTop: "50px",
    //       }}
    //     >
    //       <div className="icon_link">
    //         <a href="">
    //           <Avatar
    //             alt="Remy Sharp"
    //             sx={{ width: 30, height: 30 }}
    //             src={user.avatar}
    //             style={{ marginLeft: 5 }}
    //           />
    //           <span className="link_name">{user.name}</span>
    //         </a>
    //         <LogoutIcon
    //           className="sidebarIcons"
    //           style={{ marginRight: 10, cursor: "pointer" }}
    //           onClick={handleLogout}
    //         />
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    <div style={{ width: "auto" }}>
      {/* <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
        style={{ backgroundColor: "black", width: 'auto', }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <HomeIcon className="sidebarIcons" />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <DirectionsCarIcon className="sidebarIcons" />
            </NavIcon>
            <NavText>Car</NavText>
            <NavItem
              style={{ paddingLeft: 40, marginBottom: 10 }}
              eventKey="charts/linechart"
            >
              <NavText>Register Car</NavText>
            </NavItem>
            <NavItem
              style={{ paddingLeft: 40, marginBottom: 10 }}
              eventKey="charts/barchart"
            >
              <NavText>My Cars</NavText>
            </NavItem>
            <NavItem
              style={{ paddingLeft: 40, marginBottom: 10 }}
              eventKey="charts/barchart"
            >
              <NavText>Request Cars</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="complaints">
            <NavIcon>
              <AssignmentIcon className="sidebarIcons" />
            </NavIcon>
            <NavText>Complaints</NavText>
            <NavItem
              style={{ paddingLeft: 40, marginBottom: 10 }}
              eventKey="complaints/linechart"
            >
              <NavText>Register Complaint</NavText>
            </NavItem>
            <NavItem
              style={{ paddingLeft: 40, marginBottom: 10 }}
              eventKey="complaints/barchart"
            >
              <NavText>My Complaints</NavText>
            </NavItem>
            <NavItem
              style={{ paddingLeft: 40, marginBottom: 10 }}
              eventKey="complaints/barchart"
            >
              <NavText>Track Complaint</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <PaymentIcon className="sidebarIcons" />
            </NavIcon>
            <NavText>Payments</NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <AccountCircleIcon className="sidebarIcons" />
            </NavIcon>
            <NavText>Profile</NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <ChatIcon className="sidebarIcons" />
            </NavIcon>
            <NavText>Chat</NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <LogoutIcon
                className="sidebarIcons"
                style={{ marginRight: 10, cursor: "pointer" }}
                onClick={handleLogout}
              />
            </NavIcon>
            <NavText>Logout</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav> */}
      <ProSidebar
        toggled="false"
        collapsed={collapse}
        breakPoint="xs"
        onToggle={() => {
          setCollapse(true);
        }}
      >
        <SidebarHeader>
          <div className="logo-details" style={{ padding: 10 }}>
            {collapse ? (
              <div style= {{padding: 8}}>
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
        <Menu iconShape="round" popperArrow innerSubMenuArrows>
          <MenuItem style={{ paddingLeft: 0 }} icon={<HomeIcon />}>
            Dashboard
          </MenuItem>
          <SubMenu title="Cars" icon={<DirectionsCarIcon />}>
            <MenuItem>Register Car</MenuItem>
            <MenuItem>My Cars</MenuItem>
            <MenuItem>Requested Cars</MenuItem>
          </SubMenu>
          <SubMenu title="Complaints" icon={<AssignmentIcon />}>
            <MenuItem>Register Complaint</MenuItem>
            <MenuItem>My Complaints</MenuItem>
            <MenuItem>Track Complaint</MenuItem>
          </SubMenu>
          <MenuItem icon={<PaymentIcon />}>Payment</MenuItem>
          <MenuItem icon={<ChatIcon />}>Chat</MenuItem>
          <MenuItem icon={<AccountCircleIcon />}>Profile</MenuItem>
          <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
        </Menu>
      </ProSidebar>
      ;
    </div>
  );
}

export default Sidebar