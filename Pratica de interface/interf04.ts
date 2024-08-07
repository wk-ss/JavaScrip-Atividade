import * as readline from "readline";

interface IUser {
  id: number;
  name: string;
  email: string;
  location?: {
    address: string;
    number: number;
    street: string;
  };
}

class User {
  id: number;
  name: string;
  email: string;
  location?: {
    address: string;
    number: number;
    street: string;
  };
  lista: Array<string | number> = [];

  constructor({ id, name, email, location }: IUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.location = location;
  }

  showUserData(): string {
    if (this.location) {
      return `A pessoa ${this.id} mora no endereço ${this.location.address}, ${this.location.street}`;
    } else {
      return `A pessoa ${this.id} não possui endereço cadastrado.`;
    }
  }

  addList(id: string | number): void {
    this.lista.push(id);
  }

  popList(): void {
    this.lista.pop();
  }

  mostrarList(): Array<string | number> {
    return this.lista;
  }

  showMenu(): void {
    console.log(`
        1. Mostrar todos os IDs na lista
        2. Adicionar um novo ID na lista
        3. Excluir o último ID da lista
        4. Encerrar
        `);
  }

  handleUserInput(answer: string, rl: readline.Interface): void {
    switch (answer.trim()) {
      case "1":
        console.log("IDs na lista:", this.mostrarList());
        break;
      case "2":
        rl.question("Digite o novo ID a ser adicionado: ", (input) => {
          const newId = isNaN(Number(input)) ? input : Number(input);
          this.addList(newId);
          console.log(`ID ${newId} adicionado.`);
          this.promptUser(rl);
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
  }

  promptUser(rl: readline.Interface): void {
    this.showMenu();
    rl.question("Escolha uma opção: ", (answer) =>
      this.handleUserInput(answer, rl)
    );
  }
}

// Criar instâncias dos usuários
const user1 = new User({
  id: 1,
  name: "will",
  email: "will@gog.com",
  location: { address: "rua", number: 10, street: "boa vista" },
});
console.log(user1);
console.log(user1.showUserData());

const user2 = new User({
  id: 2,
  name: "lily",
  email: "lily@gog.com",
});
console.log(user2);
console.log(user2.showUserData());

// Configurar o readline para entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Iniciar o prompt
user1.promptUser(rl);
