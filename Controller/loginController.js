// Controller for når en bruger vil logge ind. 

//Importerer users arrayet.
const users = require("../HardcodedData");

//to variabler som fungerer som eksempel på noget en bruger vil bare indtastet i sit login felt.
var usernameAttempt = "lars123";
var passwordAttempt = "password";

//erklærer jsonwebtoken.
var jwt = require('jsonwebtoken');

//funktion der tjekker om der findes en bruger med matchende brugernavn og password i forhold-
// til hvad der er "indtastet". 
function loginController(req, res) {
    for(let i = 0; i<users.length; i++){
        if(users[i].username == usernameAttempt && users[i].password == passwordAttempt){
            var user = users[i];
        }
    }
    // laver en token der er signet med brugeren som logger ind, hvis info er valid. 
    if(user){
        const token = jwt.sign({user}, 'secret acces code')
        res.json({
            token: token
        })
    }
    // ellers sender den fejlbeksed. 
    else(res.json("Invalid login"));
}

module.exports = loginController