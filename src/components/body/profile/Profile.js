import React from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showErrMsg, showSuccessMsg } from '../../utils/notifications/Notifications' 
import { fetchAllUsers, dispatchGetAllUser } from '../../../redux/actions/usersAction'

const initialState = {
    name: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Profile() {
    const auth = useSelector(state => state.authReducer);
    const token = useSelector(state => state.token);
    const users = useSelector(state => state.users);
    console.log("User",auth.user);

    const {user, isAdmin} = auth;
    const [data, setData] = React.useState(initialState);
    const [avatar, setAvatar] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [callback, setCallBack] = React.useState(false);

    const {name, password, cf_password, err, success} = data;

    const dispatch = useDispatch()
    React.useEffect(() => {
        if(isAdmin){
            fetchAllUsers(token).then((res) => {
                dispatch(dispatchGetAllUser(res))
            })
        }
    }, [token, isAdmin, dispatch, callback])

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]:value, err: '', success: ''})
    }

    const updateInfo = () => {
        try {
            axios.patch('/user/update', {
                name: name ? name: user.name,
                avatar: avatar ? avatar: user.avatar,

            }, {
                headers: {Authorization: token}
            })
            setData({...data, err: '', success: "Updated Successfully"})
        } catch (error) {
            return setData({...data, err: err.response.data.msg, success: ''})
        }
    }

    const updatePassword = () => {
        try {
            axios.post('/user/reset', {
                password
            }, {
                headers: {Authorization: token}
            })
            setData({...data, err: '', success: "Updated Successfully"})
        } catch (error) {
            return setData({...data, err: err.response.data.msg, success: ''})
        }
    }

    const handleUpdate = () => {
        if(name || avatar) updateInfo();
        if(password) updatePassword();
    }

    const changeAvatar = async(e) => {
        e.preventDefault();
        try {
            const file = e.target.files[0];
            if(!file) return setData({...data, err: "No Files were Uploaded", success: ''})

            // if(file.size > 1024 * 1024)
            //     return setData({...data, err: "Size too Large", success: ''});
        
            if(file.type != 'image/jpeg' && file.type != 'image/png')
                return setData({...data, err: "File Format is Incorrect", success: ''});

            let formData = new FormData();
            formData.append('file', file);

            setLoading(true);
            const res = await axios.post('/api/uploadAvatar', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })

            setLoading(false);
            setAvatar(res.data.url)
        
        } catch (error) {
            return setData({...data, err: err.response.data.msg, success: ''})
        }
    }
    
    return (
        <>
        <div className='container'>
        {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
            {loading && <h3>Loading...</h3>}
        </div>
        <div className='container'>
            <div>
                <h2 className='text-center m-3'>{isAdmin ? "Admin Profile": "User Profile"}</h2>

                <div className='text-center'>
                    <img style={{borderRadius: 100, width: 100, height: 100}} src={avatar? avatar: user.avatar}/>
                    <span>
                        <p></p>
                        <input className='form-control' type="file" name='file' id='file_upload' onChange={changeAvatar}/>
                    </span>
                </div>

                <div className="form-group">
                    <label className='mb-3'>Name</label>
                    <input className='form-control' type="text" name="name" id="name" placeholder='Name' defaultValue={user.name} onChange={handleChangeInput}/><br></br>
                </div>

                <div className="form-group">
                    <label className='mb-3'>Email</label>
                    <input className='form-control' type="text" name="email" id="email" placeholder='email' defaultValue={user.email} disabled onChange={handleChangeInput}/><br></br>
                </div>

                <div className="form-group">
                    <label className='mb-3'>Password</label>
                    <input className='form-control' type="text" name="password" id="password" placeholder='password' value={password} onChange={handleChangeInput}/><br></br>
                </div>

                <div className="form-group">
                    <label className='mb-3'>Confirm Password</label>
                    <input className='form-control' type="text" name="cf_password" id="cf_password" placeholder='Confirm password' value={cf_password} onChange={handleChangeInput}/><br></br>
                </div>
                <div className='text-center m-3'>
                <button className='btn btn-success' disabled = {loading} onClick={handleUpdate}>Update</button>
                </div>
            </div>
            <div>
                <h2>{isAdmin? "Users": "My Orders"}</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                        {
                                            user.role == 1
                                            ? "Admin"
                                            : "User"
                                        }
                                        </td>
                                        <td>
                                            <Link to = {`/edit_user/${user._id}`}>
                                                <i className='fas fa-edit' title='Edit'></i>
                                            </Link>
                                            <i className='fas fa-trash-alt' title='Delete'></i>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;