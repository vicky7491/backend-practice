const mongoose = require('mongoose')

const  userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
})
const userModel = mongoose.model('user', userSchema)
module.exports = userModel