const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize")

const User = sequelize.define(
    "users",
    {
        cod_usuario:{
            type:DataTypes.NUMBER,
            primaryKey:true,

        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        role:{
            type:DataTypes.ENUM(["user","admin"])
        }
    },
    {
        timestamps:true,
    }

)

/**
 * Custom model methods
 */

User.findOneByEmail = function (email){
    return User.findOne({where:{email:email}})
} 
User.findOneByQuery = function(query){
    return User.findOne({where:query})
}
module.exports = User