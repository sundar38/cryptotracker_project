import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom'
import "./styles.css"
export default function TemporaryDrawer() {
  const [open, setOpen] =useState("false")

  

  return (
    <div>
          {/* <IconButton onClick={()=>setOpen(true)}>
            <MenuRoundedIcon/>
          </IconButton> */}
          <Drawer anchor={"left"} open={open} onClose={()=> setOpen(false)}>
          <div className='sidelinks'>
          <Link to="/" className='links'>Home</Link>        
        <Link to={"/compare"} className='links'>Compare</Link>
        <Link to={"/watchlist"} className='links'>Watchlist</Link>
        <Link to={"/dashboard"} className='links'>DashBoard</Link>
          </div>
          </Drawer>
    </div> 
   
  );
}