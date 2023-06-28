const express =require("express");
const { getItem, getItems, createItem } = require("../controllers/tracks");
const router= express.Router();


router.get("/",getItems)
router.get("/:id",getItem)
router.post("/",createItem)

module.exports=router;