const { Op } = require('sequelize');
const db = require('../models');
const order = require('../utility/order');
const pagination = require('../utility/pagination');

db.posts.belongsTo(db.users,{foreignKey:'user_id'});

const createPost = async(req,res)=>{
    try{
        await db.posts.create(req.body)
        return res.status(201).json({
            message:"Post added successfully",
            status:true
        })
    }catch(error){
        return res.status(500).json({
            message:error.message,
            status:false
        })
    }
}

const getPost = async(req,res)=>{
    try {
        const query=req?.query;
        const totalCount = await db.posts.count()
        const paginationResult = pagination(query,totalCount)
        const search = query?.search ? '%'+query.search + '%' : '%'
        const orderResult = order(query)
        const postData = await db.posts.findAll({
            ...paginationResult,
            where:{
                name:{
                    [Op.iLike]: search
                }
            },
            order:orderResult,
            include:[{
                model:db.users,
                attributes:['name','email']
            }]
        })
        return res.status(200).json({
            message:'Success',
            status:true,
            data:postData,
            currentCount:postData.length,
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
    createPost,getPost
}