const { Schema, model } = require('mongoose')

const User = model('User', new Schema({
    username: { type: String, required: true, unique: true },
    encryptedPassword: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: Number, required: true },
    country: { type: String, required: true },
    role: { type: String, enum: ['admin', 'restricted'], default: 'restricted' },
}, { timestamps: true }))

module.exports = User