const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://0.0.0.0/vicky').then(()=>{
    console.log('connected to database')
})

module.exports = connection