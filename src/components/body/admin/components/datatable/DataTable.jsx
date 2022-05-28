import React from 'react'
import './datatable.scss'
import { fetchAllUsers, dispatchGetAllUser } from '../../../../../redux/actions/usersAction'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  role: '',
  cf_password: '',
  err: '',
  success: ''
}

function DataTable() {
  const auth = useSelector(state => state.authReducer);
  const token = useSelector(state => state.token);
  const users = useSelector(state => state.users);
  const {user, isAdmin} = auth;
  const [callback, setCallBack] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const [values, setUser] = React.useState(initialState);
    const {name, email, password, role, cf_password, err, success} = values;

    const handleChangeInput = e => {
        const {name, value} = e.target;
        console.log(name, value)
        setUser({...values, [name]:value, err: '', success: ''})
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        alert(email)
        console.log(name, email, password)
        try {
            const res = await axios.post('/user/register', {
                name, email, password, role
            })
            alert(res.data.msg);
            setUser({...values, err: '', success: res.data.msg})
        } catch (error) {
            err.response.data.msg && setUser({...values, err: err.response.data.msg, success: ''})
        }
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async(id) => {
    console.log(id);
    try {
      const res = await axios.delete(`/user/delete/${id}`)
      alert(res.data.msg);
    } catch (error) {
      
    }
  }

  const dispatch = useDispatch()
    React.useEffect(() => {
        if(isAdmin){
            fetchAllUsers(token).then((res) => {
                dispatch(dispatchGetAllUser(res))
            })
        }
    }, [token, isAdmin, dispatch, callback])

    const history = useHistory();
    const handleClick = (data) => {
      history.push({
        pathname: '/admin/user/detail',
        state: data
      });
    }
  return (
    <div className='datatable'>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <DialogContentText className='mb-3'>
            Please fill in all Fields
          </DialogContentText>
          <form action="" onSubmit={handleSubmit}>
          <TextField
            id="name"
            fullWidth
            label="Name"
            type="text"
            autoComplete="current-password"
            variant="standard"
            name='name' onChange={handleChangeInput}
            style= {{marginBottom: 20}}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            autoComplete="current-password"
            variant="standard"
            fullWidth
            name='email' onChange={handleChangeInput}
            style= {{marginBottom: 20}}
          />
          <TextField
            id="password"
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            name='password' onChange={handleChangeInput}
          />
            <InputLabel variant="standard" style={{marginTop: 20}} htmlFor="uncontrolled-native">
          Role
        </InputLabel>
        <NativeSelect
          defaultValue={0}
          onChange={handleChangeInput}
          fullWidth
          inputProps={{
            name: 'role',
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>Admin</option>
          <option value={0}>Car Owner</option>
          <option value={2}>Guard</option>
        </NativeSelect>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" style={{marginRight: 10}} onClick={handleSubmit}>Add User</Button>
          <Button  variant="contained" onClick={handleClose} style={{marginRight: 10}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
        <div className="tableContainer">
        <Button type='submit' variant="contained" onClick={handleClickOpen} style={{marginBottom: 10, float: 'right'}}>
          Add User
        </Button>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user) => (
              <tr key={user._id} onClick={() => handleClick(user)} style = {{cursor: 'pointer'}}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role == 1
                    ? "Admin"
                    : "User"
                  }
                </td>
                <td style={{paddingLeft: 20}}>
                  <img src={user.avatar} alt="" style={{width: 30, height: 30, borderRadius: 50}} />
                </td>
                <td style={{paddingLeft: 30}}>
                  <Button onClick = {() => deleteUser(user._id)}><DeleteIcon color='error' /></Button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
        </div>
    </div>
  )
}
export default DataTable