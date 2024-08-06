interface IRectangle{
    width: number;
    heigth : number;
}
class Rectangle{
    width : number;
    heigth : number

    constructor({width,heigth}: IRectangle){
        this.width = width;
        this.heigth = heigth;
    }
    getAREA():number{
        return this.width * this.heigth
    }
}
let Retangulo = new Rectangle({width: 10, heigth: 2})
console.log(Retangulo.getAREA()) // 20