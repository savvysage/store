const { Schema, model } = require('mongoose')

const Shipment = model('Shipment', new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: Number,
    phone: Number,
    email: String,
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
    },
    shipperUserId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true}))

module.exports = Shipment