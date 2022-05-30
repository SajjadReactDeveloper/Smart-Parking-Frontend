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
      <div className="viewComplaints">
        <div className="datatable">
          <div className="tableContainer">
            <table
              className="table"
              style={{ backgroundColor: "#022140", color: "white" }}
            >
              <thead>
                <tr>
                  <th scope="col">Complaint No</th>
                  <th scope="col">Type</th>
                  <th scope="col">Title</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car._id}>
                    <td onClick={() => handleClick(car)}>{car._id}</td>
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
