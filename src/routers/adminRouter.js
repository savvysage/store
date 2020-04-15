const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const AdminBroExpress = require('admin-bro-expressjs')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const Product = require('../models/productModel')
const ProductCategory = require('../models/productCategoryModel')
const Order = require('../models/orderModel')
const Payment = require('../models/paymentModel')
const Shipment = require('../models/shipmentModel')

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

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
        const user = await User.findOne({ email })
        if (user) {
            const matched = await bcrypt.compare(password, user.encryptedPassword)
            if (matched) {
                return user
            }
        }
        return false
    },
    cookieName: process.env.ADMIN_COOKIE_NAME,
    cookiePassword: process.env.ADMIN_COOKIE_PASS,
})

// const router = AdminBroExpress.buildRouter(adminBro)

// const ADMIN = {
//     email: process.env.ADMIN_EMAIL,
//     password: process.env.ADMIN_PASSWORD,
// }

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