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
import DeleteIcon from "@mui/icons-material/Delete";
import "./myComplaints.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function MyComplaints() {
  const history = useHistory();
  const auth = useSelector((state) => state.authReducer);
  const [cars, setCars] = React.useState([]);

  const deleteComplaint = async (id) => {
    try {
      const res = await axios.delete(`/complaint/deleteComplaint/${id}`);
      alert(res.data.msg);
    } catch (error) {}
  };

  React.useEffect(async () => {
    const res = await axios.get(
      `/complaint/viewSpecificComplaint/${auth.user._id}`
    );
    setCars(res.data);
  }, [cars]);

  const handleClick = (data) => {
    history.push({
      pathname: "/complaintDetails",
      state: data,
    });
  };
  return (
    <div className="main">
      <header className="header">
        <h2>Customer Complaints</h2>
      </header>
      <div className="viewComplaints">
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
              marginTop: 10,
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
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car._id}>
                    <td onClick={() => handleClick(car)}>{car.category}</td>
                    <td onClick={() => handleClick(car)}>{car.subCategory}</td>
                    <td onClick={() => handleClick(car)}>{car.type}</td>
                    <td onClick={() => handleClick(car)}>{car.title}</td>
                    <td onClick={() => handleClick(car)}>{car.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComplaints;
