/*class Produto{
    cod: number;
    nome: string;
    preco: number;
    tamanho: number;
    peso: number;
    marca: string;
    cor: string;

    constructor(cod: number, nome: string, preco: number,
         tamanho: number, peso: number, marca: string, cor: string){
        this.cod = cod;
        this.nome = nome;
        this.preco = preco;
        this.tamanho = tamanho;
        this.peso = peso;
        this.marca = marca;
        this.cor = cor;
    
}
}*/

class Pessoa {
    nome: string;
    idade: number;
    altura: number;
constructor(nome:string, idade:number, altura:number) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
}}
class Lutador extends Pessoa{
    tipo: string;
    local: string;
    valor: number;
    constructor(nome: string, idade: number, altura: number, tipo: string, local: string, valor: number) {
        super(nome, idade, altura);
        this.tipo = tipo;
        this.local = local;
        this.valor = valor;
    }
    mostrarapresentacao(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Altura: ${this.altura}, Tipo: ${this.tipo}, Local: ${this.local}, Valor: ${this.valor}`);
    }
}

let lutador1 = new Lutador("Will", 25, 1.75, "Softex", "Fortaleza", 10000);

lutador1.mostrarapresentacao();