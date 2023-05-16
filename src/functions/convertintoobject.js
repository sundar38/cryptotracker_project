export const convertintoobject=(setCoininfo, coindata)=>{
    setCoininfo({
        symbol: coindata.symbol,
        rank: coindata.coingecko_rank,
        // image: coindata.image.large,
        //desc: coindata.description.bg,
    })
};