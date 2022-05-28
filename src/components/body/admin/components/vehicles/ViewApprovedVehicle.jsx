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
import { useHistory } from 'react-router-dom'
import axios from 'axios';

function ViewApprovedVehicle() {
  const [cars, setCars] = React.useState([]);

    React.useEffect(async() => {
        const res = await axios.get(`/car/viewApprovedCar`)
        setCars(res.data)
    })

    const history = useHistory();
    const handleClick = (data) => {
      history.push({
        pathname: '/admin/car/detail',
        state: data
      });
    }
  return (
    <div className="datatable">
      <h3 className="text-center mb-3 mt-3">Registered Cars</h3>
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
          {cars.map((car) => (
            <tr
              key={car._id}
              onClick={() => {
                handleClick(car);
              }}
              style = {{cursor: 'pointer'}}
            >
              <td>{car.regNo}</td>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewApprovedVehicle