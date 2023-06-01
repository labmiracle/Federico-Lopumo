//ejercicio 3.1



function add(x: number, y: number): number {
    return x + y;
}

function sumArray(numbers: string[]): number {
    return numbers.reduce((acc, curr) => acc + Number(curr), 0);
}

const someSum = sumArray(['3', '6', '9']);

console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);


