const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const Product = require('../models/product.model')
const ProductCategory = require('../models/product-category.model')
const Order = require('../models/order.model')
const Payment = require('../models/payment.model')
const Shipment = require('../models/shipment.model')

AdminBro.registerAdapter(AdminBroMongoose)

const customUser = {
    resource: User,
    options: {
        //editProperties: ['username', 'password', 'email', 'phone', 'firstName', 'lastName', 'address', 'city', 'state', 'postalCode', 'country', 'role'],
        properties: {
            encryptedPassword: {isVisible: false},
            password: {type: 'string', isVisible: {
                list: false, edit: true, filter: false, show: false,
            }},
            gender: {availableValues: [
                {value: 'male', label: 'Male'},
                {value: 'female', label: 'Female'},
            ]},
        },
        actions: {
            new: {
                before: async (request) => {
                    if (request.payload.password) {
                        request.payload = {
                            ...request.payload,
                            encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                            password: undefined,
                        }
                    }
                    return request
                },
            }
        }
    }
}

const adminBro = new AdminBro({
    resources: [customUser, Product, ProductCategory, Order, Payment, Shipment],
    rootPath: '/admin',
})

// const ADMIN = {
//     email: process.env.ADMIN_EMAIL,
//     password: process.env.ADMIN_PASSWORD,
// }

const router = AdminBroExpress.buildRouter(adminBro)

// const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
//     cookieName: process.env.ADMIN_COOKIE_NAME,
//     cookiePassword: process.env.ADMIN_COOKIE_PASS,
//     authenticate: async (email, password) => {
//         if (email === ADMIN.email && password === ADMIN.password) {
//             return ADMIN
//         }
//         return null
//     },
// })

module.exports = router