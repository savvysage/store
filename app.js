require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const adminRouter = require('./routers/admin.router')
const appRouter = require('./routers/app.router')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(express.static('./public'))
app.use('/admin', adminRouter)
app.use('/', appRouter)

const run = async () => {
    await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    await app.listen(process.env.PORT, () => console.log(`You are listening to port ${process.env.PORT}.`))
}

run()