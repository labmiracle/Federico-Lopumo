function addOnlyNums(...args) {
    return args.reduce((acc, val) => {
        if (typeof val === "number") {
            return acc + val;
        }
        if (!isNaN(val)) {
            return acc + parseFloat(val);
        }
        return acc;
    }, 0);
}


//ejemplo de uso

console.log(addOnlyNums(1, 2, 3)); // 6
console.log(addOnlyNums("4", 5, "6")); // 15
console.log(addOnlyNums(7, "8x", 9)); // 16
console.log(addOnlyNums()); // 0