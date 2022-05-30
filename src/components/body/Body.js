import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';

//? Auth
import Login from './auth/Login';
import SignUp from './auth/Register'
import ActivationEmail from './auth/ActivationEmail';
import ForgotPassword from './auth/forgotPassword';
import ResetPassword from './auth/ResetPassword';
// import Profile from './profile/Profile';
import EditUser from './profile/EditUser';
import ComplaintStatus from './complaints/ComplaintStatus';
import MyComplaints from './complaints/MyComplaints';
import ComplaintDetails from './complaints/ComplaintDetails';
import Admin from './admin/Admin';
import Home from './Home/Home';
import About from './admin/pages/about/About';
import Contact from './admin/pages/contact/Contact'

//Main Page
import Navbar from '../header/Navbar';

//! Cars
import ViewCars from './Cars/ViewCars';
import AddCars from './Cars/AddCars';
import viewCar from './Cars/viewCar';
import ViewCarDetail from './Cars/ViewCarDetail'
import ViewDetails from './Cars/ViewDetails'
import ViewRequestDetails from './Cars/ViewRequestDetails'

//* Complaints
import RegisterComlaint from './complaints/RegisterComlaint';

//User
import Dashboard from '../body/user/dashboard/Dashboard.jsx'
import AddCar from '../body/user/Cars/addCars/AddCars';
import UserViewCar from '../body/user/Cars/addCars/viewCars/UserViewCar';
import RequestedCars from '../body/user/Cars/addCars/viewCars/RequestedCars';
import AddComplaint from '../body/user/Complaints/AddComplaint';
import ViewComplaint from '../body/user/Complaints/ViewComplaint';
import ComplaintDetail from '../body/user/Complaints/ComplaintDetail'
import UserComplaintStatus from '../body/user/Complaints/UserComplaintStatus';
import Chat from '../body/user/chat/Chatting';
import Profiles from '../body/user/ClientPanel/profile/Profile';
import EditProfile from '../body/admin/pages/profile/EditProfile'

function Body() {
    const auth = useSelector(state => state.authReducer);
    const {isLogged, isAdmin} = auth;

    return (
        <section>
            <Switch>
                <Route path= "/" exact component={Home} />
                <Route path= "/home" exact component={Home} />
                <Route path= "/login" exact component={Login} />
                <Route path= "/register" exact component={SignUp} />
                <Route path= "/forgotPassword" exact component={ForgotPassword} />
                <Route path= "/user/reset/:token" exact component={ResetPassword} />
                <Route path= "/user/activate/:activationToken" exact component={ActivationEmail} />
                <Route path= "/profile" exact component={Profiles} />
                <Route path= "/edit_user/:id" exact component={EditUser} />
                {/* <Route path= "/addCar" exact component={AddCars} /> */}
                {/* <Route path= "/viewCar" exact component={ViewCars} /> */}
                {/* <Route path= "/viewCars" exact component={viewCar} />
                <Route path= "/registerComplaint" exact component={RegisterComlaint} />
                <Route path= "/complaintStatus" exact component={ComplaintStatus} />
                <Route path= "/myComplaints" exact component={MyComplaints} />
                <Route path= "/complaintDetails" exact component={ComplaintDetails} /> */}
                <Route path= "/admin" exact component={Admin} />
                <Route path= "/about" exact component={About} />
                <Route path= "/contact" exact component={Contact} />
                {/* <Route path= "/" exact component={isAdmin ? DashBoard: DashBoard2} /> */}
                <Route path= "/dashboard" exact component={Dashboard} />
                <Route path= "/addCar" exact component={AddCar} />
                <Route path= "/viewCar" exact component={UserViewCar} />
                <Route path= "/viewRequestedCar" exact component={RequestedCars} />
                <Route path= "/viewCarDetail" exact component={ViewDetails} />
                <Route path= "/viewRequestCarDetail" exact component={ViewRequestDetails} />
                <Route path= "/registerComplaint" exact component={AddComplaint} />
                <Route path= "/myComplaint" exact component={ViewComplaint} />
                <Route path= "/complaintDetails" exact component={ComplaintDetail} />
                <Route path= "/complaintStatus" exact component={UserComplaintStatus} />
                <Route path= "/chat" exact component={Chat} />
                <Route path= "/editProfile" exact component={EditProfile} />

            </Switch>
        </section>
    )
}

export default Body
