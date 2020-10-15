const express = require("express");

const app = express();

const PORT = 3000; 

app.get("/", function(res, req){
    res.status(200).send("Hello world");
});

app.listen(PORT, function(){
    console.log("Server is running on PORT", PORT);
});