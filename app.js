const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./router/itemRoutes')
const morgan = require('morgan')
require('dotenv/config')

const app = express()

mongoose.connect(process.env.DB_CONNECTION)
    .then(result => app.listen(3000))
    .catch(err => console.log(err))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use("/items", itemRoutes)
