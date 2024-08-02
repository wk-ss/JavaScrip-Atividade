const cozinha = ["apple", "banana", "orange"];
cozinha.push("kiwi");
console.log(cozinha);
cozinha.pop();
console.log(cozinha);
cozinha.unshift("strawberry");
console.log(cozinha);
cozinha.shift();
console.log(cozinha);
console.log(cozinha.indexOf("banana"));
console.log(cozinha.includes("banana"));

let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);
let evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);

const produto = [
  { id: 1, nome: "camisa" },
  { id: 2, nome: "calça" },
  { id: 3, nome: "sandalia" },
];

function findProductById(id) {
  const encontrar = produto.find((product) => product.id);
  return encontrar;
}
console.log(findProductById(1));
