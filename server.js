const express = require ('express')
const app = express()
/* app.use(express.static(__dirname+'/public')) */

const requestTime = function (req, res, next) {
    const today =new Date(Date.now());
   hours = today.getHours()  
   day = today.getDay()

    if ( ((hours>=9)&&(hours<20)) ){
        console.log("open")
        next()   
  }
  else{
    res.send('closed')
  }
}




app.use(requestTime)
app.use(express.static('public'))


app.listen(5000,(err)=> {
    if (err) throw err 
    else console.log('server is running on port 5000')
})
