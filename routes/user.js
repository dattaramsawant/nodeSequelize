var express = require('express');
const { createUser, getUser } = require('../controller/user');
const userValidator = require('../validator/user');
const validate = require('../validator/validate');
var router=express.Router();

//Post API
router.post('/',userValidator(),validate,createUser)
router.get('/',getUser)

module.exports = router;