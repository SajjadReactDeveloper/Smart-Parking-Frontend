import React from 'react'
import SideBar from '../../components/chat/SideBar'
import SideBarChat from '../../components/chat/SideBarChat'
import Chats from '../../components/chat/Chats'
import './chat.scss'

function Chat() {
  return (
    <div className='chating'>
        <div className="app-bodies">
          {/* <SideBar /> */}
          <SideBarChat />
          <Chats />
        </div>
    </div>
  )
}

export default Chat