import React from 'react'
import SideBar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import UserDetails from '../../components/userDetail/UserDetails'
import './userDetail.scss'

function UserDetail() {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <UserDetails />
      </div>
    </div>
  )
}

export default UserDetail;