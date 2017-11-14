var express = require("express");
var app = express();

app.get('/', function(request, response){
    response.redirect(301,"/mini");
});

app.get('/mini', function(request, response){
    response.send("<h1>Mini</h1>");
});

app.listen(3000,function(){
    console.log("Node program started. Listening on 3000");
})

