const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = 3006;



app.use(express.json())
app.use(express.urlencoded({extended:true}))


dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))



const router = require('./routers/router')
app.use(router)


app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`)
})


