const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./router/itemRoutes')
const morgan = require('morgan')
require('dotenv/config')

const app = express()

mongoose.connect(process.env.DB_CONNECTION)
    .then(result => app.listen(3000))
    .catch(err => console.log(err))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true}))

app.use(morgan('dev'))

app.use("/items", itemRoutes)

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/post', (req, res)=> {
    console.log(req.body)
})