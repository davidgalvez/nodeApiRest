const express =require("express");
const fs = require("fs");
const router= express.Router();

const PATH_ROUTES = __dirname; //ruta absoluta física

const removeExtension =(FileName) =>{
    return FileName.split(".").shift()
}

const a= fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name =removeExtension(file)
    if(name!== "index")
    {
        router.use(`/${name}`,require(`./${file}`));
    }
})
console.log({a})

module.exports=router;