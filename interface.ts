interface Pessoa{
    nome: string;
    idade: number;
    altura: number;
    peso: number;
}

const Pessoa1: Pessoa={
    nome: "Will",
    idade: 25,
    altura: 1.75,
    peso: 80
}

const Pessoa2: Pessoa = {
    nome: "Julia",
    idade: 22,
    altura: 1.60,
    peso: 65
}

interface ProdutoLoja {
    id : number;
    nome: string;
    preco: number;
    categoria: string;
}

const produtosLista : ProdutoLoja []= [
 {id: 1 ,nome: " Produto 1" , preco : 100, categoria: "categoria1"},
 {id: 2 ,nome: " Produto 2" , preco : 200, categoria: "categoria2"},
 {id: 3 ,nome: " Produto 3" , preco : 300, categoria: "categoria1"},
 {id: 4 ,nome: " Produto 4" , preco : 400, categoria: "categoria2"},
]


function adicionarProduto(protudonova:ProdutoLoja ) : ProdutoLoja[] {
    produtosLista.push(protudonova
    )
    return produtosLista;
}
const chapel = {
    id:99,
    nome: "chapel",
    preco: 10000,
    categoria: "loja"
}
adicionarProduto(chapel)
console.log(produtosLista);

