const mongoose = require("mongoose")

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

module.exports = mongoose.model("users",userSheme)