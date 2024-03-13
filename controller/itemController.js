const Item = require('../models/item')

const getItems = (req, res) => {
    Item.find().sort({ createdAt: -1})
        .then((result)=> {
            res.render('/', { item: result})
        })
        .catch((err) =>  console.log(err))
}

const getItemById = (req, res) => {
    const id = req.params.id;

    Item.findById(id)
        .then((result) => {
            res.render('/', { item: result})
        })
        .catch((err)=> {
            res.status(404).render('404')
        })
}

const postItem = (req, res) => {
    const item = new Item(req.body)

    item.save()
        // .then((result) => {
        //     res.redirect('/form')
        // })
        .then((result) => {
            res.json({ newItem: result})
        })
        .catch((err) => {
           console.log(err) 
        })
}

const updateItem = (req, res)=> {
    const id = req.params.id;

    Item.updateOne(id)
        .then((result) => {
            res.send(result)
        })
        .then((result)=> {
            res.json({ updatedItem: result })
        })
        .catch((err)=> {
            res.status(404).render('404')
        }) 
}

const deleteItem = (req, res) => {
    const id = req.params.id;

    Item.findByIdAndDelete(id)
        .then((result)=> {
            res.json({ deletedItem: result})
        })
        .catch((err) => {
            res.status(404)
        })
}

module.exports = {
    getItems,
    getItemById,
    postItem,
    updateItem,
    deleteItem
}