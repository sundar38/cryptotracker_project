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
        <div className='desc'>
        <div>Track crypto through a public api in real time.</div>
       <br></br>
        <div> Visit the dashboard to do so!</div>
        </div>
        <button> <Link to="/dashboard">Dashboard</Link></button>
        <img className='cryptoimg' src="https://media.istockphoto.com/id/1034363382/photo/coins-of-various-cryptocurrencies.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=-ia1tKJeGeoJ7bWN8i6Udzq92MZ9T9vi--OFT6fVsiA=" ></img>
    </div>
  )
}

export default MainComponent