const { Op } = require('sequelize');
const db = require('../models');
const order = require('../utility/order');
const pagination = require('../utility/pagination');

const createUser = async(req,res)=>{
    try{
        await db.users.create(req.body)
        return res.status(201).json({
            message:"User added successfully",
            status:true
        })
    }catch(error){
        return res.status(500).json({
            message:error.message,
            status:false
        })
    }
}

const getUser = async(req,res)=>{
    try {
        const query=req?.query;
        const totalCount = await db.users.count()
        const paginationResult = pagination(query,totalCount)
        const search = query?.search ? '%'+query.search + '%' : '%'
        const orderResult = order(query)
        const userData = await db.users.findAll({
            ...paginationResult,
            where:{
                name:{
                    [Op.iLike]: search
                }
            },
            order:orderResult
        })
        return res.status(200).json({
            message:'Success',
            status:true,
            data:userData,
            currentCount:userData.length,
            totalCount:totalCount
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            status:false,
            data:[]
        })
    }
}

module.exports={
    createUser,getUser
}