const User = require('../models/userModel')

exports.getUsersController = (req, res, next) => {
    await User.find({}).exec((err, users) => {
        if (err) {
            res.send('Error: Cannot get users')
        } else {
            res.json(users)
        }
    })
}

exports.getUserController = (req, res, next) => {
    await User.findOne({ _id: req.params.id }).exec((err, user) => {
        if (err) {
            res.send('Error: Cannot get user')
        } else {
            res.json(user)
        }
    })
}

exports.createUserController = (req, res, next) => {
    await User.create(req.body, (err, user) => {
        if (err) {
            res.send('Error: Cannot create user')
        } else {
            res.json(user)
        }
    })
}

exports.updateUserController = (req, res, next) => {
    await User.findOneAndUpdate({ _id: req.params.id }, {
        username: req.body.username, email: req.body.email,
        phone: req.body.phone, firstName: req.body.firstName,
        lastName: req.body.lastName, gender: req.body.gender,
        address: req.body.address, city: req.body.city,
        state: req.body.state, postalCode: req.body.postalCode,
        country: req.body.country,
    }, { new: true, upsert: true }, (err, user) => {
        if (err) {
            res.send('Error: Cannot update user')
        } else {
            res.json(user)
        }
    })
}

exports.deleteUserController = (req, res, next) => {
    await User.findOneAndRemove({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.send('Error: Cannot delete user')
        } else {
            res.json(user)
        }
    })
}