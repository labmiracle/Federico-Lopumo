//FizzBuzz

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num; // Retorna el número en caso de no ser divisible por 3 ni por 5
  }
}

module.exports = { fizzBuzz };
