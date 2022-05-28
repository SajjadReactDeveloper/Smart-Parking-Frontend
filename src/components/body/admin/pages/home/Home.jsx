import React from 'react'
import "./home.scss"
import Sidebar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
                <Widgets />
                <Widgets />
                <Widgets />
                <Widgets />
            </div>
            <div className="charts">
              <Featured />
              <Chart />
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <Table />
            </div>
        </div>
    </div>
  )
}

export default Home