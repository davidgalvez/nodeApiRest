const mongoose = require("mongoose")
let success =true
const dbConnect = async () => 
{
    try{        
        const DB_URI=process.env.MONGO_DB_URI
        await mongoose.connect(DB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

    }
   catch(error)
   {
    success=false
    console.log("**Connection Error**")
   }
   if(success)
   {
    console.log("**Conection Success**")
   }
}

module.exports = dbConnect;