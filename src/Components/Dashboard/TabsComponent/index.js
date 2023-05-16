import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import "./style.css"

import Grids from '../Grids';
import Lists from '../Lists';
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
            <Grids coin={coins}/>
            
        </TabPanel>
        <TabPanel value="2">
            <Lists coin={coins}/>
            
            </TabPanel>
        
      </TabContext>
    </div>
  );
}