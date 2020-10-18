//importerer users array
const users = require('../HardcodedData')

//controller der bare giver de brugere som findes i user array. 
function userController(req, res) {
    res.json(users)
}

//eksporter controlleren
module.exports = userController;