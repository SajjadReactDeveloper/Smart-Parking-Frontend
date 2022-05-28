import React from "react";
import "./navbar.scss";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import LockIcon from "@mui/icons-material/Lock";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import Avatar from "@mui/material/Avatar";

function Navbar() {
  const auth = useSelector((state) => state.authReducer);
  const { user, isLogged } = auth;

  const history = useHistory();
  return (
    <>
      {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
        <div className="container">
          <a href="" className="navbar-brand">
            Smart Parking
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle-Navbar"
          >
            <span className="navbar-toggker-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="navbar-header">
        <div
          className="d-flex"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <EditLocationIcon
            style={{ marginRight: 5, color: "green", width: 30, height: 30 }}
            color="color"
          />
          <h3>Smart Parking</h3>
        </div>
        <nav>
          <ul className="nav-area">
            <Link to="/home">
              <li>
                <a href="">Home</a>
              </li>
            </Link>
            <li>
              <a href="/home#servicesTab">Services</a>
            </li>
            <Link to="/about">
              <li>
                <a href="">About</a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a href="">Contact</a>
              </li>
            </Link>
          </ul>
        </nav>
        {isLogged ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              // border: '1px solid green',
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 24, height: 24 }}
              src={user.avatar}
              style={{ marginRight: 10 }}
            />
            <a>{user.name}</a>
          </div>
        ) : (
          <div
            className="loginSignup"
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              // border: '1px solid green',
              borderRadius: 5,
              padding: 10,
            }}
          >
            <LockIcon className="lockIcon" />
            <a href="/login" className="btn-areas" onClick = {() => {
              history.push('/login')
            }}>
              Login
            </a>
            {/* <WhatsAppIcon style={{ color: "green" }} />
          <a href="" className="btn-areas">
            0300-5271950
          </a> */}
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
