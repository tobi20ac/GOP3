
//Importerer User
const User = require("./user")

class FreeUser extends User{
    constructor(firstName, lastName, birthday, description, image, interest1, interest2){
        super(firstName, lastName, birthday, description, image, interest1, interest2);
    }
}

//Eksporterer FreeUser
module.exports = FreeUser; 