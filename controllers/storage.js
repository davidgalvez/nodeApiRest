const fs = require("fs");
const { matchedData } = require('express-validator');
const {storageModel} = require('../models')
const {handleHttpError} = require('../utils/handleError')
const mongoose = require('mongoose'); 
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

/**
 * Get list from database
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res)=>{
    try{
        const data=await storageModel.find({});
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
const getItem = async (req,res)=>{
    try{
        const {id} = matchedData(req)
        const data=await storageModel.findById(id);
        res.send({data})
    }catch(e){
        handleHttpError(res,"ERROR_GET_DETAIL_ITEM")
    }
};

/**
 * Insert an item to database
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req,res)=>{
    try{
        const {body, file} = req
        console.log(body)
        const fileData={
            filename:file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
        }
        //const parseBody = {...body, mediaId: new mongoose.Types.ObjectId(body.mediaId)}
        const data= await storageModel.create(fileData)
        res.send({data})
    }catch(e){
        handleHttpError(res,"ERROR_DELETE_ITEM")
    }
     
};

/**
 * Delete an item from database
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req,res)=>{
    try{
        const {id} = matchedData(req)
        const dataFile=await storageModel.findById(id);
        await storageModel.delete({_id:id})
        const {filename} =dataFile
        const filePath =`${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath)
        const data={
            filePath,
            deleted:1
        }
        res.send({data})
    }catch(e){
        handleHttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = {getItems,getItem, createItem, deleteItem};