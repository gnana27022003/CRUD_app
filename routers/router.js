const express = require('express')
const router = express.Router()
const Client = require('../models/client')
const {storeClientData} = require('../controllers/storeClientData')
const {updateClientData} = require('../controllers/updateClientData')
const {deleteClientData} = require('../controllers/deleteClientData')

router.get('/',async(req,res)=>{
    res.json({
        "message":"Enter Client details to access"
    })
})

router.post('/api/clients',async(req,res)=>{
    await storeClientData(req,res)
})

router.get('/api/clients',async(req,res)=>{
    try{
        const clients = await Client.find()
        res.json(clients)
    }
    catch(err){
        res.json({
            "message":"Sorry couldn't fetch all clients"
        })
    }
})

router.put('/api/clients/:id',updateClientData)

router.delete('/api/clients/:id',deleteClientData)

module.exports = router;