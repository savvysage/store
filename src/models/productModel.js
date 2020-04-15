const { Schema, model } = require('mongoose')

const Product = model('Product', new Schema({
    sku: { type: String },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    weight: { type: Number },
    sizes: { type: Array },
    colors: { type: Array },
    quantity: { type: Number, required: true },
    location: { type: String },
    note: { type: String },
    images: { type: Array },
    sellerUserId: { type: Schema.Types.ObjectId, ref: 'User' },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
}, { timestamps: true }))

module.exports = Product