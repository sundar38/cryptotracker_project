import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selectdays({days, dayschange}) {


  

  return (    
      <div>        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days? days:""}
          label="Age"
          onChange={dayschange} 
        >
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={90}>90 days</MenuItem>
          <MenuItem value={120}>120 days</MenuItem>          
        </Select>
      </div>
    
  );
}