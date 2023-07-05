const customHeader = (req, res, next) =>{
    try{
        const apikey = req.headers.api_key        
        if(apikey =='davidfdev-123'){
            next()
        }else{            
            res.status(403)
            res.send({error:"INCORRECT API KEY"})
        }
    }catch(e){
        res.status(403)
        res.send({error:"ERROR EN EL CUSTOM HEADER"})
    }   
    
}

module.exports =customHeader