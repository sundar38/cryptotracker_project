import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import Header from '../Components/Common/Header'
import "../Components/Dashboard/TabsComponent/style.css"
import Lists from '../Components/Dashboard/Lists';
import { convertintoobject } from '../functions/convertintoobject';

 function Coinpage() {
    const {id}=useParams()
    const [coindata, setCoindata]=useState()
    const [coininfo, setCoininfo]=useState({})
    const [loading, setLoading]=useState(true)
    useEffect(()=>async ()=>{
        if(id){
            const res=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            console.log(res.data);
            setCoindata(res.data)
            setLoading(false)        
        }    
    },[id])
    //const image=`${coindata.image.small}`
    //console.log(coindata);

    
  return (
    <div>
    <Header/>
    {loading?(<h1>hi</h1>):(<div className='eachlists'>                         
            <li className='eachcoindesc'>      
                <span><img src={coindata.image.large} className='image'></img></span>     
                <span className='symbol'>{coindata.symbol}</span>
                <span className='names'>{coindata.name}</span >
                <span>{coindata.id}</span>
                <span>{coindata.community_score}</span>
                <span>{coindata.liquidity_score}</span> 
                           
                <span>{coindata.developer_data.closed_issues}</span> 
                 <span>{coindata.market_data.price_change_percentage_24h}</span>
                {coindata.market_data.price_change_percentage_24h>0 ?
                    <div className='numbergroup'>
                        <p className='percent greencol'>{coindata.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                        <div><TrendingUpRoundedIcon/></div>
                    </div>
                    :
                    <div className='numbergroup'>
                        <p className='percent redcol'>{coindata.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                        <div><TrendingDownRoundedIcon/></div>
                    </div>
                }  
                </li>                
        </div>     )
 }
    
   
    {/* <img src="image"></img>    */}
    {/* <h1>{coindata.description.en}</h1>
     <div className='eachlists'>                         
            <li className='eachcoindesc'>      
                <span>{coindata.coingecko_rank}</span>     
                <span className='symbol'>{coindata.symbol}</span>
                <span className='names'>{coindata.name}</span >
                <span>{coindata.id}</span>
                <span>{coindata.community_score}</span>
                <span>{coindata.liquidity_score}</span> 
                <span>{coindata.hashing_algorithm}</span>               
                <span>{coindata.developer_data.closed_issues}</span> 
                 <span>{coindata.market_data.price_change_percentage_24h}</span>
                {coindata.market_data.price_change_percentage_24h>0 ?
                    <div className='numbergroup'>
                        <p className='percent greencol'>{coindata.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                        <div><TrendingUpRoundedIcon/></div>
                    </div>
                    :
                    <div className='numbergroup'>
                        <p className='percent redcol'>{coindata.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                        <div><TrendingDownRoundedIcon/></div>
                    </div>
                }  
                </li>                
        </div>     */}
    </div>

  )
}

export default Coinpage