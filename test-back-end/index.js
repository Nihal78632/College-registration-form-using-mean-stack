
const express = require('express')

const cors= require('cors')

const logic =require('./service/logic')



const server = express()


server.use(cors({
    origin:'http://localhost:4200',
}))


server.use(express.json())








server.listen(3000,()=>{console.log("test app started on 3000");})

//register api

server.post("/register",(req,resp)=>{
    console.log("inside register");
    
//logic for registering
logic.register( req.body.firstname,
    req.body.lastname,
    req.body.address,
    req.body.email,
    req.body.phone,
    req.body.gender,
    req.body.course).then((result)=>
{
    resp.status(result.statusCode).json(result) 
}) 



 
}) 

//logic for showing all data
server.get("/show",(req,resp)=>{
    console.log("inside show");
    logic.show().then((result)=>{

        resp.status(result.statusCode).json(result)
    })

}) 