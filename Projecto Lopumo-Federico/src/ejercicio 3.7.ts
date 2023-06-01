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
