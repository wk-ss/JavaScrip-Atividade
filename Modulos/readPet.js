const User = require('./data');

function readpets(){
    return User;
}
console.log(User);

module.exports = {
    readpets
};