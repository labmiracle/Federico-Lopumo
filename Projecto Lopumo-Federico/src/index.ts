console.log('Hello World')

//TIPOS
//ejercicio 2.1

function doStuff(value: string | number): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
        console.log(value.toPrecision(5));
    }
    value;
}


//ejercicio 2.2


function padLeft(value: string, padding: number | string): string {
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    return padding + value;
}

console.log('[Ejercicio 4.2]', `8${padLeft('', 0)}9${padLeft('', '')}10${padLeft('', '')}11${padLeft('', '')}12${padLeft('', '')}`);




//ejercicio 2.3

const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten<T>(array: (T | T[])[]): T[] {
    const flattened: T[] = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            flattened.push(...element);
        } else {
            flattened.push(element);
        }
    }

    return flattened;
}

const flattenedNumbers: number[] = flatten(numbers);

console.log('[Ejercicio 4.3]', flattenedNumbers);




//ejercicio 2.4


interface EggLayer {
    layEggs(): void;
}

interface Flyer {
    fly(height: number): void;
}

interface Swimmer {
    swim(depth: number): void;
}

type BirdLike = EggLayer & Flyer;
type FishLike = EggLayer & Swimmer;

type Animal = BirdLike | FishLike;

class Bird implements BirdLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
};

class Fish implements FishLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }

    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal(): Animal {
    const animals: Animal[] = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];

    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal: Animal = getRandomAnimal()): string {
    if (animal instanceof Fish) {
        animal.swim(10);
    } else if (animal instanceof Bird) {
        animal.fly(10);
    }

    return animal.species;
}

console.log('[Ejercicio 4.4]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);





//FUNCIONES
//ejercicio 3.1



function add(x: number, y: number): number {
    return x + y;
}

function sumArray(numbers: string[]): number {
    return numbers.reduce((acc, curr) => acc + Number(curr), 0);
}

const someSum = sumArray(['3', '6', '9']);

console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);



//ejercicio 3.2


interface BankAccount {
    money: number;
    deposit: (value: number, message?: string) => void;
}

const bankAccount: BankAccount = {
    money: 0,
    deposit(value: number, message?: string): void {
        this.money += value;
        if (message) {
            console.log(message);
        }
    }
};

bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received');

console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);



//ejercicio 3.3


function computeScore(word: string): number {
    const letters: string[] = word.toUpperCase().split('');
    return letters.reduce((accum: number, curr: string) => accum += getPointsFor(curr), 0);
}

function getPointsFor(letter: string): number {
    const lettersAndPoints: [string, number][] = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];
    return lettersAndPoints.reduce((computedScore: number, pointsTuple: [string, number]) => {
        const [letters, score] = pointsTuple;
        if (letters.split('').find((ll) => ll === letter)) {
            return computedScore += score;
        }
        return computedScore;
    }, 0);
}

console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);




//ejercicio 3.4



function greet(greeting: string = 'Hola'): string {
    return greeting.toUpperCase();
}

const defaultGreeting: string = greet();
const portugueseGreeting: string = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);


//ejercicio 3.5


function layEggs(quantity: number = 1, color: string = 'blancos'): void {
    console.log(`[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. ¡Buen trabajo!`);
}



//ejercicio 3.6


let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

multiply = function (x: number, y: number): number {
    return x * y;
}

capitalize = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));


//ejercicio 3.7


const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection<T>(item: T, collection: T[]): T[] {
    collection.push(item);
    return collection;
}

// Añadir algunas cosas a las colecciones
pushToCollection('hi', stringCollection);
pushToCollection('1', numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);


//EJERCICIOS
//Ejercicio 1


function countJewels(jewels: string, stones: string): number {
    const jewelSet = new Set(jewels);
    return stones.split('').reduce((count, stone) => jewelSet.has(stone) ? count + 1 : count, 0);
}

console.assert(countJewels("aA", "aAAbbbb") === 3);
console.assert(countJewels("z", "ZZ") === 0);


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


//Juego de cartas

interface Carta {
    valor: number;
    palo: string;
}

interface Mazo {
    cartas: Carta[];
}

class JuegoDeCartas {
    private mazo: Mazo;

    constructor() {
        this.mazo = {
            cartas: [],
        };
        // Generar todas las cartas del mazo
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j <= 13; j++) {
                let palo = "";
                switch (i) {
                    case 0:
                        palo = "corazones";
                        break;
                    case 1:
                        palo = "diamantes";
                        break;
                    case 2:
                        palo = "treboles";
                        break;
                    case 3:
                        palo = "espadas";
                        break;
                }
                this.mazo.cartas.push({
                    valor: j,
                    palo: palo,
                });
            }
        }
    }

    private obtenerCartaAlAzar(): Carta {
        const numCartas = this.mazo.cartas.length;
        const cartaIdx = Math.floor(Math.random() * numCartas);
        const carta = this.mazo.cartas[cartaIdx];
        this.mazo.cartas.splice(cartaIdx, 1); // Eliminar la carta del mazo
        return carta;
    }

    jugar(): void {
        const jugador1 = this.obtenerCartaAlAzar();
        const jugador2 = this.obtenerCartaAlAzar();
        console.log(`Jugador 1 sacó ${jugador1.valor} de ${jugador1.palo}`);
        console.log(`Jugador 2 sacó ${jugador2.valor} de ${jugador2.palo}`);
        if (jugador1.valor > jugador2.valor) {
            console.log("Jugador 1 gana!");
        } else if (jugador1.valor < jugador2.valor) {
            console.log("Jugador 2 gana!");
        } else {
            console.log("Empate! Se vuelve a jugar.");
            this.jugar(); // Repetir el proceso
        }
    }
}

const juego = new JuegoDeCartas();
juego.jugar();







