//Klasse for match. Indeholder en metode, der tager to brugere og undersøger om de har to ens
// interesser. Returnerer true, hvis de har og false hvis ikke. 
class Match {
    constructor(){}
    
    checkIfMatch(user1, user2){
        var match = false;

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

//eksporterer match 
module.exports = Match;
