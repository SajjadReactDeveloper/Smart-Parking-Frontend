import React from 'react'
import './viewVehicles.scss'
import { fetchAllUsers, dispatchGetAllUser } from '../../../../../redux/actions/usersAction'
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DoneIcon from '@mui/icons-material/Done';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const initialState = {
  regNo: '',
  brand: '',
  model: '',
  color: '',
  err: '',
  success: ''
}

function ViewVehicles() {
  const auth = useSelector(state => state.authReducer);
  const [cars, setCars] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  const [values, setUser] = React.useState(initialState);
    const {regNo, brand, model, color, err, success} = values;

    const handleChangeInput = e => {
        const {name, value} = e.target;
        console.log(name, value)
        setUser({...values, [name]:value, err: '', success: ''})
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/car/addCar', {
                regNo, brand, model, color
            })
            alert("Car Registered Successfully");
            setUser({...values, err: '', success: res.data.msg})
            setOpen(false);
            history.push("/admin/viewVehicles");
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
      const res = await axios.delete(`/car/deleteCar/${id}`)
      alert(res.data.msg);
    } catch (error) {
      
    }
  }

  const approveCar = async(id, regNo, brand, model, color) => {
      try {
        const res = await axios.post(`/car/approveCar`, {id, regNo, brand, model, color})
        alert(res.data.msg);
      } catch (error) {
          
      }
  }


    React.useEffect(async() => {
        const res = await axios.get(`/car/viewCar`)
        setCars(res.data)
    })

    const history = useHistory();
    const handleClick = (data) => {
      history.push({
        pathname: "/admin/car/approvedCarDetail",
        state: data,
      });
    }
  return (
    <div className='datatable'>
      <h3 className='text-center'>Car Registration Request</h3>
      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Car</DialogTitle>
        <DialogContent>
          <DialogContentText className='mb-3'>
            Please fill in all Fields
          </DialogContentText>
          <form action="" onSubmit={handleSubmit}>
          <TextField
            id="regNo"
            fullWidth
            label="Registration Number"
            type="text"
            autoComplete="current-password"
            variant="standard"
            name='regNo' onChange={handleChangeInput}
            style= {{marginBottom: 20}}
          />
          <TextField
            id="brand"
            label="Brand"
            type="text"
            autoComplete="current-password"
            variant="standard"
            fullWidth
            name='brand' onChange={handleChangeInput}
            style= {{marginBottom: 20}}
          />
          <TextField
            id="model"
            fullWidth
            label="Model"
            type="text"
            autoComplete="current-password"
            variant="standard"
            name='model' onChange={handleChangeInput}
            style= {{marginBottom: 20}}
          />
          <TextField
            id="color"
            fullWidth
            label="Color"
            type="text"
            autoComplete="current-password"
            variant="standard"
            name='color' onChange={handleChangeInput}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" style={{marginRight: 10}} onClick={handleSubmit}>Add Car</Button>
          <Button  variant="contained" onClick={handleClose} style={{marginRight: 10}}>
            Close
          </Button>
        </DialogActions>
      </Dialog> */}
      
        <div className="tableContainer">
        {/* <Button type='submit' variant="contained" onClick={handleClickOpen} style={{marginBottom: 10, float: 'right'}}>
          Add Car
        </Button> */}
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Registration Number</th>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Color</th>
              
            </tr>
          </thead>
          <tbody>
          {
            cars.map((car) => (
              <tr key={car._id} style = {{cursor: 'pointer'}} onClick = {() => {handleClick(car)}}>
                <td>{car.regNo}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.color}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
        </div>
    </div>
  )
}
export default ViewVehicles