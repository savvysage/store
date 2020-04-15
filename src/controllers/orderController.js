const Order = require('../models/orderModel')

exports.getOrdersController = (req, res, next) => {
    await Order.find({}).exec((err, orders) => {
        if (err) {
            res.send('Error: Cannot get orders')
        } else {
            res.json(orders)
        }
    })
}

exports.getOrderController = (req, res, next) => {
    await Order.findOne({ _id: req.params.id }).exec((err, order) => {
        if (err) {
            res.send('Error: Cannot get order')
        } else {
            res.json(order)
        }
    })
}

exports.createOrderController = (req, res, next) => {
    await Order.create(req.body, (err, order) => {
        if (err) {
            res.send('Error: Cannot create order')
        } else {
            res.json(order)
        }
    })
}

exports.updateOrderController = (req, res, next) => {
    await Order.findOneAndUpdate({ _id: req.params.id }, {
        price: req.body.price, size: req.body.size,
        color: req.body.color, quantity: req.body.quantity,
        total: req.body.total, status: req.body.status,
        buyerUserId: req.body.buyerUserId, productId: req.body.productId,
    }, { new: true, upsert: true }, (err, order) => {
        if (err) {
            res.send('Error: Cannot update order')
        } else {
            res.json(order)
        }
    })
}

exports.deleteOrderController = (req, res, next) => {
    await Order.findOneAndRemove({ _id: req.params.id }, (err, order) => {
        if (err) {
            res.send('Error: Cannot delete order')
        } else {
            res.json(order)
        }
    })
}