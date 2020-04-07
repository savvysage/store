const { Schema, model } = require('mongoose')

const Payment = model('Payment', {
    amount: Number,
    method: String,
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
    },
})

module.exports = Payment