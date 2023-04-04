const express = require('express');
const app = express()
const port = 3000;

// connect to db
const db = require('./config/db');
const Product = require('./models/Product');
const User = require('./models/User');
const Admin = require('./models/Admin');
const Fgpw = require('./models/Fgpw');
const Blog = require('./models/Blog');
const RegisEmail = require('./models/RegisEmail');
const Feedback = require('./models/Feedback');
db.connect();

const morgan = require('morgan');
app.use(morgan('combined'));

const cors = require('cors');
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const delicatRoutes = require('./routes/delicat.router')
app.use('/', delicatRoutes)

//API - Get product info
app.get('/products/:id', async(req, res) => {
    try {
        let productInfo = await Product.findById(req.params.id);
        res.json(productInfo)
    } catch (err) {
        res.json(err.message)
    }
})

//API - Get blog info
app.get('/blogs/:id', async(req, res) => {
    try {
        let blogInfo = await Blog.findById(req.params.id);
        res.json(blogInfo)
    } catch (err) {
        res.json(err.message)
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})