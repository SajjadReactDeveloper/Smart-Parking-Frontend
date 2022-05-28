import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedIcon from "@mui/icons-material/Feed";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import "./registerComplaint.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const initialState = {
  category: "",
  subCategory: "",
  type: "",
  title: "",
  description: "",
  err: "",
  success: "",
};

function RegisterComlaint() {
  const auth = useSelector((state) => state.authReducer);

  const [values, setUser] = React.useState(initialState);
  const { category, subCategory, type, title, description, err, success } =
    values;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...values, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/complaint/addComplaint", {
        category,
        subCategory,
        type,
        title,
        description,
        userId: auth.user._id,
      });
      alert(res.data.msg);
      setUser({ ...values, err: "", success: res.data.msg });
    } catch (error) {
      err.response.data.msg &&
        setUser({ ...values, err: err.response.data.msg, success: "" });
    }
  };
  return (
    <div className="main">
      <header className="header">
        <h2>Complaint Registration</h2>
      </header>
      <div className="a">
        <h3>Please fill in the details below to proceed.</h3>
        <p className="text-danger">
          Note that all fields marked with an asterisk (*) are required.
        </p>
      </div>
      <form action="" className="mainForm" onSubmit={handleSubmit}>
        <label htmlFor="">
          Complaint Category <span style={{ color: "red" }}>*</span>
        </label>
        <select
          class="form-select form-select-md mb-3"
          aria-label=".form-select-lg example"
          name="category"
          onChange={handleChangeInput}
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label htmlFor="">
          Sub Category <span style={{ color: "red" }}>*</span>
        </label>
        <select
          class="form-select form-select-md mb-3"
          aria-label=".form-select-lg example"
          name="subCategory"
          onChange={handleChangeInput}
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label htmlFor="">
          Complaint Type <span style={{ color: "red" }}>*</span>
        </label>
        <select
          class="form-select form-select-md mb-3"
          aria-label=".form-select-lg example"
          name="type"
          onChange={handleChangeInput}
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label htmlFor="">
          Complaint Title <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          onChange={handleChangeInput}
          className="form-control"
          style={{ marginBottom: 10 }}
        />
        <label htmlFor="">
          Complaint Description <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder="Enter Complaint Description"
          style={{ width: "100%" }}
          name="description"
          onChange={handleChangeInput}
        />
        <div className="complaintButton">
          <button type="submit" className="complaintBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterComlaint;
