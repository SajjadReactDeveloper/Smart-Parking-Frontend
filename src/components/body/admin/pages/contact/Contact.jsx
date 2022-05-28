import React from 'react'
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mantine/core";
import Navbar from '../../../../header/Navbar';
import Footer from '../../../../footer/Footer'
import './contact.scss'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="mainDiv">
        <div className="contact">
          <div className="contactInfo">
            <h4>Contact Info</h4>
            <div
              className="address"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FmdGoodIcon style={{ marginRight: 5 }} />
              <p style={{ paddingTop: 12 }}>Comsats University Islamabad</p>
            </div>
            <div
              className="email"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EmailIcon style={{ marginRight: 5 }} />
              <p style={{ paddingTop: 12 }}>sajjadakhtar975@gmail.com</p>
            </div>
            <div
              className="phoneDiv"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: -90,
              }}
            >
              <PhoneIcon style={{ marginRight: 5 }} />
              <p style={{ paddingTop: 12 }}>0300-5271950</p>
            </div>
            {/* <div className="socialsIcons mt-5">
            <FacebookIcon className="fbicon" style={{ fontSize: 30 }} />
            <InstagramIcon className="fbicon" style={{ fontSize: 30 }} />
            <TwitterIcon className="fbicon" style={{ fontSize: 30 }} />
            <LinkedInIcon className="fbicon" style={{ fontSize: 30 }} />
            <PinterestIcon className="fbicon" style={{ fontSize: 30 }} />
          </div> */}
            <div
              className="right"
              style={{ display: "flex", marginTop: 40, marginLeft: -13 }}
            >
              <div className="aaaa facebook">
                <FacebookIcon className="iconss" />
              </div>
              <div className="aaaa instagram">
                <InstagramIcon className="iconss" />
              </div>
              <div className="aaaa twitter">
                <TwitterIcon className="iconss" />
              </div>
              <div className="aaaa pinterest">
                <PinterestIcon className="iconss" />
              </div>
              <div className="aaaa linkedin">
                <LinkedInIcon className="iconss" />
              </div>
            </div>
          </div>
          <div className="contactForm">
            <h3>Send a Message</h3>
            <form action="">
              <div style={{ marginBottom: 20 }}>
                <TextField
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                  style={{ marginRight: 15 }}
                />
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                />
              </div>
              <div style={{ marginBottom: 20 }}>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  style={{ marginRight: 15 }}
                />
                <TextField
                  id="standard-basic"
                  label="Mobile No"
                  variant="standard"
                />
              </div>
              <div>
                <TextareaAutosize
                  className="textArea"
                  aria-label="minimum height"
                  minRows={1}
                  placeholder="Enter Message"
                  style={{
                    width: "90%",
                    padding: 5,
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid black",
                    marginTop: 20,
                  }}
                />
              </div>
              <div className="mt-4">
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact