const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const User = require('../models/user.model')
const Product = require('../models/product.model')
const ProductCategory = require('../models/product-category.model')
const Order = require('../models/order.model')
const Payment = require('../models/payment.model')
const Shipment = require('../models/shipment.model')

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
    resources: [User, Product, ProductCategory, Order, Payment, Shipment],
    rootPath: '/admin',
})

const ADMIN = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: process.env.ADMIN_COOKIE_NAME,
    cookiePassword: process.env.ADMIN_COOKIE_PASS,
    authenticate: async (email, password) => {
        if (email === ADMIN.email && password === ADMIN.password) {
            return ADMIN
        }
        return null
    },
})

module.exports = router