const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Fgpw = new Schema({
    phone: { type: String }
})

module.exports = mongoose.model('Fgpw', Fgpw);