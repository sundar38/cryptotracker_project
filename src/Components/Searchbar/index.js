import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./style.css"
function Searchbar({setSearch}) {
  return (
    <div className='searchfix'>
        <div className='symbol'><SearchRoundedIcon/></div>
        <input type='text' placeholder='enter search' onChange={e=> setSearch(e.target.value)}></input>
    </div>
  )
}

export default Searchbar