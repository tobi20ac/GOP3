//Importerer Interest
const Interest = require("./interest");

//Importerer Image.
const Image = require("./image");

//Klasse der repræsenterer en User. 
class User{
    constructor(firstName, lastName, username, password, birthday, description, image, interest1, interest2){
        this.firstName = firstName;
        this.lastName = lastName; 
        this.username = username;
        this.password = password;
        this.birthday = birthday;
        this.description = description;
        this.image = new Image(image);
        this.interests = new Interest(interest1, interest2);
    }
}

//Eksporterer User
module.exports = User;


/*class FreeUser extends User{
    constructor(firstName, lastName, birthday, description, image, interest1, interest2){
        super(firstName, lastName, birthday, description, image, interest1, interest2);
    }
}

class PaidUser extends User{
    constructor(firstName, lastName, birthday, description, image, interest1, interest2, cardNmb){
        super(firstName, lastName, birthday, description, interest1, interest2);
        this.creditCard = new Creditcard(cardNmb);
    }
}

class Creditcard{
    constructor(cardNmb){
        this.creditcardNumber = cardNmb;
    }
}

class Interest{
    constructor(interest1, interest2){
        this.array = [interest1, interest2];
    }
}

class Match {
    constructor(){}
    

    checkIfMatch = function(user1, user2){
        var match = false;
        //let string1 = user1.interests.join(",");
        //let string2 = user2.interests.join(",");

        var u1Inte = user1.interests.array;
        var u2Inte = user2.interests.array;
        var u1InteString = u1Inte.join(" ");
        var u2InteString = u2Inte.join(" ");

        for(let i = 0; i<2; i++){
            if(u1InteString.indexOf(u1Inte[i])>=0 && u2InteString.indexOf(u1Inte[i]) >= 0){
                match = true;
            } 
        }
        console.log(match);
        return match;
    }
}

class Image{
    constructor(file){
        this.file = file;
    }
}

var user3 = new FreeUser("lars", "olsen", "1999-12-12", "flot fyr", "image.png", "tennis", "friluftsliv");
var user4 = new FreeUser("lone", "jensen", "1998-12-02", "ung kvinde", "image.png", "tennis", "fodbold");

var match = new Match();

match.checkIfMatch(user3, user4);*/