const express = require('express')
const router = express.Router()
const Client = require('../models/client')
const {storeClientData} = require('../controllers/storeClientData')
const {updateClientData} = require('../controllers/updateClientData')
const {deleteClientData} = require('../controllers/deleteClientData')
const { getClientData } = require('../controllers/getClientData')


router.post('/api/clients',storeClientData)

router.get('/api/clients',getClientData)

router.put('/api/clients/:id',updateClientData)

router.delete('/api/clients/:id',deleteClientData)



module.exports = router;