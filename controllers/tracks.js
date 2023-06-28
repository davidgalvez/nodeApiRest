const {tracksModel} = require('../models')
const mongoose = require('mongoose'); 

/**
 * Get list from database
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res)=>{
    const data=await tracksModel.find({});
    res.send({data})
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
    const {body} = req
    console.log(body)
    const parseBody = {...body, mediaId: new mongoose.Types.ObjectId(body.mediaId)}
    const data= await tracksModel.create(parseBody)
    res.send({data}) 
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