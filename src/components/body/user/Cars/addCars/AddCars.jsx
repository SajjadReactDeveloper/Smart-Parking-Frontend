import React from "react";
import Navbar from '../../ClientPanel/Navbar/Navbar';
import Sidebar from '../../sidebar/Sidebar';
import AddCars from "../../../../body/Cars/AddCars";
import './addCars.scss';

function AddCar() {
  return (
    // <div>
    //   <Navbar />
    //   <div className="row">
    //     <div className="col-2">
    //       <Sidebar />
    //     </div>
    //     <div className="col-9">
    //       <AddCars />
    //     </div>
    //   </div>
    // </div>
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <AddCars />
      </div>
    </div>
  );
}

export default AddCar;
