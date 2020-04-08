const { Schema, model } = require('mongoose')

const Order = model('Order', new Schema({
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
}, {timestamps: true}))

module.exports = Order