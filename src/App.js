import React, {useEffect} from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom'
import Header from './components/header/header';
import Body from './components/body/Body';
import { useDispatch, useSelector } from 'react-redux';
import { dispatcLogin, fetchUser, dispatchGetUser } from './redux/actions/authAction'
import axios from 'axios';
import Admin from './components/body/admin/Admin';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const auth = useSelector(state => state.authReducer);
  const {isLogged, isAdmin} = auth;

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refreshToken', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatcLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])
  
  return (
    <Router>
    <div className="App">
      {/* <Header /> */}
      {isAdmin ? <Admin />: <Body />}
      {/* <Body /> */}
    </div>
  </Router>
  );
}

export default App;
