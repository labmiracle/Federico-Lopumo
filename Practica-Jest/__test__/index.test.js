const fizzBuzz = require('./fizzbuzz');

test('fizzBuzz devuelve Fizz para números divisibles por 3', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(6)).toBe('Fizz');
  expect(fizzBuzz(9)).toBe('Fizz');
});

test('fizzBuzz devuelve Buzz para números divisibles por 5', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
  expect(fizzBuzz(10)).toBe('Buzz');
  expect(fizzBuzz(20)).toBe('Buzz');
});

test('fizzBuzz devuelve FizzBuzz para números divisibles por 3 y 5', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
  expect(fizzBuzz(30)).toBe('FizzBuzz');
  expect(fizzBuzz(45)).toBe('FizzBuzz');
});

test('fizzBuzz devuelve el número para números que no cumplen las condiciones anteriores', () => {
  expect(fizzBuzz(1)).toBe('1');
  expect(fizzBuzz(7)).toBe('7');
  expect(fizzBuzz(19)).toBe('19');
});

test('fizzBuzz lanza un error si se le pasa una cadena', () => {
  expect(() => fizzBuzz('a')).toThrow('El argumento debe ser un número');
});
