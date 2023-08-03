const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const getProperties = require('../utils/handlePropertiesEngine')
const propertiesKey = getProperties()

/**
 * User object must be send as parameter
 * @param {*} user 
 */
const tokenSign = async (user)=>{
    const sign = jwt.sign(
        {
            [propertiesKey.user_id]: user[propertiesKey.user_id],
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn:"2h"
        }
    )
    return sign
}

/**
 * The Jwt session token must be passed as parameter
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt)=>{
    try{
        return jwt.verify(tokenJwt,JWT_SECRET)

    }catch(e){
        return null
    }
}

module.exports ={tokenSign, verifyToken}