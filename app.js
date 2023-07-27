require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo")
const {bdConnectMysql} = require("./config/mysql")
const app = express()
const ENGINE_DB = process.env.ENGINE_DB 

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port=process.env.PORT || 3000

/**Section to call routes */
// localhost/api/***
app.use("/api",require("./routes"));

app.listen(port,()=>{
    console.log(`The application is ready in the following route: http://localhost:${port}`)
})

if(ENGINE_DB =='nosql'){
    dbConnect() 
}else {
    bdConnectMysql()
}