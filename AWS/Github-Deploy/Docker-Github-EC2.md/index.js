const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send(`devlopment complate........!!!.......`)
})


app.listen(4000,()=>{
    console.log(`server run.......`)
})