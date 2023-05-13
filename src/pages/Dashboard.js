import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import TabsComponent from '../Components/Dashboard/TabsComponent'
import axios from 'axios'

function Dashboard() {
const [coins, setCoins]=useState([])

useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((res)=> {
    console.log(res.data)
    setCoins(res.data)
})
},[])

  return (
    <div>
        <Header/>
        <TabsComponent coins={coins}/>
    </div>
  )
}

export default Dashboard