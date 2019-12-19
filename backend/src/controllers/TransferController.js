const Transfer = require('../models/Transfer')

module.exports = {

    async index(req, res){
        const { month } = req.query
        const transfers = await Transfer.find({ month : month})

        return res.json(transfers)

    },

    async store(req, res){
        const { day, month, year, type, value, description, group } = req.body

        const transfer = await Transfer.create({ day, month, year, type, value, description, group })

        return res.json(transfer)
    }
}