const Shipment = require('../models/shipmentModel')

exports.getShipmentsController = (req, res, next) => {
    await Shipment.find({}).exec((err, shipments) => {
        if (err) {
            res.send('Error: Cannot get shipments')
        } else {
            res.json(shipments)
        }
    })
}

exports.getShipmentController = (req, res, next) => {
    await Shipment.findOne({ _id: req.params.id }).exec((err, shipment) => {
        if (err) {
            res.send('Error: Cannot get shipment')
        } else {
            res.json(shipment)
        }
    })
}

exports.createShipmentController = (req, res, next) => {
    await Shipment.create(req.body, (err, shipment) => {
        if (err) {
            res.send('Error: Cannot create shipment')
        } else {
            res.json(shipment)
        }
    })
}

exports.updateShipmentController = (req, res, next) => {
    await Shipment.findOneAndUpdate({ _id: req.params.id }, {
        name: req.body.name, address: req.body.address,
        city: req.body.city, state: req.body.state,
        country: req.body.country, postalCode: req.body.postalCode,
        phone: req.body.phone, email: req.body.email,
        orderId: req.body.orderId, shipperUserId: req.body.shipperUserId,
    }, { new: true, upsert: true }, (err, shipment) => {
        if (err) {
            res.send('Error: Cannot update shipment')
        } else {
            res.json(shipment)
        }
    })
}

exports.deleteShipmentController = (req, res, next) => {
    await Shipment.findOneAndRemove({ _id: req.params.id }, (err, shipment) => {
        if (err) {
            res.send('Error: Cannot delete shipment')
        } else {
            res.json(shipment)
        }
    })
}