import React from 'react'
import SideBar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import Profile from '../../components/profile/Profile'
import './profile.scss'

function Profiles() {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <Profile />
      </div>
    </div>
  )
}

export default Profiles;