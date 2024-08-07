abstract class Transporte {
  andar(name): string {
    return `${name} estava se movendo`;
  }
  velocidade(): string {
    return `esta a ${this.velocidade} km por hora`;
  }
  passageiro(): string {
    return `tem  ${this.passageiro} passageiro`;
  }
}
class Onibus extends Transporte {
  nome: string;
  cor: string;
  peso: string;

  constructor(nome: string, cor: string, peso: string) {
    super();
    this.nome = nome;
    this.cor = cor;
    this.peso = peso;
  }
  corrida() {
    this.velocidade;
  }
}
class Aviao extends Transporte {
  nome: string;
  tamanho: number;
  constructor(nome: string, tamanho: number) {
    super();
    this.nome = nome;
    this.tamanho = tamanho;
  }
}

let embrar = new Aviao("XUXA", 5000);
console.log(embrar.andar(embrar.nome));
