import React from "react";
import TextField from "@mui/material/TextField";
import './addCar.css';
import axios from 'axios';
import { showErrMsg, successMsg } from '../../utils/notifications/Notifications'
import { useDispatch, useSelector } from 'react-redux';

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


    const handleChangeInput = e => {
        const {name, value} = e.target;
        console.log(name, value)
        setUser({...values, [name]:value, err: '', success: ''})
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/car/addCar', {
                regNo, brand, model, color, ownerName, ownerId: auth.user._id, ownerAvatar: auth.user.avatar, carImage: avatar
            })
            console.log(res.data.msg);
            setUser({...values, err: '', success: res.data.msg})
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
    <div className="AddCarbody">
      <div className="containers">
        <div className="form">
          <div style={{ margin: 10 }}>
            {err && showErrMsg(err)}
            {success && successMsg(success)}
          </div>
          <h2 className="registerCar">Register Car</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              name="regNo"
              id="number"
              label="Car License"
              variant="standard"
              style={{ marginBottom: 10 }}
              color="success"
              onChange={handleChangeInput}
            />
            <TextField
              name="brand"
              id="brand"
              label="Car Brand"
              variant="standard"
              style={{ marginBottom: 10 }}
              color="success"
              onChange={handleChangeInput}
            />
            <TextField
              name="model"
              id="model"
              label="Car Model"
              variant="standard"
              style={{ marginBottom: 10 }}
              color="success"
              onChange={handleChangeInput}
            />
            <TextField
              name="color"
              id="color"
              label="Car Color"
              variant="standard"
              style={{ marginBottom: 10 }}
              color="success"
              onChange={handleChangeInput}
            />
            <TextField
            name="ownerName"
              id="owner"
              label="Owner Name"
              variant="standard"
              style={{ marginBottom: 10 }}
              color="success"
              onChange={handleChangeInput}
            />
            <label htmlFor="">Upload Car Image</label>
            <input
              className="form-control"
              type="file"
              name="file"
              id="file_upload"
              onChange={changeAvatar}
            />
            <div style={{ justifyContent: "center" }}>
              <button className="registerCarButton" type="submit" disabled = {loading}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="overlay">
            <h2 className="registerCar">Smart Parking</h2>
            <p className="registerCarParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              dolore?
            </p>
            <div className="RegisterCarImage">
              <img src="cars.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
