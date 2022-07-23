const { body } = require('express-validator');
const { post } = require('../models');

const postValidator=()=>{
    return[
        body('name')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Name is Required.'),
        body('title')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Title is Required.'),
        body('user_id')
            .trim()
            .not()
            .isEmpty()
            .withMessage('User is Required.'),
        body('content')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Content is Required.')
    ]
}

module.exports=postValidator