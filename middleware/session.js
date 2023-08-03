const {handleHttpError} = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")
const {usersModel} = require("../models")
const getProperties = require('../utils/handlePropertiesEngine')
const propertiesKey = getProperties()

const authMiddleware = async (req, res, next) =>{
    try{
        if(!req.headers.authorization)
        {
            handleHttpError(res,"NO SESSION TOKEN FOUND IN REQUEST", 401)
            return
        }

        const token =req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)

        if(!dataToken)
        {
            handleHttpError(res,"NO PAYLOAD TOKEN SEND", 401)
            return
        }

       const query ={
        [propertiesKey.user_id]:dataToken[propertiesKey.user_id]
       }

        const user = await usersModel.findOneByQuery(query)
        //await usersModel.findOne({email:req.email}).select('password name role email') 
        //await usersModel.findOneByEmail(req.email)
        req.user=user
        
        next()

    }catch(e){
        handleHttpError(res,"NO SESSION", 401)
        console.log("errorSesion",e)
    }
}

module.exports = authMiddleware