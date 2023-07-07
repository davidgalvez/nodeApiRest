const express = require("express");
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage");
const {validatorGetItem} =require('../validators/storage')
const { createItem, getItems, getItem, updateItem, deleteItem } = require("../controllers/storage");

/**
 * Items list
 */
router.get("/",getItems)

/**
 * Item details
 */
router.get("/:id",validatorGetItem,getItem)

/**
 * Delete item
 */
router.delete("/:id",validatorGetItem,deleteItem)

/**
 * Create item
 */
router.post("/",uploadMiddleware.single("myfile"),createItem)

module.exports = router;