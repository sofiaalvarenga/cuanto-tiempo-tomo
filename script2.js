//FUNCIÓN FIBONACCI
// recursiva
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
console.log(rFib(20));

// iterativa
function iFib(n) {
    const vals = [0, 1];
    while (vals.length- 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
} 
console.log(iFib(20)); //La más RÁPIDA en responder es la FUNCIÓN FIBONACCI ITERATIVA

