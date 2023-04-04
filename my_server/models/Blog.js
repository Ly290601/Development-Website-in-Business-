const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Blog = new Schema({
    name: { type: String },
    image: { type: String },
    date: { type: String },
    createdAt: { type: 'date', default: Date.now() },
    modifiedAt: { type: 'date', default: Date.now() }
})

module.exports = mongoose.model('Blog', Blog)