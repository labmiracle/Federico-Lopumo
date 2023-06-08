//1.1
const { fizzBuzz } = require("../1-1.js");

describe("Validaciones fizzbuzz", () => {
  test("Divisible por 3 y por 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
  test("Divisible por 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  test("Divisible por 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(25)).toBe("Buzz");
  });
  test("si es cero", () => {
    expect(fizzBuzz(0)).toBe("FizzBuzz");
  });
  test("String", () => {
    expect(fizzBuzz("5")).toBe("Buzz");
    expect(fizzBuzz("Jest")).toBe("Jest");
  });
});




//1.2

const isLeapYear = require('../1-2.js');

describe('Validaciones isLeapYear', () => {
  test('Año bisiesto divisible por 4 y no por 100', () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  test('Año no bisiesto divisible por 4 y por 100', () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test('Año bisiesto divisible por 4, por 100 y por 400', () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test('Año no bisiesto no divisible por 4', () => {
    expect(isLeapYear(2019)).toBe(false);
  });

  test('Debe lanzar un error si se le pasa una cadena', () => {
    expect(() => isLeapYear('Hola')).toThrow('El argumento debe ser un número');
  });
});



//1.3



const { adn } = require("../1-3.js");

describe("Validaciones ADN", () => {
  test("", () => {
    expect(adn("")).toBe("");
    expect(adn("CTAGGGA")).toBe("CTAG");
  });
});




//1.4


// sumPositiveNumbers.test.js
const sumPositiveNumbers = require('../1-4.js');

test('should return the sum of positive numbers in the array', () => {
  expect(sumPositiveNumbers([1, -2, 3, '4', 'abc'])).toBe(8);
  expect(sumPositiveNumbers([-1, -2, -3])).toBe(0);
  expect(sumPositiveNumbers(['1', '2', '3'])).toBe(6);
  expect(sumPositiveNumbers([])).toBe(0);
});

test('should handle non-numeric values gracefully', () => {
  expect(sumPositiveNumbers(['abc', 'def', 'xyz'])).toBe(0);
  expect(sumPositiveNumbers([null, undefined])).toBe(0);
  expect(sumPositiveNumbers([true, false])).toBe(0);
});




//1.5

const { indicePrimerLetraRepe } = require("../1-5.js");

describe("test para devolver indice de primer letra repetida", () => {
  test("no ingresa nada", () => {
    expect(indicePrimerLetraRepe("")).toBe(-1);
  });

  test("ignora espacio", () => {
    expect(indicePrimerLetraRepe("a    a")).toBe(0);
  });

  test("ingreso un nro", () => {
    expect(indicePrimerLetraRepe(25)).toBe("debe ingresar una cadena");
  });

  test("ingreso un vector", () => {
    expect(indicePrimerLetraRepe(["hola como estas"])).toBe("debe ingresar una cadena");
  });

  test("no es sensible a mayuscula o minuscula", () => {
    expect(indicePrimerLetraRepe("UnAamarra")).toBe(2);
  });

  test("no se repite", () => {
    expect(indicePrimerLetraRepe("noserepite")).toBe(-1);
  });
});


//1.6

const findMaxConsecutiveOnes = require('../1-6.js');

describe('findMaxConsecutiveOnes', () => {
  test('returns the maximum number of consecutive 1s in the matrix', () => {
    const matrix1 = [[1, 1, 0, 1, 1, 1]];
    expect(findMaxConsecutiveOnes(matrix1)).toBe(3);

    const matrix2 = [[1, 0, 1, 1, 0, 1, 1, 1]];
    expect(findMaxConsecutiveOnes(matrix2)).toBe(3);

    const matrix3 = [[1, 1, 1, 0, 0, 1, 1, 1, 1]];
    expect(findMaxConsecutiveOnes(matrix3)).toBe(4);
  });

  test('returns -1 if there is any value other than 0 or 1 in the matrix', () => {
    const matrix = [[1, 1, 0, 2, 1, 1]];
    expect(findMaxConsecutiveOnes(matrix)).toBe(-1);
  });
});


//1.7

const lookup = require('../1-7.js');

describe('lookup()', () => {
  it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const actual = lookup('norvig', 'likes');
    const expected = ['AI', 'Search', 'NASA', 'Mars'];
    expect(actual).toEqual(expected);
  });

  it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
    const actual = lookup('knuth', 'lastName');
    const expected = 'Knuth';
    expect(actual).toEqual(expected);
  });

  it('with unknown user should throw an error with the correct message', () => {
    expect(() => {
      lookup('nobody', 'likes');
    }).toThrow(/Could not find user/);
  });

  it('with unknown property should throw an error with the correct message', () => {
    expect(() => {
      lookup('mfowler', 'noprop');
    }).toThrow(/Could not find property/);
  });
});





// 1.8

const { setPrice, addToCart } = require('../1-8.js');

describe('setPrice()', () => {
  it('should set the price in the given item object, immutably.', () => {
    const item = {
      name: 'test',
      price: 30,
    };
    const copy = { ...item };

    const actual = setPrice(item, 50);
    const expected = {
      name: 'test',
      price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).toEqual(copy);
  });
});

describe('addToCart()', () => {
  it('should add item to cart, immutably', () => {
    const originalCart = [];
    const item = {
      name: 'Toy',
      price: 30,
    };
    const copy = [...originalCart];

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).toEqual(copy);
  });
});

