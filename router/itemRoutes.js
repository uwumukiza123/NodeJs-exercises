const express = require('express')
const itemController = require('../controller/itemController')
const router = express.Router()

router.get('/', itemController.getAllItems);

router.get('/:id', itemController.getItemById);

router.post('/', itemController.postItem);

router.patch('/:id', itemController.updateItem);

router.delete('/:id', itemController.deleteItem)

module.exports = router;