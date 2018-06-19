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

describe('createFirstRowColumn', () => {
  const tenPrimes = program.createFirstRowColumn(program.primes(10));
  const fifteenPrimes = program.createFirstRowColumn(program.primes(15));
  test('creates matrix 11 columns when n is 10 (1 column for prime numbers)', () => {
    expect(tenPrimes[0]).toHaveLength(11);
  });
  test('creates matrix 16 columns when n is 15 (1 column for prime numbers)', () => {
    expect(fifteenPrimes[0]).toHaveLength(16);
  });
  test('creates matrix with 11 rows when n is 10 (1 row for prime numbers)', () => {
    expect(tenPrimes).toHaveLength(11);
  });
  test('creates matrix with 11 rows when n is 15 (1 row for prime numbers)', () => {
    expect(fifteenPrimes).toHaveLength(16);
  });
  test('returns correct first row when n is 10', () => {
    const firstRow = ['-', 2,3,5,7,11,13,17,19,23,29];
    expect(tenPrimes[0]).toEqual(firstRow);
  });
});

describe('multiplyPrimes', () => {
  const tenPrimes = program.multiplyPrimes(program.createFirstRowColumn(program.primes(10)));
  const fivePrimes = program.multiplyPrimes(program.createFirstRowColumn(program.primes(5)));
  const rowOne = [2,4,6,10,14,22,26,34,38,46,58];
  const rowTwo = [3,6,9,15,21,33,39,51,57,69,87];
  const lastRow = [11,22,33,55,77,121];
  const secondToLastRow = [7,14,21,35,49,77];
  test('the first 2 rows of the multiplication table are correct when n is 10', () => {
    expect(tenPrimes[1]).toEqual(rowOne);
    expect(tenPrimes[2]).toEqual(rowTwo);
  });
  test('the last 2 rows of the multiplication table are correct when n is 5', () => {
    expect(fivePrimes[fivePrimes.length-1]).toEqual(lastRow);
    expect(fivePrimes[fivePrimes.length-2]).toEqual(secondToLastRow);
  });
});
