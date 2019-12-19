const mongooose = require('mongoose')

const TransferSchema = new mongooose.Schema({
   day: Number,
   month: Number,
   year: Number,
   type: Boolean,
   value: Number,
   descripition: String,
   group: String 
})

module.exports = mongooose.model('Transfer', TransferSchema)