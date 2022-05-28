import React from 'react'
import Navbar from '../../../../header/Navbar';
import Footer from '../../../../footer/Footer';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ArticleIcon from "@mui/icons-material/Article";
import OwlCarousel from "react-owl-carousel";
import ReactPlayer from "react-player";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"; 
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from '@mui/material/Link';
import './about.scss';

function About() {
  return (
    <div>
      <Navbar />
      <div className="background">
        <div className="center-text">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="row container">
        <div className="col-6 p-5">
          <p className="text-danger">WHAT WE ARE DOING</p>
          <h1>24k Talented people are getting Jobs</h1>
          <p>
            Mollit anim laborum duis au dolor in voluptate velit ess cillum
            dolore eu lore dsu quality mollit anim laborumuis au dolor in
            voluptate velit cillum.
          </p>
          <p>
            Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate velit
            esscillumlore eu quife nrulla parihatur. Excghcepteur signjnt occa
            cupidatat non inulpadeserunt mollit aboru. temnthp incididbnt ut
            labore mollit anim laborum suis aute.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="l.jpg" alt="" className="sajjad" />
        </div>
      </div>
      <div className="row how">
        <p className="text-danger text-center mt-5">Apply Process</p>
        <h1 className="text-center text-white">How it works</h1>
        <div className="stepsContainer mt-5">
          <div className="item1">
            <DirectionsCarIcon
              style={{ fontSize: 60 }}
              className="rotate mb-3"
            />
            <h3>Register car</h3>
            <p className="lineHeight">
              Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
              incididunt ut laborea.
            </p>
          </div>
          <div className="item2">
            <LocalParkingIcon
              style={{ fontSize: 60 }}
              className="rotate mb-3"
            />
            <h3>Find Slot</h3>
            <p className="lineHeight">
              Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
              incididunt ut laborea.
            </p>
          </div>
          <div className="item3">
            <ArticleIcon style={{ fontSize: 60 }} className="rotate mb-3" />
            <h3>Book Parking</h3>
            <p className="lineHeight">
              Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
              incididunt ut laborea.
            </p>
          </div>
        </div>
      </div>

      <div className="myTeamContainer">
        <h1 className="text-white text-center pt-5">Our Team</h1>
        <h6 className="text-white text-center pt-3 pb-5">
          MEET OUR TALENTED TEAM MEMBER
        </h6>
        <div className="myTeam">
          <div className="profile-card">
            <div className="img">
              <img src="l.jpg" alt="" />
            </div>
            <div className="caption">
              <h3>Zulfiqar Ali</h3>
              <p>Full Stack Developer</p>
              <div className="social-links">
                <FacebookOutlinedIcon className="sicons" />
                <InstagramIcon className="sicons" />
                <TwitterIcon className="sicons" />
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img src="l.jpg" alt="" />
            </div>
            <div className="caption">
              <h3>Sajjad Akhtar</h3>
              <p>Full Stack Developer</p>
              <div className="social-links">
                <FacebookOutlinedIcon className="sicons" />
                <InstagramIcon className="sicons" />
                <TwitterIcon className="sicons" />
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img src="l.jpg" alt="" />
            </div>
            <div className="caption">
              <h3>Umair Banaras</h3>
              <p>Android Developer</p>
              <div className="social-links">
                <FacebookOutlinedIcon className="sicons" />
                <InstagramIcon className="sicons" />
                <TwitterIcon className="sicons" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About