
//Importerer User
const User = require("./user")

//Importerer Creditcard
const Creditcard = require("./creditcard")

//Klasse der repræsenterer en Paid User. Nedarver fra User. 
class PaidUser extends User{
    constructor(firstName, lastName, username, password, birthday, description, image, interest1, interest2, cardNmb){
        super(firstName, lastName, username, password, birthday, description, image, interest1, interest2);
        this.creditCard = new Creditcard(cardNmb);
    }
}

//Eksporterer PaidUser
module.exports = PaidUser;