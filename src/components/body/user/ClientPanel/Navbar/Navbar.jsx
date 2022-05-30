import React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./navbar.scss";

function Navbar() {
  const auth = useSelector((state) => state.authReducer);
  const { user, isLogged } = auth;
  const [notification, setNotification] = React.useState(false);
  return (
    <div className="navbarss">
      <div className="wrapper">
        {/* <div className="navlogo">
          <LocalParkingOutlinedIcon className="navbarLogo" />
        </div> */}
        <div className="search">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="mainItem">Home</div>
          </Link>
          <Link
            to="/home#servicesTab"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="mainItem">Services</div>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <div className="mainItem">About</div>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="mainItem">Contact</div>
          </Link>
        </div>
        <div className="items">
          <div className="itemss">
            <Tooltip title="Light Mode" arrow>
              <LightModeOutlinedIcon className="icon" />
            </Tooltip>
          </div>
          <div className="itemss">
            <Tooltip title="Notifications" arrow>
              <NotificationsNoneOutlinedIcon
                className="icon"
                onClick={() => {
                  setNotification(!notification);
                }}
              />
            </Tooltip>
            <div className="counter">1</div>
            {notification ? (
              <div className="notifi-box">
                <h2>
                  Notification <span>1</span>
                </h2>
                <div className="notifi-item">
                  <img src={user.avatar} alt="" />
                  <div className="text">
                    <h4>Sajjad Akhtar</h4>
                    <span className="spanText">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
                <div className="notifi-item">
                  <img src={user.avatar} alt="" />
                  <div className="text">
                    <h4>Sajjad Akhtar</h4>
                    <span className="spanText">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
                <div className="notifi-item">
                  <img src={user.avatar} alt="" />
                  <div className="text">
                    <h4>Sajjad Akhtar</h4>
                    <span className="spanText">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
                <div className="notifi-item">
                  <img src={user.avatar} alt="" />
                  <div className="text">
                    <h4>Sajjad Akhtar</h4>
                    <span className="spanText">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
                <div className="notifi-item">
                  <img src={user.avatar} alt="" />
                  <div className="text">
                    <h4>Sajjad Akhtar</h4>
                    <span className="spanText">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="itemss">
            <Tooltip title="Settings" arrow>
              <SettingsOutlinedIcon className="icon" />
            </Tooltip>
          </div>
          <div className="itemss">
            <Tooltip title="Help" arrow>
              <HelpOutlineOutlinedIcon className="icon" />
            </Tooltip>
          </div>
          <div className="itemss">
            <Badge color="success" overlap="circular" variant="dot">
              <Tooltip title={user.name} arrow>
                <img src={user.avatar} alt="" className="avatar" />
              </Tooltip>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
