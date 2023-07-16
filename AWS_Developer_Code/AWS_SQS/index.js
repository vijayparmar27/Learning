const express = require('express');
const router = require('./routers');
const app = express();

app.use("/",router)

app.listen(80)