import React from 'react'
import ViewCarDetail from './ViewCarDetail'
import Navbar from '../../../components/body/user/ClientPanel/Navbar/Navbar'
import Sidebar from '../../../components/body/user/sidebar/Sidebar'
import './viewDetails.scss';

function ViewDetails() {
  return (
    <div>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <ViewCarDetail />
        </div>
      </div>
    </div>
  );
}

export default ViewDetails