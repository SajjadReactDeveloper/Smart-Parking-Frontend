import React from 'react'
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import './chats.scss'

const initialState = {
    sender: '',
    receiver: '',
    message: '',
    received: '',
    timeStamp: '',
    err: '',
    success: ''
  }

function Chats() {
    const [values, setUser] = React.useState(initialState);
    const {sender, receiver, message, received, err, success} = values;
    const [messages, setMessage] = React.useState([]);

    const auth = useSelector(state => state.authReducer)
    const {user, isLogged} = auth;

    const handleChangeInput = e => {
        const {name, value} = e.target;
        console.log(name, value)
        setUser({...values, [name]:value, err: '', success: ''})
    } 

    const location = useLocation();
    const users = location.state;

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/message/new', {
                sender: user._id, receiver: users._id, message, received: false, Hours: new Date().getHours(), Minutes: new Date().getMinutes()
            })
            setUser({...values, err: '', success: res.data.msg})
            const resp = await axios.patch(`/user/updateMessage/${users._id}`)
        } catch (error) {
            err.response.data.msg && setUser({...values, err: err.response.data.msg, success: ''})
        }
    }

    React.useEffect(async() => {
        const res = await axios.post(`/message/syncSpecific`, {receiver: users._id})
        setMessage(res.data)
    })

    const deleteMessage = (id) => {
        try {
            const res = axios.delete(`/message/deleteMessage/${id}`);
            alert(res.data.msg);
        } catch (error) {
            
        }
    }

    const deleteAll = async (id) => {
        try {
            const res = axios.post(`/message/deleteAll`, {id});
            const resp = await axios.patch(`/user/updateMessageFalse/${users._id}`)
            alert(res.data.msg);
        } catch (error) {
            
        }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
    <>
        {users ? <div className='chatss'>
        <div className="caht_header">
            <Avatar src={users.avatar}/>
            <div className="chatHeader_info">
                <h3>{users.name}</h3>
            </div>
            <div className="chatHeader_right">
            <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Clear Chat"
            >
                <IconButton onClick={() => deleteAll(users._id)}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            </div>
        </div>

        <div className="chat-body">
            {
                messages.map((message) => (
                    <p className= {message.receiver == user._id ? 'chatMessage' : 'chatMessage chatReceiver'}>
                        <div style = {{display: 'flex'}}>
                            <Avatar src={message.receiver == user._id ? users.avatar : user.avatar} style={{width: 25, height: 25, marginRight: 10}}/>{message.message}
                            <span className="chat_time">
                                {message.Hours % 12 || 12}:{message.Minutes} {message.Hours >= 12 ? 'PM' : 'AM'}
                            </span>
                            {message.receiver !== user._id ? <CheckIcon id = "checkIcon" className='checkIcon'/> : null}
                            <IconButton size='small' className = 'deleteIcon' onClick={() => deleteMessage(message._id)}>
                                <DeleteIcon color='error' fontSize='12px' style = {{marginLeft: 5}} />
                            </IconButton>
                        </div>
                    </p>
                ))
            }
        </div>

        <div className="chat_footer">
            <form action="" style={{position: 'relative'}}>
                <input type="text" name='message' placeholder='Type Message' onChange={handleChangeInput}/>
                <SendOutlinedIcon onClick={handleSubmit} style = {{position: 'absolute', right: 15, top: 10, cursor: 'pointer'}}/>
            </form>
        </div>
    </div> : null}
    </>
  )
}

export default Chats