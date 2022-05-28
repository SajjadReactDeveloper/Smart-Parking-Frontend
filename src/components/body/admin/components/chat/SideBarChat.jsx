import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import './sidebarChat.scss'
import { fetchAllUsers, dispatchGetAllUser } from '../../../../../redux/actions/usersAction';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material';

function SideBarChat() {
    const auth = useSelector(state => state.authReducer)
    const {user, isLogged} = auth;
    const token = useSelector(state => state.token);
    const users = useSelector(state => state.users);
    const [callback, setCallBack] = React.useState(false);
    const {isAdmin} = auth;
    const [message, setMessage] = React.useState([]);

    const [keyword, setKeyword] = React.useState(); 

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
        pathname: '/admin/chat',
        state: data
      });
    }

    React.useEffect(async() => {
        const res = await axios.get('/message/sync');
        setMessage(res.data);
    })

  return (
      <>
      <div className='sidebars'>
        <div className="sidebar_header">
            <Avatar src={user.avatar}/>
            <div className="header_right">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className="sidebar_search">
            <div className="sideBar_SearchContainer">
                <SearchOutlinedIcon className='searchIcon ml-5'/>
                <input type="text" name='keyword' placeholder='Search or start a new chat' 
                    onChange=
                    {
                        (e) => {
                            setKeyword(e.target.value)
                        }
                    }
                />
            </div>
        </div>
        <div className="sidebar_chat">
        {users.filter(users => keyword ? users.name.toUpperCase().startsWith(keyword.toUpperCase()) : (users.message == true && users._id !== user._id)).map((user) => (
            <div className='sidebarChat' onClick = {() => {handleClick(user)}}>
                <Avatar src={user.avatar}/>
                <div className="sidebarchatInfo">
                    <span className='chatHeaderName'>{user.name}</span>
                </div>
            </div>
        ))}
        </div>
    </div>
        
    </>
  )
}

export default SideBarChat