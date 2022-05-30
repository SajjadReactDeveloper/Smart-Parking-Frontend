import React from 'react'
import EditLocationIcon from "@mui/icons-material/EditLocation";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";

import './footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <div className="col-4 logoDiv">
            <div
              className="d-flex"
              style={{ alignItems: "center" }}
            >
              <EditLocationIcon
                style={{
                  marginRight: 5,
                  color: "green",
                  width: 30,
                  height: 30,
                }}
                color="color"
              />
              <h5>Smart Parking</h5>
            </div>
            <p style={{ padding: 10 }}>
              We are the official providers of Comsats parking. You can't park
              closer!
            </p>
          </div>
          <div className="col-2 Navigation">
            <h5>Navigation</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-3 contactss">
            <h5 className = "text-white mb-2">Contact Info</h5>
            <div className="d-flex" style={{ alignItems: "center" }}>
              <EditLocationIcon
                style={{
                  marginRight: 5,
                  color: "green",
                  marginLeft: 5
                }}
                color="color"
              />
              <p style={{ paddingTop: 8, color: 'white', paddingBottom: 0, marginBottom: 10 }}>
                Comsats University Islamabd
              </p>
            </div>
            <div className="" style={{ display: "flex", alignItems: "center" }}>
              <WhatsAppIcon style={{ marginRight: 7, color: "green", marginLeft: 10, fontSize: 20 }} />
              <p style={{ paddingTop: 8, color: 'white' }}>0300-5271950</p>
            </div>
          </div>
          <div className="col-2 help">
            <h5>Discover</h5>
            <ul>
              <li>Help</li>
              <li>How it works</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="socials p-3">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="left">
            <p>
              Smart Parking <CopyrightIcon /> 2022. All rights reserved.
            </p>
          </div>
          <div className="right" style={{ display: "flex", marginTop: 10 }}>
            <div className="aaa facebook">
              <FacebookOutlinedIcon className="iconss" />
            </div>
            <div className="aaa instagram">
              <InstagramIcon className="iconss" />
            </div>
            <div className="aaa twitter">
              <TwitterIcon className="iconss" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer