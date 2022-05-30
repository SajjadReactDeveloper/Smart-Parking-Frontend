import React from 'react'
import  Navbar from '../ClientPanel/Navbar/Navbar';
import Sidebar from '../../user/sidebar/Sidebar'
import UserDashboard from './UserDashboard'
import './dashboard.scss'
 
function Dashboard() {
  return (
    <div className="list" style={{ maxHeight: "100vh" }}>
      <Sidebar />
      <div className="listContainer" style={{ backgroundColor: "#022140" }}>
        <Navbar />
        <UserDashboard />
      </div>
    </div>
  );
}

export default Dashboard;