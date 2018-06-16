function primes(n) {
  // O(log n)
  if (n === 0) return [];
  const primeNums = [2];
  let i = 3;
  while (primeNums.length < n) {
    if (isPrime(i)) {
      primeNums.push(i);
    }
    // increment by 2 because the only time the primes are 1 away are 2/3
    i+=2;
  }
  return primeNums;
}

function isPrime(n) {
  // O(sqrt(n))
  if (n <= 1)  return false;
  if (n <= 3)  return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i+=2) {
    if (n % i === 0) {
      return false;
    }
   }
  return true;
}

function createMatrix(primes) {
  const matrix = [];
  matrix.push(['']);
  for (let i = 0; i < primes.length; i++) {
    matrix[0].push(primes[i]);
  }
  for (let i = 0; i < primes.length; i++) {
    matrix.push([primes[i]]);
  }
  return matrix;
}

function multiplyPrimes(matrix) {
  let i = 1;
  while (i < matrix.length) {
    for (let j = 1; j < matrix[0].length; j++) {
      matrix[i].push(matrix[0][j] * matrix[i][0]);
    }
    i++;
  }
  return matrix;
}

function run(n) {
  const primeNumbers = primes(n);
  const matrix = createMatrix(primeNumbers);
  return multiplyPrimes(matrix);
}

const n = process.argv[2];

console.log(run(n));

module.exports = {
  isPrime: isPrime,
  primes: primes,
  createMatrix: createMatrix,
  multiplyPrimes: multiplyPrimes,
};
