function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}



//ejemplo de uso

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = combineTwoArrays(arr1, arr2);
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]
