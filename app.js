const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./router/itemRoutes')
const morgan = require('morgan')

const app = express()

const dbURI = "mongodb+srv://netNinja:netNinja123@cluster0.nlx1am2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dbURI)
    .then(result => app.listen(3000))
    .catch(err => console.log(err))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true}))

app.use(morgan('dev'))

app.use("/items", itemRoutes)

app.get('/form', (req, res) => {
    res.render('form')
})