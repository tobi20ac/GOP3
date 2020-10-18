//importerer users array.
const users = require("../HardcodedData");
//importerer Match
const Match = require("../Model/match");
//opretter et Match variabel. 
var match = new Match();

//Funktion der tjekker om to brugere har to interesser der er ens ved at bruge checkIfMatch 
// metoden fra Match klassen. 
function loginController(req, res) {
    if(match.checkIfMatch(users[0], users[1]) == true){
        res.json(users[0].username + " and " + users[1].username + " is a match");
    } else {
        res.json("No match");
    }
    
}

module.exports = loginController;
