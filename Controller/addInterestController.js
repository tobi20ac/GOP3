// Controller for når en bruger vil tilføje en interesse. 

// require mit hardcoded users array.
const users = require("../HardcodedData");

//opretter variablen som kunne være et eksempel på hvad en bruger vil tilføje
var newInterest = "Havearbejde";

//Funktion der tilføjer interessen.
function addInterestController(req, res) {
    var user = users[0];
    //Tjekker om interessen allerede er registreret
    for(let i = 0; i<user.interests.array.length; i++){
        if(user.interests.array[i] != newInterest){
            //Tiføjer hvis den ikke allerede findes.
            user.interests.array.push(newInterest);
            res.json("Tilføjet " + newInterest + " til " + user.username + " interesser ");
            //Sender fejlbesked hvis den allerede er. 
        } else{
            res.json(newInterest + "is already in your list of interests");
        }
    }
}

//Eksporterer addinterestcontroller. 
module.exports = addInterestController;