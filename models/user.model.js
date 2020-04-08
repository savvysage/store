const { Schema, model } = require('mongoose')

const User = model('User', new Schema({
    username: String,
    password: String,
    email: String,
    phone: Number,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    state: String,
    postalCode: Number,
    country: String,
}, {timestamps: true}))

module.exports = User