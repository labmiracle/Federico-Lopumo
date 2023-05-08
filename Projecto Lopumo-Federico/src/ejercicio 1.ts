//EJERCICIOS
//Ejercicio 1


function countJewels(jewels: string, stones: string): number {
    const jewelSet = new Set(jewels);
    return stones.split('').reduce((count, stone) => jewelSet.has(stone) ? count + 1 : count, 0);
}

console.assert(countJewels("aA", "aAAbbbb") === 3);
console.assert(countJewels("z", "ZZ") === 0);
