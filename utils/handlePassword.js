const bcryptjs = require("bcryptjs")

/**
 * Password with no encryption
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain,10)
    return hash
}

/**
 * Send no-encrypted password and encrypted password
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = {encrypt, compare}