function onlyUniques(...args) {
    return args.filter((value, index, self) => self.indexOf(value) === index);
  }

  

  //ejemplo de uso

  const arr = onlyUniques(1, 2, 3, 2, 4, 3, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]
