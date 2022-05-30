import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./registerComplaint.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { useHistory } from 'react-router-dom';

const initialState = {
  type: "",
  title: "",
  description: "",
  err: "",
  success: "",
};

function RegisterComlaint() {
  const auth = useSelector((state) => state.authReducer);
  const history = useHistory();

  const [values, setUser] = React.useState(initialState);
  const { type, title, description, err, success } = values;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...values, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/complaint/addComplaint", {
        type,
        title,
        description,
        userId: auth.user._id,
      });
      setUser({ ...values, err: "", success: res.data.msg });
      const time = setTimeout(() => {
        history.push('/myComplaint')
      },3000)
      return () => clearTimeout(time);
    } catch (error) {
      err.response.data.msg &&
        setUser({ ...values, err: err.response.data.msg, success: "" });
    }
  };

  const [showSuccessAlert, setShowSuccessAlert] = React.useState(true);
  const closeAlert = () => {
    setShowSuccessAlert(false);
  };
  return (
    <div className="main">
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <form action="" className="mainForm" onSubmit={handleSubmit}>
          {success && showSuccessAlert && (
            <Alert onClose={closeAlert}>{success}</Alert>
          )}
          <h5 className="text-center pb-2">Register Complaint</h5>
          <label htmlFor="">
            Complaint Type{" "}
            <span style={{ color: "red", marginLeft: 1 }}>*</span>
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
            Complaint Title{" "}
            <span style={{ color: "red", marginLeft: 1 }}>*</span>
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
            Complaint Description{" "}
            <span style={{ color: "red", marginLeft: 1 }}>*</span>
          </label>
          <br />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={2}
            placeholder="Enter Complaint Description"
            style={{ width: "100%", padding: 10 }}
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
    </div>
  );
}

export default RegisterComlaint;
