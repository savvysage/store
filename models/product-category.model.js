const { Schema, model } = require('mongoose')

const ProductCategory = model('ProductCategory', new Schema({
    name: String,
    description: String,
    image: String,
}, {timestamps: true}))

module.exports = ProductCategory