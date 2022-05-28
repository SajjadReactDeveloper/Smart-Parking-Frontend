import React from 'react'
import SideBar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import DataTable from '../../components/datatable/DataTable'
import ViewVehicles from '../../components/vehicles/ViewVehicles'
import './viewVehicle.scss'

function ViewVehicle() {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <ViewVehicles />
      </div>
    </div>
  )
}

export default ViewVehicle