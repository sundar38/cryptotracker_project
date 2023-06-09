import React from 'react'
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import "./style.css"
import { Link } from 'react-router-dom';
function Lists({coin}) {
  return (
     <div className='eachlists'>
            {                
                coin.map((coin, index)=> {
                  return(
                    <Link to={`/${coin.id}`}>
                    <li className='eachcoindesc'>
                       
                      <img src={coin.image} alt="img" className='image'></img>
                    <span className='symbol'>{coin.symbol}</span>
                      <span className='names'>{coin.name}</span >
                      <span>{coin.id}</span>
                      {coin.price_change_percentage_24h>0 ?
                                <div className='numbergroup'>
                                  <p className='percent greencol'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                  <div><TrendingUpRoundedIcon/></div>
                                </div>
                                :
                                <div className='numbergroup'>
                                  <p className='percent redcol'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                  <div><TrendingDownRoundedIcon/></div>
                                </div>
                            } 
                         <div className='textsec2'>
                                <div>Total Vol: {coin.total_volume}</div>
                                <div> Market Cap: ${coin.market_cap}</div>
                              </div> 
                            
                    </li>
                    
                    </Link>
                    
                )})
            }
            </div> 
  )
}

export default Lists