
//Importerer User
const User = require("./user")

//Importerer Creditcard
const Creditcard = require("./creditcard")

class PaidUser extends User{
    constructor(firstName, lastName, birthday, description, image, interest1, interest2, cardNmb){
        super(firstName, lastName, birthday, description, image, interest1, interest2);
        this.creditCard = new Creditcard(cardNmb);
    }
}

//Eksporterer PaidUser
module.exports = PaidUser;