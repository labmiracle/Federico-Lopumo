function findMaxConsecutiveOnes(matrix) {
    // Verificar si hay algún valor distinto de 1 o 0 en la matriz
    for (let row of matrix) {
      for (let value of row) {
        if (value !== 0 && value !== 1) {
          return -1;
        }
      }
    }
  
    let maxConsecutiveOnes = 0;
    let currentConsecutiveOnes = 0;
  
    for (let row of matrix) {
      for (let value of row) {
        if (value === 1) {
          currentConsecutiveOnes++;
          maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentConsecutiveOnes);
        } else {
          currentConsecutiveOnes = 0;
        }
      }
    }
  
    return maxConsecutiveOnes;
  }
  
  module.exports = findMaxConsecutiveOnes;
  