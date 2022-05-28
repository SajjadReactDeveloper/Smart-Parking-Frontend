import React from 'react'
import SideBar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import ViewComplaints from '../../components/Complaints/ViewComplaints'
import './complaints.scss'

function Complaints() {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <ViewComplaints />
      </div>
    </div>
  )
}

export default Complaints