const User = require('./data');

function addnewPet(newPet){

       return User.push(newPet);
}

const gato = {
    nome: "Nina",
    especie: "Coelho",
    raca: "Mini Lop",
    idade: 4,
    dono: "Luiz Santos"
  };
addnewPet(gato);
console.log("funcionol");
console.log(User);
