const User = require("./Model/user");
 
const FreeUser = require("./Model/freeUser");

const PaidUser = require("./Model/paiduser");

const Creditcard = require("./Model/creditcard");

const Interest = require("./Model/interest");

const Match = require("./Model/match");

const Image = require("./Model/image");


var user1 = new FreeUser("lars", "olsen", "1999-12-12", "flot fyr", "image.png", "tennis", "friluftsliv");
var user2 = new PaidUser("lone", "jensen", "1998-12-02", "ung kvinde", "image.png", "tennis", "fodbold", "123");

var match = new Match();

match.checkIfMatch(user1, user2);