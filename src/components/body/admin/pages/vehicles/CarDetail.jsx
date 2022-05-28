import React from 'react'
import SideBar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import DataTable from '../../components/datatable/DataTable'
import CarDetails from '../../components/vehicles/CarDetails'

function CarDetail() {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <CarDetails />
      </div>
    </div>
  )
}

export default CarDetail