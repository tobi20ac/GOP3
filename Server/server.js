//Gemmer express librabry som variabel. 
const express = require("express");
//initialiserer express server og opretter en variabel for porten. 
const server = express();

const PORT = 4001; 

//Henter controllers fra de respektive stier.
const userController = require("../Controller/userController");

const loginController = require("../Controller/loginController");

const matchController = require("../Controller/matchController");

const addInterestController = require("../Controller/addInterestController");

//Læser endpoints på de forskellige routes. 
server.get('/', userController);

server.post('/login', loginController)

server.post("/match", matchController);

server.post("/addInterest", addInterestController);

//Server bliver aktiveret. 
server.listen(PORT, function(){
    console.log("Server is running on PORT", PORT);
});