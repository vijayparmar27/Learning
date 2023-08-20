const express = require('express');
const router = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/",router)

app.listen(3000, ()=>{
    console.log("server is runing")
})