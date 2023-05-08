//Ejercicio 2

function generateSecretNumber(): number[] {
    const digits: number[] = [];
    for (let i = 0; i < 4; i++) {
        digits.push(Math.floor(Math.random() * 7)); // genera un número aleatorio entre 0 y 6
    }
    return digits;
}

function checkGuess(secretNumber: number[], guess: number[]): string {
    let result = "";
    // Primero revisamos si hay coincidencias exactas (X)
    for (let i = 0; i < secretNumber.length; i++) {
        if (secretNumber[i] === guess[i]) {
            result += "X";
        }
    }
    // Luego revisamos si hay coincidencias en otra posición (-)
    for (let i = 0; i < secretNumber.length; i++) {
        if (secretNumber.includes(guess[i]) && secretNumber[i] !== guess[i]) {
            result += "-";
        }
    }
    // Si no hay coincidencias, devolvemos un string vacío
    return result;
}

// Ejemplo de uso:
const secretNumber = generateSecretNumber();
console.log(`Número secreto: ${secretNumber.join("")}`);
let guess = [1, 3, 3, 4];
let result = checkGuess(secretNumber, guess);
console.log(`Primer intento: ${result}`); // Salida: -
guess = [4, 2, 5, 1];
result = checkGuess(secretNumber, guess);
console.log(`Segundo intento: ${result}`); // Salida: X--
guess = [6, 5, 2, 1];
result = checkGuess(secretNumber, guess);
console.log(`Tercer intento: ${result}`); // Salida: XX--
