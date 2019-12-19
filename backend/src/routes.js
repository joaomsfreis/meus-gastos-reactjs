const express = require('express')
const TransferController = require('./controllers/TransferController')

const routes = express.Router()

routes.post('/transfers', TransferController.store)
routes.get('/transfers', TransferController.index)

module.exports = routes
