const express = require ('express')
const router = express.Router()
const path = require ('path')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','home.html'))
})
router.get('/ourService',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','ourService.html'))
})
router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','contact.html'))
})

module.exports=router