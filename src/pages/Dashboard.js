import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import TabsComponent from '../Components/Dashboard/TabsComponent'
import axios from 'axios'
import Searchbar from '../Components/Searchbar'

function Dashboard() {
const [coins, setCoins]=useState([])
const [search, setSearch]=useState("")
console.log(search);


var filteredcoins= coins.filter(coin=>
  coin.name.toLowerCase().includes(search.toLowerCase())||coin.symbol.toLowerCase().includes(search.toLowerCase())
)
console.log(filteredcoins);

useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((res)=> {
    console.log(res.data)
    setCoins(res.data)
})
.catch(e=> console.log(e))
},[])

  return (
    <div>
        <Header/>
        <Searchbar setSearch={setSearch}/>
        <TabsComponent coins={filteredcoins}/>
    </div>
  )
}

export default Dashboard