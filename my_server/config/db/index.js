const mongoose = require('mongoose')
require('dotenv/config')

async function connect() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected successfully')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { connect }

