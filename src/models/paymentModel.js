const { Schema, model } = require('mongoose')

const Payment = model('Payment', new Schema({
    amount: { type: Number, required: true },
    method: { type: String, required: true },
    orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
}, { timestamps: true }))

module.exports = Payment