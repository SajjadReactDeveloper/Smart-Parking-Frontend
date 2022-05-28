import React from 'react'
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
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from "@mui/material/CircularProgress";

const initialState = {
    userId: '',
    complaintId: '',
  response: '',
  err: '',
  success: ''
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function ComplaintDetails() {
    const location = useLocation();
    const history = useHistory();
    const complaint = location.state;
    const [data, setData] = React.useState();

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const deleteComplaint = async(id) => {
        try {
            //const res = await axios.delete(`/complaint/deleteComplaint/${id}`);
            const result = await axios.patch(`/complaint/changeStatus/${id}`);
            alert(result.data.msg);
            history.push('/admin/complaints')
        } catch (error) {
            
        }
    }

    const auth = useSelector(state => state.authReducer);

  const [values, setUser] = React.useState(initialState);
    const {userId, complaintId, response, err, success} = values;

    const handleChangeInput = e => {
        const {name, value} = e.target;
        console.log(name, value)
        setUser({...values, [name]:value, err: '', success: ''})
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/response/addResponse', {
                userId:complaint.userId, complaintId:complaint._id, response
            })
            const result = await axios.patch(`/complaint/changeStatus/${complaint._id}`);
            history.push('/admin/complaints');
            
            alert(res.data.msg);
            setUser({...values, err: '', success: res.data.msg})
        } catch (error) {
            err.response.data.msg && setUser({...values, err: err.response.data.msg, success: ''})
        }
    }

    React.useEffect(async() => {
      const res = await axios.get(`/user/getInfo/${complaint.userId}`);
      setData(res.data)
    })
  return (
    <div className="container">
      {data ? (
        <Card sx={{ maxWidth: 500 }} className="container mt-5">
          <CardHeader
            avatar={<Avatar alt="Remy Sharp" src={data ? data.avatar : null} />}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={data ? data.name : null}
            subheader="Car Owner"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <b>Category </b>
              <b>{complaint.category}</b>
              <br />
              <b>Sub Category {complaint.subCategory}</b>
              <br />
              <b>Type {complaint.type}</b>
              <br />
              <b>Title {complaint.title}</b>
              <br />
              <b>Description {complaint.description}</b>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button
              variant="contained"
              style={{ marginRight: 10 }}
              onClick={handleExpandClick}
            >
              Response
            </Button>
            <Button
              variant="contained"
              onClick={() => deleteComplaint(complaint._id)}
            >
              Ignore
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Response:</Typography>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter Response"
                style={{ width: "100%", padding: 5 }}
                name="response"
                onChange={handleChangeInput}
              />
              <button
                className="btn btn-success mb-3"
                style={{ float: "right" }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </CardContent>
          </Collapse>
        </Card>
      ) : (
          <CircularProgress
            color="secondary"
            style={{
              marginTop: 100,
              marginLeft: 100,
            }}
          />
      )}
    </div>
  );
}

export default ComplaintDetails