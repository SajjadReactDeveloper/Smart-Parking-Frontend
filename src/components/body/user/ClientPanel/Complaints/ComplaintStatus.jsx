import React from "react";
import "./complaintStatus.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const initialState = {
  id: "",
  err: "",
  success: "",
};

function ComplaintStatus() {
  const [values, setUser] = React.useState(initialState);
  const [display, setDisplay] = React.useState(false);
  const { id, err, success } = values;
  const history = useHistory();
  const auth = useSelector((state) => state.authReducer);
  const [Id, setId] = React.useState();
  const [category, setCategory] = React.useState();
  const [subCategory, setSubCategory] = React.useState();
  const [type, setType] = React.useState();
  const [title, setTitle] = React.useState();
  const [status, setStatus] = React.useState();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...values, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/complaint/getStatus/${id}`);
      setId(res.data._id);
      setTitle(res.data.title);
      setType(res.data.type);
      setCategory(res.data.category);
      setSubCategory(res.data.subCategory);
      setStatus(res.data.status);
      setDisplay(true);
      setUser({ ...values, err: "", success: res.data.msg });
    } catch (error) {
      err.response.data.msg &&
        setUser({ ...values, err: err.response.data.msg, success: "" });
    }
  };
  return (
    <div className="main">
      <header className="header">
        <h2>Complaint Status</h2>
      </header>
      <div className="complaintStatus">
        <h3>Please fill in the details below to proceed.</h3>
        <p className="text-danger">
          Note that all fields marked with an asterisk (*) are required.
        </p>
      </div>
      <form action="" className="mainForm" onSubmit={handleSubmit}>
        <label htmlFor="">
          Complaint Number <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input
          type="text"
          name="id"
          onChange={handleChangeInput}
          placeholder="Complaint Number"
          className="form-control"
          style={{ marginBottom: 10 }}
        />
        <div className="complaintButton">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="row">
        <div className="col-9">
          <div className="" style={{ marginLeft: 20 }}>
            {display ? (
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
                  <tr key={Id}>
                    <td>{category}</td>
                    <td>{subCategory}</td>
                    <td>{type}</td>
                    <td>{title}</td>
                    <td>{status}</td>
                  </tr>
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintStatus;
