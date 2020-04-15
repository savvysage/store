const ProductCategory = require('../models/productCategoryModel')

exports.getProductCategoriesController = (req, res, next) => {
    await ProductCategory.find({}).exec((err, productCategories) => {
        if (err) {
            res.send('Error: Cannot get product categories')
        } else {
            res.json(productCategories)
        }
    })
}

exports.getProductCategoryController = (req, res, next) => {
    await ProductCategory.findOne({ _id: req.params.id }).exec((err, productCategory) => {
        if (err) {
            res.send('Error: Cannot get product category')
        } else {
            res.json(productCategory)
        }
    })
}

exports.createProductCategoryController = (req, res, next) => {
    await ProductCategory.create(req.body, (err, productCategory) => {
        if (err) {
            res.send('Error: Cannot create product category')
        } else {
            res.json(productCategory)
        }
    })
}

exports.updateProductCategoryController = (req, res, next) => {
    await ProductCategory.findOneAndUpdate({ _id: req.params.id }, {
        name: req.body.name, description: req.body.description,
        image: req.body.image,
    }, { new: true, upsert: true }, (err, productCategory) => {
        if (err) {
            res.send('Error: Cannot update product category')
        } else {
            res.json(productCategory)
        }
    })
}

exports.deleteProductCategoryController = (req, res, next) => {
    await ProductCategory.findOneAndRemove({ _id: req.params.id }, (err, productCategory) => {
        if (err) {
            res.send('Error: Cannot delete product category')
        } else {
            res.json(productCategory)
        }
    })
}