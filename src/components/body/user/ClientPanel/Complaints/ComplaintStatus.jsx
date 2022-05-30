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
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: " center",
          marginTop: 50,
        }}
      >
        <form action="" className="mainForm" onSubmit={handleSubmit}>
          <label htmlFor="">
            Complaint Number{" "}
            <span style={{ color: "red", marginLeft: 1 }}>*</span>
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
            <button
              type="submit"
              style={{ backgroundColor: "orangered", border: "none" }}
            >
              Submit
            </button>
          </div>
          {display ? (
            <table className="table table-dark table-hover mt-3">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Title</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr key={Id}>
                  <td>{type}</td>
                  <td>{title}</td>
                  <td>{status}</td>
                </tr>
              </tbody>
            </table>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default ComplaintStatus;
