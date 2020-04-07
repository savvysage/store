const { model } = require('mongoose')

const ProductCategory = model('ProductCategory', {
    name: String,
    description: String,
    image: String,
})

module.exports = ProductCategory