const program = require('../src/program');

describe('primes', () => {
  test('returns 10 prime numbers when n is 10', () => {
    const primes = [2,3,5,7,11,13,17,19,23,29];
    expect(program.primes(10)).toEqual(primes);
  });
  test('returns empty array when n is 0', () => {
    const empty = [];
    expect(program.primes(0)).toEqual(empty);
  });
});

describe('isPrime', () => {
  test('returns false for 1', () => {
    expect(program.isPrime(1)).toBe(false);
  });
  test('returns true for 2', () => {
    expect(program.isPrime(2)).toBe(true);
  });
  test('returns true for 5', () => {
    expect(program.isPrime(5)).toBe(true);
  });
  test('returns false for 10', () => {
    expect(program.isPrime(10)).toBe(false);
  });
  test('works with large number', () => {
    expect(program.isPrime(236887691)).toBe(true);
  });
});

describe('createMatrix', () => {
  const matrix = [
    [],
    []
  ];
  test('creates ', () => {
    expect(program.isPrime(1)).toBe(false);
  });
});
