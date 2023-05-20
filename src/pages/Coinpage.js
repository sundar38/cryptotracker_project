import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import Header from '../Components/Common/Header'
import "../Components/Dashboard/Lists/style.css"
import Lists from '../Components/Dashboard/Lists';

import Linechart from '../Components/Coin/LineChart';
import { convertdate } from '../functions/convertdate';
import Selectdays from '../Components/Coin/LineChart/Selectdays';
import Togglecomp from '../Components/Coin/LineChart/Togglecomp';

 function Coinpage() {
    const {id}=useParams()
    const [coindata, setCoindata]=useState()
    // const [coininfo, setCoininfo]=useState({})
    const [loading, setLoading]=useState(true)
    const [chartData, setChartData]= useState({datasets: []})
    const [days, setDays]=useState(7)
    console.log(days);
    

    useEffect(()=>async ()=>{
        if(id){
            const res=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            console.log(res.data);
            setCoindata(res.data)
            setLoading(false) 
            
            
        }    
    },[id])
    
    const dayschange= async (e)=>{
        setDays(e.target.value)
   }
    useEffect(()=> async()=> {
        console.log(days);
            const response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
            console.log("chart response is", response.data);
            const price= response.data.prices
            console.log(price);

            setChartData({
                labels: price.map((eachprice)=> convertdate(eachprice[0])),
          datasets: [
            {      
              data: price.map((eachprice)=> eachprice[1]),
              borderColor: "red",
              backgroundColor: "transparent",
              yAxisID: 'y',
            },
            
          ]
            })
    },[days] )
  
    
    
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
            <h1>{coindata.id}</h1>
            <p className='anchor' dangerouslySetInnerHTML={{__html:coindata.description.en}}></p>
            <div className='dayselect'>
            <p>Select number of days</p>  
            <Selectdays days={days} dayschange={dayschange}/>
            </div>
            <Togglecomp/>
            <div><Linechart chartData={chartData}/>    </div>           
        </div>     
        )
 }
    
   
    
    </div>

  )
}

export default Coinpage