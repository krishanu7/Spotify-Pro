import React from 'react'
import "../styles/Player.css"
import Sidebar from './Sidebar'
import Body from './Body'
const Player = ({spotify}) => {
  return (
    <div className='player'>
      <div className="player_body">
        {/* Sidebar */}
        <Sidebar/>
        {/* Body */}  
        <Body/>
      </div>
      {/* Footer */}
    </div>
  )
}

export default Player