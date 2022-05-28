import React from 'react'
import SideBar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import DataTable from '../../components/datatable/DataTable'
import ViewVehicles from '../../components/vehicles/ViewVehicles'
import ViewApprovedVehicle from '../../components/vehicles/ViewApprovedVehicle'
import './viewVehicle.scss'

function ViewApprovedVehicles() {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <ViewApprovedVehicle />
      </div>
    </div>
  )
}

export default ViewApprovedVehicles