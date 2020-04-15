const Product = require('../models/productModel')

exports.getProductsController = (req, res, next) => {
    await Product.find({}).exec((err, products) => {
        if (err) {
            res.send('Error: Cannot get products')
        } else {
            res.json(products)
        }
    })
}

exports.getProductController = (req, res, next) => {
    await Product.findOne({ _id: req.params.id }).exec((err, product) => {
        if (err) {
            res.send('Error: Cannot get product')
        } else {
            res.json(product)
        }
    })
}

exports.createProductController = (req, res, next) => {
    await Product.create(req.body, (err, product) => {
        if (err) {
            res.send('Error: Cannot create product')
        } else {
            res.json(product)
        }
    })
}

exports.updateProductController = (req, res, next) => {
    await Product.findOneAndUpdate({ _id: req.params.id }, {
        sku: req.body.sku, name: req.body.name,
        description: req.body.description, price: req.body.price,
        weight: req.body.weight, sizes: req.body.sizes,
        colors: req.body.colors, quantity: req.body.quantity,
        location: req.body.location, note: req.body.note,
        images: req.body.images, sellerUserId: req.body.sellerUserId,
        categoryId: req.body.categoryId,
    }, { new: true, upsert: true }, (err, product) => {
        if (err) {
            res.send('Error: Cannot update product')
        } else {
            res.json(product)
        }
    })
}

exports.deleteProductController = (req, res, next) => {
    await Product.findOneAndRemove({ _id: req.params.id }, (err, product) => {
        if (err) {
            res.send('Error: Cannot delete product')
        } else {
            res.json(product)
        }
    })
}