var express = require('express');
const { createPost, getPost } = require('../controller/post');
const postValidator = require('../validator/post');
const validate = require('../validator/validate');
var router=express.Router();

//Post API
router.post('/',postValidator(),validate,createPost)
router.get('/',getPost)

module.exports = router;