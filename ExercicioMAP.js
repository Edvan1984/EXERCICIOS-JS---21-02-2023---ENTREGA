let temperatura = [20, 25, 30, 15];

let multiplicado = temperatura.map(function(temperatura){
    return temperatura * 1.8 + 32;
});

console.log("Temperatura Fahrenheit: ", multiplicado);
