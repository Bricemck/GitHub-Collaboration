const mongoose = require('mongoose')

const Vegetables = mongoose.Schema({
    name: String,
    date: Date,
    type: String,
})



console.log('this is a test')