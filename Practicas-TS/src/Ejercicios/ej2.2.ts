//ejercicio 2.2


function padLeft(value: string, padding: number | string): string {
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    return padding + value;
}

console.log('[Ejercicio 4.2]', `8${padLeft('', 0)}9${padLeft('', '')}10${padLeft('', '')}11${padLeft('', '')}12${padLeft('', '')}`);



