const User = require('./data');

function deleteUser(deletepet){
    //User.splice(deletepet);
    User.pop();
}
console.log(User);
console.log("----------------------------------");

deleteUser()
console.log(User);
