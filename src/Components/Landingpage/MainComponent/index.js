import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
function MainComponent() {
  return (
    <div className='leftsection'>
        <div className='left'>
        <div>Track Crypto</div>
        <div>Real Time</div>
        </div>
        <div>Track crypto through a public api in real time. Visit the dashboard to do so!</div>
        <button> <Link to="/dashboard">Dashboard</Link></button>
        <button>Share App</button>
    </div>
  )
}

export default MainComponent