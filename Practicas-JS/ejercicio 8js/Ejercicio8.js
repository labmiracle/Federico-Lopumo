//ejercicio 8



function sumar () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(suma(2, 4, 6)); // Devuelve 12
console.log(suma(10, 20, 30, 40)); // Devuelve 100