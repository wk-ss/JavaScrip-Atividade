function verificarSinal(num:number):string {
    if (num <0 && !0){
        return "negative";
    }
    else if (num>0){
        return "positive";}
    else{
        return "zero";
    }
    }
console.log(verificarSinal(-9));