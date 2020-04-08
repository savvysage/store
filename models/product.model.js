const { Schema, model } = require('mongoose')

const Product = model('Product', new Schema({
    sku: String,
    name: String,
    description: String,
    price: Number,
    weight: Number,
    sizes: Array,
    colors: Array,
    quantity: Number,
    location: String,
    note: String,
    image: String,
    sellerUserId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
}, {timestamps: true}))

module.exports = Product