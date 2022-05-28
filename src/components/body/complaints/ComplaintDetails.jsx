import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";

function ComplaintDetails() {
    const location = useLocation();
    const history = useHistory();
    const complaint = location.state;

    const [response, setresponse] = React.useState()
    const [data, setData] = React.useState()

    const deleteComplaint = async (id) => {
      try {
        const res = await axios.delete(`/complaint/deleteComplaint/${id}`);
        alert(res.data.msg);
        history.push("/myComplaint");
      } catch (error) {}
    };

    React.useEffect(async() => {
      console.log(complaint.userId, complaint._id);
      const res = await axios.post(`/response/viewResponse`, {userId: complaint.userId, complaintId: complaint._id});
      setresponse(res.data);
      const resp = await axios.get(`/user/getInfo/${complaint.userId}`);
      setData(resp.data);
    })
  return (
    <div>
      {data ? (
        <div className="main">
          <body>
            <div className="row">
              <div className="col-10">
                <Card sx={{ maxWidth: 500 }} className="container mt-5">
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} src={data.avatar} />
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={data.name}
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
                      <br />
                      <b>Status {complaint.status}</b>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    {complaint.status == "Active" ? (
                      <Button
                        variant="contained"
                        onClick={() => deleteComplaint(complaint._id)}
                      >
                        Delete
                      </Button>
                    ) : null}
                  </CardActions>
                  {response ? (
                    <CardContent>
                      <Typography>
                        <b>Response From Admin: </b>
                        <p>{response.response}</p>
                      </Typography>
                    </CardContent>
                  ) : // <CircularProgress color="secondary" />
                  null}
                </Card>
              </div>
            </div>
          </body>
        </div>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </div>
  );
}

export default ComplaintDetails