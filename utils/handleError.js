const handleError = (res,message='Something were wrong', code=403) =>{
    res.status(code)
    res.send({error:message})
}

const handleHttpError = (res, message='Something were wrong', code=403) =>{
    res.status(code)
    res.send({error:message})
}

module.exports ={handleError,handleHttpError}