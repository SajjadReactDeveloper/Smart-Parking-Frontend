import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchAllUsers,
  dispatchGetAllUser,
} from "../../../../../redux/actions/usersAction";
import './profile.scss';
import Alert from "@mui/material/Alert";

const initialState = {
  name: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

export default function Profile() {
  const auth = useSelector((state) => state.authReducer);
  const token = useSelector((state) => state.token);
  const users = useSelector((state) => state.users);

  const history = useHistory();

  const { user, isAdmin } = auth;
  const [data, setData] = React.useState(initialState);
  const [avatar, setAvatar] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [callback, setCallBack] = React.useState(false);

  const { name, password, cf_password, err, success } = data;

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isAdmin) {
      fetchAllUsers(token).then((res) => {
        dispatch(dispatchGetAllUser(res));
      });
    }
  }, [token, isAdmin, dispatch, callback]);

  const [showSuccessAlert, setShowSuccessAlert] = React.useState(true);
  const closeAlert = () => {
    setShowSuccessAlert(false);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const updateInfo = async() => {
    try {
      const res = await axios.patch(
        "/user/update",
        {
          name: name ? name : user.name,
          avatar: avatar ? avatar : user.avatar,
        },
        {
          headers: { Authorization: token },
        }
      );
      setData({ ...data, err: "", success: "Updated Successfully" });
    } catch (error) {
      return setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  const updatePassword = () => {
    try {
      axios.post(
        "/user/reset",
        {
          password,
        },
        {
          headers: { Authorization: token },
        }
      );
      setData({ ...data, err: "", success: "Updated Successfully" });
    } catch (error) {
      return setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  const handleUpdate = () => {
    if (name || avatar) updateInfo();
    if (password) updatePassword();
  };

  const changeAvatar = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file)
        return setData({ ...data, err: "No Files were Uploaded", success: "" });

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
      <div className="container">
        <div className="">
          {success && showSuccessAlert && (
            <Alert onClose={closeAlert}>
              {success}
            </Alert>
          )}
          <h2 className="mt-4 mb-4 text-center">My Profile</h2>
        </div>
        <div className="row"></div>
        <div className="row justify-content-between">
          <div className="col-md-4 border-right">
            <div
              className="d-flex flex-column align-items-center"
              style={{ marginLeft: 60, marginTop: 27 }}
            >
              <img
                className="rounded-circle"
                src={avatar ? avatar : user.avatar}
                style={{ width: 220, height: 220 }}
                alt=""
              />
              <span>
                <p></p>
                <input
                  className="form-control"
                  type="file"
                  name="file"
                  id="file_upload"
                  onChange={changeAvatar}
                />
              </span>
              <button
                className="profileBtn"
                disabled={loading}
                onClick={() => {
                  history.push("/editProfile");
                }}
              >
                Change Password
              </button>
            </div>
          </div>
          <div className="col-8">
            <div className="container profile">
              <div>
                <div className="form-group">
                  <label className="mb-3">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    defaultValue={user.name}
                    onChange={handleChangeInput}
                  />
                  <br></br>
                </div>

                <div className="form-group">
                  <label className="">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    defaultValue={user.email}
                    disabled
                    onChange={handleChangeInput}
                  />
                  <br></br>
                </div>

                <div className="mt-2 text-center">
                  <button
                    className="profileBtn"
                    disabled={loading}
                    onClick={handleUpdate}
                    style={{ width: "100%" }}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
