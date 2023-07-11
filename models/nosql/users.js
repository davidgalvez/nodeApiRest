const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete");

const userSheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String,
            unique:true,    
        },
        password:{
            type:String,
            select:false
        },
        role:{
            type:["user","admin"],
            default:"user",
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

userSheme.plugin(mongooseDelete,{overrideMethods:'all'})
module.exports = mongoose.model("users",userSheme)