import React from 'react'
import SideBar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import DataTable from '../../components/datatable/DataTable'
import ApprovedCarDetails from '../../components/vehicles/ApprovedCarDetails'

function ApprovedCarDetail() {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <ApprovedCarDetails />
      </div>
    </div>
  )
}

export default ApprovedCarDetail