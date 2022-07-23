const { Op } = require('sequelize');
const db = require('../models');
const order = require('../utility/order');
const pagination = require('../utility/pagination');

const createEmployee = async(req,res)=>{
    try{
        await db.employee.create(req.body)
        return res.status(201).json({
            message:"Employee added successfully",
            status:true
        })
    }catch(error){
        return res.status(500).json({
            message:error.message,
            status:false
        })
    }
}

const getEmployee = async(req,res)=>{
    try {
        const query=req?.query;
        const totalCount = await db.employee.count()
        const paginationResult = pagination(query,totalCount)
        const search = query?.search ? '%'+query.search + '%' : '%'
        const orderResult = order(query)
        const employeeData = await db.employee.findAll({
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
            data:employeeData,
            currentCount:employeeData.length,
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

const deleteEmployee= async(req,res)=>{
    try {
        const data=await db.employee.destroy({
            where:{
                id:req.params.id
            }
        })

        return res.status(200).json({
            message:'Employee deleted successfully.',
            status:true
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            status:false
        })
    }
}

const restoreEmployee= async(req,res)=>{
    try {
        const data=await db.employee.restore({
            where:{
                id:req.body.restoreId
            }
        })

        return res.status(200).json({
            message:'Restore data successfully.',
            status:true
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            status:false
        })
    }
}

module.exports={
    createEmployee,getEmployee,deleteEmployee,restoreEmployee
}