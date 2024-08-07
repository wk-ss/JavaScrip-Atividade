"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var User = /** @class */ (function () {
  function User(_a) {
    var id = _a.id,
      name = _a.name,
      email = _a.email,
      location = _a.location;
    this.lista = [];
    this.id = id;
    this.name = name;
    this.email = email;
    this.location = location;
  }
  User.prototype.showUserData = function () {
    if (this.location) {
      return "A pessoa "
        .concat(this.id, " mora no endere\u00E7o ")
        .concat(this.location.address, ", ")
        .concat(this.location.street);
    } else {
      return "A pessoa ".concat(
        this.id,
        " n\u00E3o possui endere\u00E7o cadastrado."
      );
    }
  };
  User.prototype.addList = function (id) {
    this.lista.push(id);
  };
  User.prototype.popList = function () {
    this.lista.pop();
  };
  User.prototype.mostrarList = function () {
    return this.lista;
  };
  User.prototype.showMenu = function () {
    console.log(
      "\n        1. Mostrar todos os IDs na lista\n        2. Adicionar um novo ID na lista\n        3. Excluir o \u00FAltimo ID da lista\n        4. Encerrar\n        "
    );
  };
  User.prototype.handleUserInput = function (answer, rl) {
    var _this = this;
    switch (answer.trim()) {
      case "1":
        console.log("IDs na lista:", this.mostrarList());
        break;
      case "2":
        rl.question("Digite o novo ID a ser adicionado: ", function (input) {
          var newId = isNaN(Number(input)) ? input : Number(input);
          _this.addList(newId);
          console.log("ID ".concat(newId, " adicionado."));
          _this.promptUser(rl);
        });
        return; // Retornar para evitar múltiplas chamadas de prompt
      case "3":
        this.popList();
        console.log("Último ID removido.");
        break;
      case "4":
        console.log("Encerrando...");
        rl.close();
        return; // Encerrar o programa
      default:
        console.log("Opção inválida.");
    }
    this.promptUser(rl);
  };
  User.prototype.promptUser = function (rl) {
    var _this = this;
    this.showMenu();
    rl.question("Escolha uma opção: ", function (answer) {
      return _this.handleUserInput(answer, rl);
    });
  };
  return User;
})();
// Criar instâncias dos usuários
var user1 = new User({
  id: 1,
  name: "will",
  email: "will@gog.com",
  location: { address: "rua", number: 10, street: "boa vista" },
});
console.log(user1);
console.log(user1.showUserData());
var user2 = new User({
  id: 2,
  name: "lily",
  email: "lily@gog.com",
});
console.log(user2);
console.log(user2.showUserData());
// Configurar o readline para entrada do usuário
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Iniciar o prompt
user1.promptUser(rl);
