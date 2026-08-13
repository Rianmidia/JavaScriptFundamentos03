function apresentar(nome){
    console.log("Olá," + nome);
}

apresentar("Vitor");

function sistema(nome = "Visitante"){
    console.log("Olá," + nome)
}
sistema();
sistema("Vitor");

function somar(numero1 , numero2){
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
}

somar(10,5);