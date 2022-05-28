import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/NavBar/Navbar'
import Sidebar from '../../components/SideBar/Sidebar'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Tables from '../../components/table/Table'

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function UserDetails() {
    const location = useLocation();
    const history = useHistory();
    const user = location.state;
    const auth = useSelector((state) => state.authReducer);
    const { isAdmin } = auth;
  return (
    <div className='single'>
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <h1 className="title" style={{color: '#000'}}>Information</h1>
            <div className="item">
              <img src={user.avatar} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{user.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue" style={{color: '#000'}}>{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue" style={{color: '#000'}}>{user.role == 1 ? "Admin" : "Car Owner"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          <ResponsiveContainer width="100%" height = "100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default UserDetails