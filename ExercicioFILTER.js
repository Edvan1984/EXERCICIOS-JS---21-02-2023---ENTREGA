//FILTER - Exercicio 1
let notas = [4, 7, 9, 3, 10, 5];

let maiorIgualSete = notas.filter(nota => nota >= 7);
console.log("maiores e igual sete: ", maiorIgualSete);

//FILTER - Exercicio 2
const palavras = ["sol", "mar", "computador", "lua", "código"];

const maisQueQuatroLetras = palavras.filter(function(letras){
    return letras.length > 4;
});

console.log("Palavras com mais de 4 letras:  ", maisQueQuatroLetras);