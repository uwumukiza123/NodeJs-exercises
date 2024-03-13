const express = require('express')
const itemController = require('../controller/itemController')
const router = express.Router()

router.get('/', itemController.getItems);

router.get('/', itemController.getItemById);

router.post('/', itemController.postItem);

router.put('/', itemController.updateItem);

router.delete('/', itemController.deleteItem)

module.exports = router;