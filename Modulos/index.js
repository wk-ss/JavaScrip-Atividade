const { user } = require("./data")
const jsonName = require("./db.json")
const { updateUser } = require("./Updatepets")
const { updateNameUserI } = require('./Updatepets')

updateUser(0)

console.log(updateNameUserI("ruan"));

//console.log(user);
console.log(jsonName)
