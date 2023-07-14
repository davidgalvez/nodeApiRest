const {tracksModel} = require('../models')
const mongoose = require('mongoose'); 
const { handleError, handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');

/**
 * Get list from database
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res)=>{
    try{
        const user =req.user
        const data=await tracksModel.find({});
        //console.log(user)
        res.send({data, user})
    }catch(e){
        console.log(e)
        handleHttpError(res,"ERROR_GET_ITEMS")
    }   
};

/**
 * Get item details
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req,res)=>{
    try{
        const body = matchedData(req)
        const {id} = body
        console.log("idTrack:",id)
        const data=await tracksModel.findById(id);
        res.send({data})
    }catch(e){        
        handleHttpError(res,"ERROR_GET_ITEM")
    }
};

/**
 * Insert an item to database
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req,res)=>{
    try{
        const body = matchedData(req)       
        const data= await tracksModel.create(body)
        res.send({data})         
    }catch(e){        
        handleHttpError(res,"ERROR_CREATE_ITEMS")
    }
    
};

/**
 * Update an item to database
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req,res)=>{
    try{
        const {id, ...body} = matchedData(req)   
        //const {id} =body    
        const data= await tracksModel.findByIdAndUpdate(id,body)
        res.send({data})         
    }catch(e){        
        handleHttpError(res,"ERROR_UPDATE_ITEMS")
    }
};

/**
 * Delete an item from database
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req,res)=>{
    try{
        const body = matchedData(req)
        const {id} = body
        console.log("idTrack:",id)
        const data=await tracksModel.delete({_id:id});
        res.send({data})
    }catch(e){        
        handleHttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = {getItems,getItem, createItem, updateItem, deleteItem};