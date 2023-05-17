export const convertdate=(date)=>{
    var dates=new Date(date)
    return dates.getDate()+"/"+(dates.getMonth()+1)
}
