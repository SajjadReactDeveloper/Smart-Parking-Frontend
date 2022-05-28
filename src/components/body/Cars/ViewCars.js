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
import ConfirmDialog from '../../utils/DialogBox/ConfirmDialog';

export default function ViewCars() {
  const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''})
    const [data, setData] = useState();
    // useEffect = (async() => {
    //     const res = axios.get('/car/viewCar');
    //     setData(res);
    // })
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const auth = useSelector(state => state.authReducer)
    const {user, isLogged} = auth;
  return (
    <div className='container mt-5'>
        
        <Card sx={{ maxWidth: 345 }} className = "container">
      <CardHeader
        avatar={
            <img style={{borderRadius: 100, width: 50, height: 50, marginRight: 7}} src={user.avatar}/>
        }
        title = {user.name}
        subheader="Car Owner"
      />
      <CardMedia
        component="img"
        height="194"
        image="car.jpg"
        alt="Car"
      />
      <CardContent>
      <Typography variant="body2">
            <strong>Registration No:</strong> LZC 3509
        </Typography>
        <Typography variant="body2">
            <strong>Brand:</strong> Toyota
        </Typography>
        <Typography variant="body2">
            <strong>Model:</strong> 2004
        </Typography>
        <Typography variant="body2">
            <strong>Color:</strong> Black
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon sx={{ color: red[500] }}/>
        </IconButton>
        <Button onClick={() => {
          setConfirmDialog({
            isOpen: true,
            title: 'Are you sure to delete this car?',
            subTitle: 'You canot undo this operation' 
          })
        }} style={{float: 'right', marginLeft: 'auto'}} variant="outlined" color='error' startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <ConfirmDialog confirmDialog = {confirmDialog} setConfirmDialog = {setConfirmDialog}/>
      </CardActions>
    </Card>
    </div>
  )
}
