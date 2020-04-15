require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const adminRouter = require('./src/routers/adminRouter')
const appRouter = require('./src/routers/appRouter')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use('/admin', adminRouter)
app.use('/', appRouter)

const run = async () => {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    await app.listen(process.env.PORT, () => console.log(`You are listening to  http://localhost:${process.env.PORT}`))
}

run()