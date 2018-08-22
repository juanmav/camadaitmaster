console.log('hola!');

var numeros = [2,5,1,10,20];

numeros.forEach(function (n) {
    console.log('Me dieron un numero: ', n);
});

console.log('---------------------------------------------------');

var suma = numeros.reduce(function(acc, n){
    console.log("El Acummulador es: ", acc);
    console.log("El valor es: ", n);
    return acc + n
},0);

console.log("la suma de numeros es: ", suma);