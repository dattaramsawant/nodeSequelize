const { body } = require('express-validator');
const { users } = require('../models');

const userValidator=()=>{
    return[
        body('name')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Name is Required.'),
        
        body('email')
            .trim()
            .not()
            .isEmpty()
            .withMessage("Email is required.")
            .isEmail()
            .withMessage("Please enter valid email")
            .custom(value=>{
                return users.findOne({
                    where:{
                        email:value
                    }
                })
                .then(user=>{
                    if(user){
                        return Promise.reject('Email already exists.')
                    }
                })
            })
    ]
}

module.exports=userValidator