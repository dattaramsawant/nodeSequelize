const express = require('express');
const router = express.Router();

const users=require('./user');
const posts=require('./post');
const employee=require('./employee');

router.use('/users',users);
router.use('/posts',posts);
router.use('/employee',employee);

module.exports = router;