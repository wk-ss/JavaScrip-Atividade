interface IPerson {
    name: string;
    age : number;
}
class Person{
    name: string;
    age : number;

    constructor ({ name, age}:IPerson) {
        this.name = name;
        this.age = age;
    }
    sayHello(){
        return `Hello, meu nome é ${this.name} e tenho ${this.age} years old.`;
    }
}
const pessoal = new Person({name:"will",age: 10});
console.log("...........");
console.log(pessoal.sayHello()); //Hello, meu nome é will e tenho 10 years old.


