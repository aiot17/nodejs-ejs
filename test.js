var express = require("express");
var app = express()

app.get("/",(req,res)=>{
    var name = req.query.u1;
    var email = req.query.e1;
    var r = [name,email]
    if (name != null){
        ans = 1
        res.render("index4.ejs",{"r":r,"title":"hello world","ck":ans})
    }else{
        ans = 0
        res.render("index4.ejs",{"title":"hello world","ck":ans})
    }
})
var server = app.listen(5500,()=>{
    console.log("server is on...")
})