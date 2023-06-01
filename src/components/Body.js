import React from 'react'
import Header from './Header'
import "../styles/Body.css"

const Body = ({spotify}) => {
  return (
    <div className='body'>
      <Header spotify={spotify}/>
    </div>
  )
}

export default Body
