const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoConnect = require('./db/connect');
mongoConnect();
dotenv.config();
app.use(express.json())
 const authRoutes = require('./routes/authRoutes.js');

 app.use(authRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("server running on port 4000" );
    
})