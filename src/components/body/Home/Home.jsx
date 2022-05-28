import React from 'react'
import Navbar from '../../header/Navbar'
import Footer from '../../footer/Footer';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import OwlCarousel from "react-owl-carousel";
import ReactPlayer from 'react-player';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"; 
import AddRoadIcon from "@mui/icons-material/AddRoad";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import SlideShow from '../../header/SlideShow';
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/fontawesome-free-brands";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import './home.css';
import { useHistory } from "react-router-dom";

function Home() {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
  };

  const auth = useSelector((state) => state.authReducer);
  const { user, isLogged } = auth;
  const history = useHistory();
  return (
    <div>
      <Navbar />
      <SlideShow />
      <div className="">
        <div className="row rows">
          <div className="col-3 hoverable">
            <div className="row">
              <div className="col-4 mt-5">
                <img src="f.png" alt="" />
              </div>
              <div className="col-7 mt-4">
                <h3>Save Money</h3>
                <p>
                  Save up to 70% on our site compared to the cost of on-airport
                  parking.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 hoverable">
            <div className="row">
              <div className="col-4 mt-5">
                <img src="h.png" alt="" />
              </div>
              <div className="col-7 mt-4">
                <h3>Save Time</h3>
                <p>
                  It’s easy to compare parking at all major airports. Booking a
                  reservation is quick & simple!
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 hoverable">
            <div className="row">
              <div className="col-4 mt-5">
                <img src="i.png" alt="" />
              </div>
              <div className="col-7 mt-4">
                <h3>Save Stress</h3>
                <p>
                  Guarantee your parking spot by booking in advance. Can’t make
                  it? Cancellations are free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="youtubeContainer">
        <h2 className="text-center mt-3">Why Choose Smart Parking</h2>
        <div className="youtube">
          <ReactPlayer url="https://youtu.be/7sDY4m8KNLc" />
        </div>
      </div>
      <div className="row panel">
        <h2 className="mt-5 text-center">How can we help you?</h2>
        <div className="col-5">
          <div className="row item mt-5 mb-5">
            <div className="col-2 images">
              {/* <img src="l.png" alt="" /> */}
              <DirectionsCarIcon style={{ fontSize: 40, color: "green" }} />
            </div>
            <div
              className="col-10"
              onClick={() => {
                isLogged ? history.push("/dashboard") : history.push("/login");
              }}
            >
              <h3>Register Car</h3>
              <p>
                Simply drive up and go with our Parkivia service. Why not add a
                car wash?
              </p>
            </div>
          </div>
          <div className="row item mt-5 mb-5">
            <div className="col-2 images">
              {/* <img src="l.png" alt="" /> */}
              <LocalParkingIcon style={{ fontSize: 40, color: "green" }} />
            </div>
            <div
              className="col-10"
              onClick={() => {
                isLogged ? history.push("/dashboard") : history.push("/login");
              }}
            >
              <h3>Book Parking</h3>
              <p>
                Simply drive up and go with our Parkivia service. Why not add a
                car wash?
              </p>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="row item mt-5 mb-5">
            <div className="col-2 images">
              {/* <img src="l.png" alt="" /> */}
              <AccountCircleIcon style={{ fontSize: 40, color: "green" }} />
            </div>
            <div
              className="col-10"
              onClick={() => {
                isLogged ? history.push("/dashboard") : history.push("/login");
              }}
            >
              <h3>Profile</h3>
              <p>
                Simply drive up and go with our Parkivia service. Why not add a
                car wash?
              </p>
            </div>
          </div>
          <div className="row item mt-5 mb-5">
            <div className="col-2 images">
              {/* <img src="l.png" alt="" /> */}
              <AutoStoriesIcon style={{ fontSize: 40, color: "green" }} />
            </div>
            <div
              className="col-10"
              onClick={() => {
                isLogged ? history.push("/dashboard") : history.push("/login");
              }}
            >
              <h3>Register Complaints</h3>
              <p>
                Simply drive up and go with our Parkivia service. Why not add a
                car wash?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mainContent">
        <div className="container carousel">
          {/* <div className="col-11"> */}
          <h1 className="mainContentText">
            What our <br /> Customers Say
          </h1>
          <OwlCarousel
            items={3}
            className="owl-theme"
            loop
            dots={true}
            nav={true}
            margin={8}
            mouseDrag
            touchDrag={true}
          >
            <div className="testimonial">
              <p className="icon">
                <FormatQuoteIcon style={{ color: "#000", fontSize: "80px" }} />
              </p>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus saepe voluptas repudiandae mollitia consectetur
                doloribus. Perspiciatis veniam magnam, voluptate reprehenderit
                esse id totam sapiente natus velit distinctio consequatur
                explicabo nulla?
              </p>
              <div className="testimonial-content">
                <div className="pic">
                  <img src="l.jpg" alt="" />
                </div>
                <h3 className="title">Sajjad Akhtar</h3>
                <div class="bg"></div>
              </div>
            </div>
            <div className="testimonial">
              <p className="icon">
                <FormatQuoteIcon style={{ color: "#000", fontSize: "80px" }} />
              </p>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus saepe voluptas repudiandae mollitia consectetur
                doloribus. Perspiciatis veniam magnam, voluptate reprehenderit
                esse id totam sapiente natus velit distinctio consequatur
                explicabo nulla?
              </p>
              <div className="testimonial-content">
                <div className="pic">
                  <img src="l.jpg" alt="" />
                </div>
                <h3 className="title">Sajjad Akhtar</h3>
              </div>
            </div>
            <div className="testimonial">
              <p className="icon">
                <FormatQuoteIcon style={{ color: "#000", fontSize: "80px" }} />
              </p>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus saepe voluptas repudiandae mollitia consectetur
                doloribus. Perspiciatis veniam magnam, voluptate reprehenderit
                esse id totam sapiente natus velit distinctio consequatur
                explicabo nulla?
              </p>
              <div className="testimonial-content">
                <div className="pic">
                  <img src="l.jpg" alt="" />
                </div>
                <h3 className="title">Sajjad Akhtar</h3>
              </div>
            </div>
          </OwlCarousel>
          {/* </div> */}
        </div>
      </div>
      <div className="servicesTab mt-5" id="servicesTab">
        <div className="container">
          <h2 className="text-center Heading3">Our Services</h2>
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-3 text-center p-3 servicess">
              <AddRoadIcon style={{ fontSize: 35, marginBottom: 10 }} />
              <h3>Finding Slot</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                natus.
              </p>
            </div>
            <div className="col-3 text-center p-3 servicess">
              <LocalParkingIcon style={{ fontSize: 35, marginBottom: 10 }} />
              <h3>Online Booking</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                natus.
              </p>
            </div>
            <div className="col-3 text-center p-3 servicess">
              <PaymentIcon style={{ fontSize: 35, marginBottom: 10 }} />
              <h3>Online Payment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                natus.
              </p>
            </div>
            <div className="col-3 text-center p-3 servicess">
              <SecurityIcon style={{ fontSize: 35, marginBottom: 10 }} />
              <h3>Security</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                natus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="apps">
        <div className="centeredText">
          <h3>Smart Parking App</h3>
          <p>One stop solution to serve you better!</p>
          <p>Download the App for easy access.</p>
          <div className="row appleRow">
            <div className="col-4 apple">
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
            <div className="col-4 play">
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
          </div>
        </div>
      </div>
      {/* <div className="map">
        <div className="container">
          <div className="row">
            <div className="col-6 p-3">
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <EditLocationIcon
                  style={{
                    width: 40,
                    height: 40,
                    color: "green",
                    marginRight: 5,
                  }}
                />
                <h1>Smart Parking</h1>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem aspernatur quidem molestiae harum reprehenderit,
                expedita omnis aperiam autem in aliquam.
              </p>
              <p className="gold">
                Address: <span>Comsats University Islamabad</span>
              </p>
              <p className="gold">
                Phone: <span>0300-5271950</span>
              </p>
              <p className="gold">
                Email: <span>sajjadakhtar975@gmail.com</span>
              </p>
            </div>
            <div className="col-6 p-3" style={{ height: 300 }}>
              <GoogleMap
                defaultCenter={{
                  lat: 33.65178153128875,
                  lng: 73.15654194226546,
                }}
                defaultZoom={20}
              />
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default Home