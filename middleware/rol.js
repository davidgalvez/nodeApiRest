const {handleHttpError}=require("../utils/handleError")

/**
 * Array with allowed roles
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req, res, next)=>{
    try{
        const {user} = req
        const rolesByUser = user.role

        const checkValueRol = roles.some((roleSingle) =>rolesByUser.includes(roleSingle))
        if(!checkValueRol){
            handleHttpError(res,"USER_NOT_HAVE_PERMISSIONS",403)
            return
        }
        next()
    }catch(e){
        handleHttpError(res,"ERROR_ROL_PERMISSIONS",403)
    }
}

module.exports = checkRol