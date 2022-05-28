import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Dashboard from './dashboard/Dashboard';

function User() {
    const auth = useSelector(state => state.authReducer);
    const {isLogged, isAdmin} = auth;
  return (
    <div>
        <Switch>
            <Route path= "/" exact component={Dashboard} />
        </Switch>
    </div>
  )
}

export default User