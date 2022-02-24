const con = require("./product-categoryconfig");
const express = require("express");
const app =  express();


app.get('/',(req,resp)=>{
    con.query("select category.cid, category.cname, products.pid,products.pname from category INNER JOIN products on category.cid = products.cid ",(error,result)=>{
        if(error) error;
        resp.send(result);
    })
})
app.listen(5000);