import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Chat from '../chat/Chat';
import './chat.scss';

function Chattng() {
  return (
    // <div>
    //   {/* <Navbar /> */}
    //   <div className="row">
    //     <div className="col-2">
    //       <Sidebar />
    //     </div>
    //     <div className="col-9">
    //       <div className="chatings">
    //         <div className="app-bodies">
    //           <Chat />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Chat />
      </div>
    </div>
  );
}

export default Chattng;
