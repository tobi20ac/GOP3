
const FreeUser = require("./Model/freeUser");

const PaidUser = require("./Model/paiduser");

const Match = require("./Model/match");

var user1 = new FreeUser("lars", "olsen", "lars123", "password", "1999-12-12", "flot fyr", "image.png", "tennis", "friluftsliv");
var user2 = new PaidUser("lone", "jensen", "lone123", "password", "1998-12-02", "ung kvinde", "image.png", "tennis", "fodbold", "123");

var match = new Match();

match.checkIfMatch(user1, user2);