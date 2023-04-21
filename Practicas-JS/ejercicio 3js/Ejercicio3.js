//Ejercicio 3


function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let alturaActual = 0;
    let dias = 0;

    while (alturaActual < alturaDeseada) {
        alturaActual += velocidadCrecimiento;
        dias++;
        if (alturaActual < alturaDeseada) {
            alturaActual -= velocidadDecrecimiento;
        }
    }

    return dias;
}

// Ejemplo de uso:
console.log(calcularDiasCrecimiento(2, 1, 10)); // Devuelve 9
