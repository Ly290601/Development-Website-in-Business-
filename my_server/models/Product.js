const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: Number },
    name: { type: String },
    icon_url: { type: String },
    url: { type: String },
    price: { type: Number },
    category: { type: String },
    note: { type: String },
    cadId: { type: Number },
    createdAt: { type: 'date', default: Date.now() },
    modifiedAt: { type: 'date', default: Date.now() },
})

module.exports = mongoose.model('Product', Product)