require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo")
const app = express()

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`The application is ready in the following route: http://localhost:${port}`)
})

dbConnect()