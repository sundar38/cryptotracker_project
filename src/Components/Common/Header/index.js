import React from 'react'
import "./styles.css"

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
      <a href="/" className='logo'>
        CryptoTracker
      </a>
      <div className='right'>
        <Link to="/" className='links'>Home</Link>        
        
        <Link to={"/dashboard"} className='links'>DashBoard</Link>
      </div>
      {/* <div className='drawer'>
      <TemporaryDrawer/>
      </div> */}
    </div>
  )
}

export default Header