const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors({
    orgin: 'http://localhost:5500'
}));

app.get('/',(req,res)=>{
     res.JSON('Hey response from server');
})