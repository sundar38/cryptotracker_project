import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import Header from '../Components/Common/Header'
import "../Components/Dashboard/TabsComponent/style.css"
function Coinpage() {
    const {id}=useParams()
    const [coindata, setCoindata]=useState([])
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((res)=> {
        console.log(res.data)
        setCoindata(res.data)
        })
    .catch(e=> console.log(e))
    },[id])

    
  return (
    <div>
    <Header/>   
    {/* <h1>id: {coindata.image.small}</h1> */}
     <div className='eachlists'>                         
            <li className='eachcoindesc'>               
                
                <span className='symbol'>{coindata.symbol}</span>
                <span className='names'>{coindata.name}</span >
                <span>{coindata.developer_data.closed_issues}</span> 
                {/* <span>{coindata.market_data.price_change_percentage_24h}</span> */}
             {/* {coindata.price_change_percentage_24h>0 ?
                    <div className='numbergroup'>
                        <p className='percent greencol'>{coindata.price_change_percentage_24h.toFixed(2)}%</p>
                        <div><TrendingUpRoundedIcon/></div>
                    </div>
                    :
                    <div className='numbergroup'>
                        <p className='percent redcol'>{coindata.price_change_percentage_24h.toFixed(2)}%</p>
                        <div><TrendingDownRoundedIcon/></div>
                    </div>
                }  */}
                </li>
                
        </div> 
     
    
    
    
    
    </div>

  )
}

export default Coinpage