// Mysql Connection. 
const mysql = require("mysql");
const con = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"productcategory"
});

con.connect((err)=>{
    if(err){
        console.warn("error")
    }
    else{
        console.warn("success");
    }
})


module.exports = con;