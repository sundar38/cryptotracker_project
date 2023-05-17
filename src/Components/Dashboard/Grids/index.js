import React from 'react'
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import "./style.css"
import { Link } from 'react-router-dom';
function Grids({coin}) {
    console.log(coin);
    console.log(coin.id);
  return (
      
     <div className='totalcoins'>
            {
                coin.map((coin, index)=> {
                  
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
                            <div >
                                <p>Total Volume: {coin.total_volume}</p>
                                <p>Market Cap: ${coin.market_cap}</p>
                              </div>
                        </div>
                    </div>
                  )
                  })
            }
            </div> 
           
  )
}

export default Grids