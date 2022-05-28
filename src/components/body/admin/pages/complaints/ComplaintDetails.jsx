import React from 'react'
import SideBar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar';
import ComplaintDetails from '../../components/Complaints/ComplaintDetails';
import './ComplaintDetails.scss'

function ComplaintDetail() {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <ComplaintDetails />
      </div>
    </div>
  )
}

export default ComplaintDetail