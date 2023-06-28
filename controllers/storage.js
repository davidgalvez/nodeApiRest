const {storageModel} = require('../models')
const mongoose = require('mongoose'); 
const PUBLIC_URL = process.env.PUBLIC_URL

/**
 * Get list from database
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res)=>{
    const data=await storageModel.find({});
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
    const {body, file} = req
    console.log(body)
    const fileData={
        filename:file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    //const parseBody = {...body, mediaId: new mongoose.Types.ObjectId(body.mediaId)}
    const data= await storageModel.create(fileData)
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