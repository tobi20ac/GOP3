//Importerer User
const User = require("./user")

//Klasse der repræsenterer en Free User. Nedarver fra User. 
class FreeUser extends User{
    constructor(firstName, lastName, username, password, birthday, description, image, interest1, interest2){
        super(firstName, lastName, username, password, birthday, description, image, interest1, interest2);
    }
}

//Eksporterer FreeUser
module.exports = FreeUser; 