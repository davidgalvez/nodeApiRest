const express = require("express");
const router = express.Router()
const { validatorRegisterItem, validatorLogin } = require("../validators/auth");
const { loginCtrl, registerCtrl } = require("../controllers/auth");


/**
 * Create item
 */
router.post("/register",validatorRegisterItem, registerCtrl)

router.post("/login",validatorLogin, loginCtrl)

module.exports = router