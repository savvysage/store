const { Schema, model } = require('mongoose')

const Payment = model('Payment', new Schema({
    amount: Number,
    method: String,
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
    },
}, {timestamps: true}))

module.exports = Payment