const ENGINE_DB = process.env.ENGINE_DB
const get_properties =() =>{
    const data ={
        nosql:{
            id:'_id',
            user_id:'_id'
        },
        mysql:{
            id:'_id',
            user_id:'cod_usuario'
        },
    }

    return data[ENGINE_DB]
}

module.exports = get_properties