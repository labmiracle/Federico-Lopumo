// sumPositiveNumbers.js
function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const num = Number(arr[i]);
      if (!isNaN(num) && num > 0 && typeof arr[i] !== 'boolean') {
        sum += num;
      }
    }
    return sum;
  }
  
  module.exports = sumPositiveNumbers;
  