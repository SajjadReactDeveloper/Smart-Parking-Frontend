import React from 'react'
import './navbar.scss';
import EditLocationIcon from "@mui/icons-material/EditLocation";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  const auth = useSelector((state) => state.authReducer);
  const { user, isLogged } = auth;
  return (
    <>
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
                <a href="/#">Home</a>
              </li>
            </Link>
            <li>
              <a href="/home#servicesTab">Services</a>
            </li>
            <Link to="/about">
              <li>
                <a href="/#">About</a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a href="/#">Contact</a>
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
            <a style= {{textDecoration: 'none', color: 'black'}} href = "/#">{user.name}</a>
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
            <a href="/login" className="btn-areas">
              Login
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar