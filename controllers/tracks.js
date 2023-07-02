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
        const data=await tracksModel.find({});
        res.send({data})
    }catch(e){
        handleHttpError(res,"ERROR_GET_ITEMS")
    }
    
};

/**
 * Get item details
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req,res)=>{
    
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
const updateItem = (req,res)=>{};

/**
 * Delete an item from database
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req,res)=>{};

module.exports = {getItems,getItem, createItem, updateItem, deleteItem};