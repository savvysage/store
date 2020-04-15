const { Schema, model } = require('mongoose')

const Shipment = model('Shipment', new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: Number, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
    shipperUserId: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true }))

module.exports = Shipment