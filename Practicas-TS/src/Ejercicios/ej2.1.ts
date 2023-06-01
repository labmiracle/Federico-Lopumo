//ejercicio 2.1

function doStuff(value: string | number): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
        console.log(value.toPrecision(5));
    }
    value;
}
