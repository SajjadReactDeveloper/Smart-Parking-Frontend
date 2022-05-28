import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notifications/Notifications";
import { dispatcLogin } from "../../../redux/actions/authAction";
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./login.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
  err: "",
  success: "",
};

export default function Login() {
  const [values, setValues] = React.useState({
    amount: "",
    email: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [user, setUser] = React.useState(initialState);
  const [passwordVisible, setPasswordVisible] = React.useState(true);
  const dispatch = useDispatch();
  const History = useHistory();
  const { name, email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", { email, password });
      setUser({ ...user, err: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);
      dispatch(dispatcLogin());
      History.push("/");
    } catch (error) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", {
        name,
        email,
        password,
      });
      console.log(res);
      setUser({ ...user, err: "", success: res.data.msg });
      removeClass();
    } catch (error) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseGoogle = async (response) => {
    console.log(response.tokenId);
    try {
      const res = await axios.post("/user/google_login", {
        tokenId: response.tokenId,
      });

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);

      dispatch(dispatcLogin());
      History.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseFacebook = async (response) => {
    try {
      const { accessToken, userID } = response;
      const res = await axios.post("/user/facebook_login", {
        accessToken,
        userID,
      });

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);

      dispatch(dispatcLogin());
      History.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const [login, setLogin] = React.useState(false);

  const addClass = () => {
    setLogin(true);
  };

  const removeClass = () => {
    setLogin(false);
  };

  const showPassword = () => {
    setPasswordVisible(true);
  };

  const hidePassword = () => {
    setPasswordVisible(false);
  };
  return (
    <div className="bodyss" >
      <div
        className={login ? "loginContainer right-panel-active" : "loginContainer"}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="" onSubmit={handleRegisterSubmit}>
            <h3 className="mt-2">Create Account</h3>
            <div className="social-container">
              <a href="">
                <FacebookOutlinedIcon />
              </a>
              <a href="">
                <InstagramIcon />
              </a>
              <a href="">
                <TwitterIcon />
              </a>
            </div>
            <span className="span">or Use your Email for Registration</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChangeInput}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChangeInput}
            />
            <input
              type={passwordVisible ? "password" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChangeInput}
            />
            <button className="Loginbtn" type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="" onSubmit={handleSubmit}>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="">
                <FacebookOutlinedIcon />
              </a>
              <a href="">
                <InstagramIcon />
              </a>
              <a href="">
                <TwitterIcon />
              </a>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder='Email' name='email' onChange={handleChangeInput}/>
            <input type={passwordVisible ? "password": "password"} placeholder='Password' name='password' onChange={handleChangeInput}/>
            <Link to="/forgotPassword">Forgot Password?</Link>
            <button className="Loginbtn" type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlayss">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, deserunt.
              </p>
              <button className="ghost" id="signIn" onClick={removeClass}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello Friends</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quae.
              </p>
              <button className="ghost" id="signUp" onClick={addClass}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
