interface IUser{
    id: number;
    name: string;
    email: string;
    location? : {
        address: string;
        number: number;
        street: string;
    }
}
class User{
    id: number;
    name: string;
    email: string;
    location? : {
        address: string;
        number: number;
        street: string;
    }
    constructor({id,name,email,location}: IUser){
        this.id = id;
        this.name = name;
        this.email = email;
        this.location = location;
    }
    showUserData(){
        if(this.location != null){
            return  ` a pessoa ${this.id} mora no endereço ${this.location.address} ${this.location.street}`
        }
        else{
            return `a pessoa ${this.id} não possui endereço cadastrado`
        }
    }
}

const user1 = new  User({id:1,name:"will",email:"will@gog.com",
    location:{address:"rua",number:10,street:" boa vista"}});
console.log(user1);//ser {id: 1,name: 'will',email: 'will@gog.com',location: { address: 'rua', number: 10, street: ' boa vista' }}
console.log(user1.showUserData()) //  a pessoa 1 mora no endereço rua  boa vista

const user2 = new  User({id:2,name:"lily",email:"lily@gog.com"});
console.log(user2);//User {id: 2,name: 'lily',email: 'lily@gog.com',location: undefined}
console.log(user2.showUserData()); // a pessoa 2 não possui endereço cadastrado



