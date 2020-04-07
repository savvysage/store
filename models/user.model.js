const { model } = require('mongoose')

const User = model('User', {
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
})

module.exports = User