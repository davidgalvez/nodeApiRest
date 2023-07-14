const express =require("express");
const { getItem, getItems, createItem, updateItem, deleteItem } = require("../controllers/tracks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");
const authMiddleware =require("../middleware/session")
const router= express.Router();

/**
 * List items
 */
router.get("/",authMiddleware,getItems)

/**
 * Get item details
 */
router.get("/:id",validatorGetItem,getItem)

/**
 * Create item
 */
router.post("/",validatorCreateItem,customHeader,createItem)

/**
 * Update item
 */
router.put("/:id",validatorGetItem,validatorCreateItem,customHeader,updateItem)

/**
 * Delete item
 */
router.delete("/:id",validatorGetItem,deleteItem)

module.exports=router;