const {Sequelize} =require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect:'mysql'
    }
)

const bdConnectMysql = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("MYSQL connection success")
    }catch(e){
        console.log("MYSQL connection error:",e);
    }
}

module.exports = {sequelize,bdConnectMysql}