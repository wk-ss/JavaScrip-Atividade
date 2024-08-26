const { user } = require('./data');
const { name, age } = require("./db.json")


function updateUser(userId) {
    user.findIndex(user => user.id === userId)
    user[userId] = {
        ...user[userId],
        nome: "ravena",
        raca: "gato"

    }

}

function updateNameUserI(newName) {
    fetch("../db.json", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newName })
    })
}


module.exports = {
    updateUser,
    updateNameUserI
};