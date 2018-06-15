function primes(n) {
  const primeNums = [];
  let i = 2;
  while (primeNums.length < n) {
    if (isPrime(i)) {
      primeNums.push(i);
    }
    i++;
  }
  return primeNums;
}

function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function printMatrix(len) {
  const matrix = [];

  while (len >= 0) {
    matrix.push([]);
    len--;
  }
  return matrix;
}

function fillMatrix(matrix, primes) {
  matrix[0].push('');
  for (let i = 0; i < primes.length; i++) {
    matrix[0].push(primes[i]);
  }
  for (let i = 1; i < matrix.length; i++) {
    matrix[i][0] = primes[i-1];
  }
  return matrix;
}

function multiply(matrix) {
  let i = 1;
  while (i < matrix.length) {
    for (let j = 1; j < matrix[0].length; j++) {
      matrix[i].push(matrix[0][j] * matrix[i][0]);
    }
    i++;
  }
  return matrix;
}

function run() {
  const ps = primes(10);
  const mat = printMatrix(10);
  const filled = fillMatrix(mat, ps);
  return multiply(filled);
}

console.log(run());
