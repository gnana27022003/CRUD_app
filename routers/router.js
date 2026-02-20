const express = require('express')
const router = express.Router()
const Client = require('../models/client')
const {storeClientData} = require('../controllers/storeClientData')

router.get('/',async(req,res)=>{
    res.json({
        "message":"Enter Client details to access"
    })
})

router.post('/api/clients',async(req,res)=>{
    await storeClientData(req,res)
})

module.exports = router;