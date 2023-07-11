const express = require("express");
const router = express.Router()
const { validatorRegisterItem, validatorLogin } = require("../validators/auth");
const { loginCtrl } = require("../controllers/auth");


/**
 * Create item
 */
router.post("/register",validatorRegisterItem, loginCtrl)

module.exports = router