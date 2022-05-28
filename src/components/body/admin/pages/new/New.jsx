import React from 'react'
import './new.scss'
import Sidebar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

function New() {
  const[file, setFile] = React.useState("")
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file): "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"} alt="" />
          </div>
          <div className="right">
            <form action="">
            <div className="formInput">
                Image: <label htmlFor="file"><DriveFolderUploadOutlinedIcon /></label>
                <input type="file" id='file' style={{display: 'none'}} onChange= {e => setFile(e.target.files[0]) }/>
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Sajjad123'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Sajjad Akhtar'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Sajjad123@gmail.com'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='0300 2134855'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password"/>
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Islamabad'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder='Islamabad'/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New