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

//eksporterer match 
module.exports = Match;