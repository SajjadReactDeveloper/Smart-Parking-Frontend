import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import ViewVehicle from './pages/vehicles/ViewVehicle';
import ViewApprovedVehicles from './pages/vehicles/ViewApprovedVehicles'
import Complaints from './pages/complaints/Complaints';
import ComplaintDetails from './pages/complaints/ComplaintDetails';
import Profile from './pages/profile/Profile';
import UserDetail from './pages/userDetail/UserDetail';
import CarDetail from './pages/vehicles/CarDetail';
import ApprovedCarDetail from './pages/vehicles/ApprovedCarDetail';
import Chat from './pages/chat/Chat';
import Dashboard from '../../body/user/dashboard/Dashboard';
import AddCar from '../../body/user/Cars/addCars/AddCars';
import UserViewCar from '../../body/user/Cars/addCars/viewCars/UserViewCar';
import AddComplaint from '../../body/user/Complaints/AddComplaint'
import ViewComplaint from '../../body/user/Complaints/ViewComplaint'
import UserComplaintStatus from '../../body/user/Complaints/UserComplaintStatus'

function Admin() {
  return (
    <section>
        <Switch>
            <Route path= "/" exact component={Home} />
            <Route path= "/admin/login" exact component={Login} />
            <Route path= "/admin/user" exact component={List} />
            {/* <Route path= "/admin/user/:userId" exact component={Single} /> */}
            <Route path= "/admin/new" exact component={New} />
            <Route path= "/admin/viewVehicles" exact component={ViewVehicle} />
            <Route path= "/admin/viewApprovedVehicles" exact component={ViewApprovedVehicles} />
            <Route path= "/admin/complaints" exact component={Complaints} />
            <Route path= "/admin/complaintDetails" exact component={ComplaintDetails} />
            <Route path= "/admin/profile" exact component={Profile} />
            <Route path= "/admin/user/detail" exact component={UserDetail} />
            <Route path= "/admin/car/detail" exact component={CarDetail} />
            <Route path= "/admin/car/approvedCarDetail" exact component={ApprovedCarDetail} />
            <Route path= "/admin/chat" exact component={Chat} />
            {/* <Route path= "/dashboard" exact component={Dashboard} />
            <Route path= "/addCar" exact component={AddCar} />
            <Route path= "/viewCar" exact component={UserViewCar} />
            <Route path= "/registerComplaint" exact component={AddComplaint} />
            <Route path= "/myComplaint" exact component={ViewComplaint} />
            <Route path= "/complaintStatus" exact component={UserComplaintStatus} /> */}
        </Switch>
    </section>
  )
}

export default Admin