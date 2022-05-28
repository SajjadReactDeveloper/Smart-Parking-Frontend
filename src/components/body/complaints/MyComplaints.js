import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedIcon from "@mui/icons-material/Feed";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from '@mui/icons-material/Delete';
import "./myComplaints.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function MyComplaints() {
  const history = useHistory();
  const auth = useSelector((state) => state.authReducer);
  const [cars, setCars] = React.useState([]);

  React.useEffect(async () => {
    const res = await axios.get(
      `/complaint/viewSpecificComplaint/${auth.user._id}`
    );
    setCars(res.data);
  }, [cars]);

  const handleClick = (data) => {

      history.push({
        pathname: '/ComplaintDetails',
        state: data
      });
    }
  return (
    <div>
      <div className="main">
        <body>
          <div className="row">
            <div className="col-12">
              <div className="NavbarMain">
                <h3 className="logo">Smart Parking</h3>
                <nav className="navbars">
                  <ul className="nav-area">
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                    <li>
                      <a href="">Services</a>
                    </li>
                  </ul>
                </nav>
                <a href="" className="btn-area">
                  Login
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 sideBar">
              <h3>Smart Parking</h3>
              <ul>
                <a href="">
                  <li>
                    <DashboardIcon className="icon" />
                    <span>DashBoard</span>
                  </li>
                </a>
                <a href="">
                  <li>
                    <FeedIcon className="icon" />
                    <span>Register Complaint</span>
                  </li>
                </a>
                <a href="">
                  <li>
                    <StackedLineChartIcon className="icon" />
                    <span>Track Complaints</span>
                  </li>
                </a>
                <a href="">
                  <li>
                    <PersonPinIcon className="icon" />
                    <span>My Complaints</span>
                  </li>
                </a>
              </ul>
            </div>
            <div className="col-10">
              <header className="header">
                <h2>Customer Complaints</h2>
              </header>
              <div className="a">
                <div className="datatable">
                <Input
                  id="input-with-icon-adornment"
                  placeholder="Complaint No"
                  style={{
                    backgroundColor: "lightgray",
                    padding: 3,
                    border: "none",
                    float: "right",
                    marginBottom: 10,
                    marginRight: 15,
                    marginTop: 10
                  }}
                  endAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
                  <div className="tableContainer">
                    <table className="table table-dark table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Category</th>
                          <th scope="col">Sub Category</th>
                          <th scope="col">Type</th>
                          <th scope="col">Title</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cars.map((car) => (
                          <tr key={car._id} >
                            <td onClick={() => handleClick(car)}>{car.category}</td>
                            <td onClick={() => handleClick(car)}>{car.subCategory}</td>
                            <td onClick={() => handleClick(car)}>{car.type}</td>
                            <td onClick={() => handleClick(car)}>{car.title}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default MyComplaints;
