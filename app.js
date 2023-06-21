const express = require("express")
const cors = require("cors")
const app = express()

const port=3000

app.listen(port,()=>{
    console.log(`The application is ready in the following route: http://localhost:${port}`)
})