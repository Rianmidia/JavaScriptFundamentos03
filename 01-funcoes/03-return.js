function somar(a , b){
    return a+b;
}

const resultado = somar(15 , 30);

console.log(resultado);

console.log(somar(7,9));

let ligado = false;

/*function ligaDesligar(valor){
    if(ligado === false){
        ligado = true;
        return "Ligado"
    }else{
        ligado = true;
        return "Desligado"
    }
}*/

function ligaDesligar(){
    ligado = !ligado
    return ligado ? "Ligado" : "Desligado"
}
console.log(ligaDesligar());
console.log(ligaDesligar());