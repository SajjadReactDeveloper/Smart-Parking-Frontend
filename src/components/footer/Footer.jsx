import React from 'react'
import EditLocationIcon from "@mui/icons-material/EditLocation";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePlay
} from "@fortawesome/fontawesome-free-brands";

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
              <h3>Smart Parking</h3>
            </div>
            <p style={{ padding: 10 }}>
              We are the official providers of Airport parking. You can't park
              closer!
            </p>
            {/* <div className="row appleRow">
              <div className="col-5 apple">
                <div className="row px-3 pt-2">
                  <div
                    className="col-2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      className="font-awesome"
                      icon={faApple}
                      style={{
                        fontSize: 24,
                      }}
                    />
                  </div>
                  <div
                    className="col-9"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Download on the APP STORE
                  </div>
                </div>
              </div>
              <div className="col-5 play">
                <div className="row px-3 pt-2">
                  <div
                    className="col-2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      className="font-awesome"
                      icon={faGooglePlay}
                      style={{ fontSize: 24 }}
                    />
                  </div>
                  <div
                    className="col-9"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Download on the GOOGLE PLAY
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-2 Navigation">
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-3 contactss">
            <h3>Contact Info</h3>
            <span style={{ color: "gray" }}>Corporate Office Address:</span>
            <div className="d-flex" style={{ alignItems: "center" }}>
              <EditLocationIcon
                style={{
                  marginRight: 5,
                  color: "green",
                }}
                color="color"
              />
              <p style={{ paddingTop: 8, color: 'white' }}>
                1234 River Street New York, NY 01001
              </p>
            </div>
            <span style={{ color: "gray" }}>Customer Service:</span>
            <div className="" style={{ display: "flex", alignItems: "center" }}>
              <WhatsAppIcon style={{ marginRight: 5, color: "green" }} />
              <p style={{ paddingTop: 8, color: 'white' }}>0300-5271950</p>
            </div>
          </div>
          <div className="col-2 help">
            <h3>Discover</h3>
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