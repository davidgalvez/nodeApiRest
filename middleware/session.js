const {handleHttpError} = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")
const {usersModel} = require("../models")

const authMiddleware = async (req, res, next) =>{
    try{
        if(!req.headers.authorization)
        {
            handleHttpError(res,"NO SESSION TOKEN FOUND IN REQUEST", 401)
            return
        }

        const token =req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)

        if(!dataToken._id)
        {
            handleHttpError(res,"ERROR ON ID TOKEN", 401)
            return
        }

        const user = await usersModel.findOne({_id:dataToken._id})
        await usersModel.findOne({email:req.email}).select('password name role email') 
        req.user=user
        
        next()

    }catch(e){
        handleHttpError(res,"NO SESSION", 401)
    }
}

module.exports = authMiddleware