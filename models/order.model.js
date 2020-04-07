const { Schema, model } = require('mongoose')

const Order = model('Order', {
    price: Number,
    size: String,
    color: String,
    quantity: Number,
    total: Number,
    status: String,
    buyerUserId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
})

module.exports = Order