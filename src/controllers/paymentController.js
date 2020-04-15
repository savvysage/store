const Payment = require('../models/paymentModel')

exports.getPaymentsController = (req, res, next) => {
    await Payment.find({}).exec((err, payments) => {
        if (err) {
            res.send('Error: Cannot get payments')
        } else {
            res.json(payments)
        }
    })
}

exports.getPaymentController = (req, res, next) => {
    await Payment.findOne({ _id: req.params.id }).exec((err, payment) => {
        if (err) {
            res.send('Error: Cannot get payment')
        } else {
            res.json(payment)
        }
    })
}

exports.createPaymentController = (req, res, next) => {
    await Payment.create(req.body, (err, payment) => {
        if (err) {
            res.send('Error: Cannot create payment')
        } else {
            res.json(payment)
        }
    })
}

exports.updatePaymentController = (req, res, next) => {
    await Payment.findOneAndUpdate({ _id: req.params.id }, {
        amount: req.body.amount, method: req.body.method,
        orderId: req.body.orderId,
    }, { new: true, upsert: true }, (err, payment) => {
        if (err) {
            res.send('Error: Cannot update payment')
        } else {
            res.json(payment)
        }
    })
}

exports.deletePaymentController = (req, res, next) => {
    await Payment.findOneAndRemove({ _id: req.params.id }, (err, payment) => {
        if (err) {
            res.send('Error: Cannot delete payment')
        } else {
            res.json(payment)
        }
    })
}