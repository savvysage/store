const { Schema, model } = require('mongoose')

const Order = model('Order', new Schema({
    price: { type: Number, required: true },
    size: { type: String },
    color: { type: String },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    status: { type: String, enum: ['unpaid', 'paid', 'shipped', 'received'], required: true },
    buyerUserId: { type: Schema.Types.ObjectId, ref: 'User' },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
}, { timestamps: true }))

module.exports = Order