import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notifications/Notifications'

const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}
export default function Register() {
    const [user, setUser] = React.useState(initialState);
    const {name, email, password, cf_password, err, success} = user;

    const handleChangeInput = e => {
        const {name, value} = e.target;
        setUser({...user, [name]:value, err: '', success: ''})
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/user/register', {
                name, email, password
            })
            alert(res.data.msg);
            setUser({...user, err: '', success: res.data.msg})
        } catch (error) {
            err.response.data.msg && setUser({...user, err: err.response.data.msg, success: ''})
        }
    }
    return (
        <div className='container'>
            <h2 className='text-center m-3'>Register</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label><br></br>
                    <input className='form-control' type="text" name="name" id="name" placeholder='Enter Name' value={name} onChange={handleChangeInput}/><br></br>
                </div>

                <div>
                    <label htmlFor="email">Email</label><br></br>
                    <input className='form-control' type="text" name="email" id="email" placeholder='Enter Email' value={email} onChange={handleChangeInput}/><br></br>
                </div>
                <div>
                    <label htmlFor="password">Password</label><br></br>
                    <input className='form-control' type="text" name="password" id="password" placeholder='Enter Password' value={password} onChange={handleChangeInput}/><br></br>
                </div>
                <div>
                    <label htmlFor="cf_password">Confirm Password</label><br></br>
                    <input className='form-control' type="text" name="cf_password" id="cf_password" placeholder='Confirm Password' value={cf_password} onChange={handleChangeInput}/><br></br> 
                </div>
                <div className='text-center'>
                    <button className='btn btn-success' type='submit'>Register</button>
                </div>
            </form><br></br>
            <p className='text-center'>Already an account? <Link to="/login">Login</Link></p>
        </div>
    )
}
