let ValoresCompras = [20, 25, 30, 15];

let soma = ValoresCompras.reduce(function(acumulador, valor){
    return acumulador + valor;
},0);

console.log("Soma total:  ", soma);

