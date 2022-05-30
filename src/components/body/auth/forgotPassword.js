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
        <div className="bodyss">
            <div className="containers">
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h3>Forgot Password?</h3>
                            <p>Don't worry it happens. We'll email you instructions to reset your password.</p>
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
