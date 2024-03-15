const Item = require('../models/item')

const getAllItems = (req, res) => {
    Item.find()
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ message: err})
        })
}

const getItemById = (req, res) => {
    const id = req.params.id;

    Item.findById(id)
        .then((result) => {
            res.json(result)
        })
        .catch((err)=> {
            res.json({ message: err})
        })
}

const postItem = (req, res) => {
    const post = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })

    post.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ message: err})
        })
}

const updateItem = async(req, res)=> {
    // const id = req.params.id;
    // const updatedPost = req.body
    // Item.findByIdAndUpdate(id, { $set: updatedPost },{ new: true })
    //     .then((result) => {
    //         console.log(result)
    //         res.json(result)
    //     })
    //     .catch((err)=> {
    //         res.json({ message: err})
    //     })

    try {
        const updatePost = await Item.updateOne(
            {_id: req.params.id},
            { $set: { name: req.body.name}}
            );
            res.json(updatePost)
    } catch (err){
        res.json({ message: err})
    }
        
}

const deleteItem = (req, res) => {
    const id = req.params.id;

    Item.findByIdAndDelete(id)
        .then((result)=> {
            res.json({ deletedItem: result})
        })
        .catch((err) => {
            res.json({ message: err})
        })
}

module.exports = {
    getAllItems,
    getItemById,
    postItem,
    updateItem,
    deleteItem
}