//CALCULAR NÚMEROS PRIMOS: Un número primo es aquel que solo es divisible por si mismo y por la unidad.

//-Podemos hacer una optimización e iterar desde el número 2 hasta la raíz cuadrada del número.
//-Para poder calcular la matriz cuadrada del número nos apoyamos en el método ".sqrt()" del objeto "Math"
Number.prototype.isPrime = function() {
    let raiz = Math.sqrt(this); //
    for( let i=2; i<=raiz; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}
//ENCONTRAR EL NÚMERO PRIMO 10.000
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 10000 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

