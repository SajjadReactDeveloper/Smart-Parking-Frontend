import React from "react";
import TextField from "@mui/material/TextField";
import './addCar.css';
import axios from 'axios';
import { showErrMsg, successMsg } from '../../utils/notifications/Notifications'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

const initialState = {
  regNo: "",
  brand: "",
  model: "",
  color: "",
  ownerName: "",
  err: "",
  success: "",
};

export default function AddCars() {
const [values, setUser] = React.useState(initialState);
    const {regNo, brand, model, color, ownerName, err, success} = values;
    const auth = useSelector(state => state.authReducer);

    const token = useSelector((state) => state.token);
    const users = useSelector((state) => state.users);

    const { user, isAdmin } = auth;
    const [data, setData] = React.useState(initialState);
    const [avatar, setAvatar] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [callback, setCallBack] = React.useState(false);

    const history = useHistory();


    const handleChangeInput = e => {
        const {name, value} = e.target;
        console.log(name, value)
        setUser({...values, [name]:value, err: '', success: ''})
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/car/addCar', {
                regNo, brand, model, color, ownerName: user.name, ownerId: auth.user._id, ownerAvatar: auth.user.avatar, carImage: avatar
            })
            setUser({...values, err: '', success: res.data.msg})
            const time = setTimeout(() => {
              history.push("/viewRequestedCar");
            }, 3000)
            return () => clearTimeout(time);
        } catch (error) {
            err.res.data.msg && setUser({...values, err: err.res.data.msg, success: ''})
        }
    }

    const changeAvatar = async (e) => {
      e.preventDefault();
      try {
        const file = e.target.files[0];
        if (!file)
          return setData({
            ...data,
            err: "No Files were Uploaded",
            success: "",
          });

        // if(file.size > 1024 * 1024)
        //     return setData({...data, err: "Size too Large", success: ''});

        if (file.type != "image/jpeg" && file.type != "image/png")
          return setData({
            ...data,
            err: "File Format is Incorrect",
            success: "",
          });

        let formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        const res = await axios.post("/api/uploadAvatar", formData, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: token,
          },
        });

        setLoading(false);
        setAvatar(res.data.url);
      } catch (error) {
        return setData({ ...data, err: err.response.data.msg, success: "" });
      }
    };
  return (
    <div>
      <div
        style={{
          width: 500,
          padding: 20,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          marginTop: 20,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        {err && showErrMsg(err)}
        {success && successMsg(success)}
        <h5 style={{ textAlign: "center", marginBottom: 10 }}>Register Car</h5>
        <form onSubmit={handleSubmit}>
          <TextField
              name="regNo"
              id="number"
              label="Car License"
              variant="standard"
              style={{ marginBottom: 10, width: '100%' }}
              color="success"
              onChange={handleChangeInput}
            />
            <TextField
              name="brand"
              id="brand"
              label="Car Brand"
              variant="standard"
              style={{ marginBottom: 10, width: '100%' }}
              color="success"
              onChange={handleChangeInput}
            />
            <TextField
              name="model"
              id="model"
              label="Car Model"
              variant="standard"
              style={{ marginBottom: 10, width: '100%' }}
              color="success"
              onChange={handleChangeInput}
            />
            <TextField
              name="color"
              id="color"
              label="Car Color"
              variant="standard"
              style={{ marginBottom: 10, width: '100%' }}
              color="success"
              onChange={handleChangeInput}
            />
          <label className="carLabel" htmlFor="">
            Upload Car Image
          </label>
          <input
            className="form-control"
            type="file"
            name="file"
            id="file_upload"
            onChange={changeAvatar}
          />
          <div style={{ justifyContent: "center" }}>
            <button
              className="registerCarButton"
              type="submit"
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
