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
                coin.map((coins, index)=> {
                  
                  return( 
                    <Link to={`/${coins.id}`}>
                    <div >
                        <div className='eachcoin'>
                            <div className='section'>
                            <img src={coins.image} alt="img" className='image'></img>
                            <div className='text'>
                                <p className='symbol'>{coins.symbol}</p>
                                <p className='names'>{coins.name}</p>
                            </div>
                            </div>
                            {coin.price_change_percentage_24h>0 ?
                                <div className='numbergroup'>
                                  <p className='percent greencol'>{coins.price_change_percentage_24h.toFixed(2)}%</p>
                                  <div><TrendingUpRoundedIcon/></div>
                                </div>
                                :
                                <div className='numbergroup'>
                                  <p className='percent redcol'>{coins.price_change_percentage_24h.toFixed(2)}%</p>
                                  <div><TrendingDownRoundedIcon/></div>
                                </div>
                            }                            
                            <div >
                                <p>Total Volume: {coins.total_volume}</p>
                                <p>Market Cap: ${coins.market_cap}</p>
                              </div>
                        </div>
                    </div>
                     </Link> 
                  )
                  
                  })
            }
            </div> 
           
  )
}

export default Grids