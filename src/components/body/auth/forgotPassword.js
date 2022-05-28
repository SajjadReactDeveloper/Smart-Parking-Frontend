import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import EmailIcon from '@mui/icons-material/Email';
import {successMsg} from '../../utils/notifications/Notifications'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import './forgotPassword.css'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = React.useState(initialState);
    const {email, err, success} = data

    const [showSuccessAlert, setShowSuccessAlert] = React.useState(true);

    const closeAlert = () => {
        setShowSuccessAlert(false);
    }

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]:value, err: '', success: ''})
    }

    const forgotPassword = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/forgot', {email})
            return setData({...data, err: '', success: res.data.msg})
        } catch (error) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
    }
    return (
        // <div className='container'>
        //     <h2 className='text-center m-3'>Forgot Password</h2>
        //     <div>
        //         {err && showErrMsg(err)}
        //         {success && showSuccessMsg(success)}

        //         <label className='mb-3' htmlFor='email'>Enter Email</label><br></br>
        //         <input className='form-control' type="text" name="email" id="email" placeholder='Enter Email' value={email} onChange={handleChangeInput} /><br></br>

        //         <div className='text-center'>
        //         <button className='btn btn-success text-center' onClick={forgotPassword}>Verify Your Email</button>
        //         </div>
        //     </div>
        // </div>

        <div className="body">
            <div className="containers">
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            
                        </div>
                    </div>
                </div>
            <div className="form-container sign-up-container">
                <form action="">
                    {success && showSuccessAlert && <Alert onClose={closeAlert}>{success}</Alert>}
                    <h1 className='forgot'>Forgot Your {"\n"} Password?</h1>
                    <span>Enter the email address associated with your account</span>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment"
                            type='email'
                            onChange={handleChangeInput}
                            name = 'email'
                            placeholder='Enter Email Address'
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            }
                            label="Email"
                        />
                    </FormControl>
                    <button type='submit' onClick={forgotPassword}>Next</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default ForgotPassword
