import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import "./style.css"
export default function TabsComponent({coins}) {
  const [value, setValue] =useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="1" />
            <Tab label="List" value="2" />
            
          </TabList>
     
        <TabPanel value="1">
            <div className='totalcoins'>
            {
                coins.map((coin, index)=> {
                  return( 
                    <div >
                        <div className='eachcoin'>
                            <div className='section'>
                            <img src={coin.image} alt="img" className='image'></img>
                            <div className='text'>
                                <p className='symbol'>{coin.symbol}</p>
                                <p className='names'>{coin.name}</p>
                            </div>
                            </div>
                            <div>
                                <p>Total Volume: {coin.total_volume}</p>
                                <p>Market Cap: {coin.market_cap}</p>
                            </div>
                        </div>
                    </div>
                  )})
            }
            </div>
        </TabPanel>
        <TabPanel value="2">
            <div>
            {
                
                coins.map((coin, index)=> <h1>{index+1}.{coin.id}</h1>)
            }
            </div>
            </TabPanel>
        
      </TabContext>
    </div>
  );
}