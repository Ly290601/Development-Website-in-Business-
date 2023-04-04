const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Admin = new Schema({
    email: { type: String },
    pass: { type: String }
})

module.exports = mongoose.model('Admin', Admin);