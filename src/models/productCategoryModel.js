const { Schema, model } = require('mongoose')

const ProductCategory = model('ProductCategory', new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    image: { type: String },
}, { timestamps: true }))

module.exports = ProductCategory