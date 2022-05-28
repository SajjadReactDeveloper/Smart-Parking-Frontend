import React, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blue } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import ConfirmDialog from '../../../../utils/DialogBox/ConfirmDialog';
import { useLocation, useHistory } from 'react-router-dom'
import './carDetails.scss';

export default function CarDetails() {
  const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''})
    const [data, setData] = useState();
    // useEffect = (async() => {
    //     const res = axios.get('/car/viewCar');
    //     setData(res);
    // })
    const [expanded, setExpanded] = React.useState(false);

    const history = useHistory();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const deleteUser = async(id) => {
      console.log(id);
      try {
        const res = await axios.delete(`/car/deleteApprovedCar/${id}`)
        alert(res.data.msg);
        history.push("/admin/viewApprovedVehicles");
      } catch (error) {
        
      }
    }

    const auth = useSelector(state => state.authReducer)
    const {user, isLogged} = auth;
    console.log(user)

    const location = useLocation();
    const car = location.state;
    console.log(car)

    // useEffect = async () => {
    //   const res = await axios.get(`/user/getInfo/${car.ownerId}`);
    //   console.log("Avatar ", res.data.avatar);
    //   setData(res.data.avatar);
    // };
  return (
    <div className="container mt-5">
      {/* <Card sx={{ maxWidth: 345, color: '#000' }} className = "container">
      <CardHeader
        avatar={
            <img style={{borderRadius: 100, width: 50, height: 50, marginRight: 7}} src={car.ownerAvatar}/>
        }
        title = {user.name}
        subheader="Car Owner"
      />
      <CardMedia
        component="img"
        height="194"
        image = {car.carImage}
        alt="Car"
      />
      <CardContent>
      <Typography variant="body2">
            <strong>Registration No:</strong> {car.regNo}
        </Typography>
        <Typography variant="body2">
            <strong>Brand:</strong> {car.brand}
        </Typography>
        <Typography variant="body2">
            <strong>Model:</strong> {car.model}
        </Typography>
        <Typography variant="body2">
            <strong>Color:</strong> {car.color}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => {
          deleteUser(car._id)
        }} style={{float: 'right', marginLeft: 'auto'}} variant="outlined" color='error' startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <ConfirmDialog confirmDialog = {confirmDialog} setConfirmDialog = {setConfirmDialog}/>
      </CardActions>
    </Card> */}
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          Car Detail's
        </h3>
        <div
          className="col-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: " center",
            height: 325,
          }}
        >
          <img
            src={car.carImage}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div
          className="col-4 p-3"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          <div
            className="userImage mb-3"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={car.ownerAvatar}
              alt=""
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <p style={{ marginLeft: 10, fontSize: 24 }}>{car.ownerName}</p>
          </div>
          <div className="carUserInfo">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="col-3">
                <p>Reg No: </p>
              </div>
              <div className="col-6">
                <p
                  style={{
                    color: "black",
                    backgroundColor: "wheat",
                    padding: 5,
                    width: 200,
                    boderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  {car.regNo}
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="col-3">
                <p>Brand: </p>
              </div>
              <div className="col-6">
                <p
                  style={{
                    color: "black",
                    backgroundColor: "wheat",
                    padding: 5,
                    width: 200,
                    boderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  {car.brand}
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="col-3">
                <p>Model: </p>
              </div>
              <div className="col-6">
                <p
                  style={{
                    color: "black",
                    backgroundColor: "wheat",
                    padding: 5,
                    width: 200,
                    boderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  {car.model}
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="col-3">
                <p>Color: </p>
              </div>
              <div className="col-6">
                <p
                  style={{
                    color: "black",
                    backgroundColor: "wheat",
                    padding: 5,
                    width: 200,
                    boderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  {car.color}
                </p>
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              deleteUser(car._id);
            }}
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon style={{ color: "red", marginTop: 10 }} />}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
