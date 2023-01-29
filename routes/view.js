// const express = require ('express')
// const router = express.Router()
// const path = require ('path')
// const app = express()

// /* app.use(express.static(__dirname+'/public')) */

// const requestTime = function (req, res, next) {
//     const today =new Date();
//    hours = today.getHours()
//    day = today.getDay()

//     if ( ((hours>=13)&&(hours<17)) && ((day>=1) &&(day<=5))){
//         console.log("open")
//         next()   
//   }
//   else{
//     res.send('closed')
//   }
// }


  


// router.get('/',requestTime,(req,res)=>{
//     res.sendFile(path.join(__dirname,'../','public','home.html'))
// })
// router.get('/ourService',requestTime,(req,res)=>{
//     res.sendFile(path.join(__dirname,'../','public','ourService.html'))
// })
// router.get('/contact',requestTime,(req,res)=>{
//     res.sendFile(path.join(__dirname,'../','public','contact.html'))
// })

// module.exports=router