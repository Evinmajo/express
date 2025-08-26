const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoConnect = require('./db/connect');
dotenv.config();
 
mongoConnect();
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("server running on port 4000" );
    
})