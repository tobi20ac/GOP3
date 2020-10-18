//Dette er hardcoded data for to brugere. 

//Importerer FreeUser
const FreeUser = require("./Model/freeUser");
//Importerer PaidUser
const PaidUser = require("./Model/paiduser");
//Opretter to brugere og tilføjer til array. 
var user1 = new FreeUser("lars", "olsen", "lars123", "password", "1999-12-12", "flot fyr", "image.png", "tennis", "friluftsliv");
var user2 = new PaidUser("lone", "jensen", "lone123", "password", "1998-12-02", "ung kvinde", "image.png", "golf", "fodbold", "123");

var users = [user1, user2];

//Eksporterer users.
module.exports = users;


