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
