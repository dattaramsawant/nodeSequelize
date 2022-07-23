var express = require('express');
const { createEmployee, getEmployee, deleteEmployee, restoreEmployee } = require('../controller/employee');
const postValidator = require('../validator/post');
const validate = require('../validator/validate');
var router=express.Router();

//Post API
router.post('/',createEmployee)
router.get('/',getEmployee)
router.delete('/:id',deleteEmployee)
router.post('/restore',restoreEmployee)

module.exports = router;