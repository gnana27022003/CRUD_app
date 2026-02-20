const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = 3006;



dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))


app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`)
})


