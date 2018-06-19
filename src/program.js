function primes(n) {
  if (n == 0) return [];
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

function createFirstRowColumn(primes) {
  const matrix = [];
  matrix.push(['-']);
  for (let i = 0; i < primes.length; i++) {
    matrix[0].push(primes[i]);
  }
  for (let i = 0; i < primes.length; i++) {
    matrix.push([primes[i]]);
  }
  return matrix;
}

function multiplyPrimes(matrix) {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      matrix[i].push(matrix[0][j] * matrix[i][0]);
    }
  }
  return matrix;
}

function printTable(matrix) {
  const lastRow = matrix[matrix.length - 1];
  const biggest = lastRow[lastRow.length-1].toString().length;
  let table = '';

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      let currNum = matrix[i][j];
      let padding = ' '.repeat(biggest - currNum.toString().length);
      table += `${currNum.toString()} ${padding} `;
    }
    table += '\n';
  }
  return table;
}

function run(n = 10) {
  const primeNumbers = primes(n);
  const firstRowCol = createFirstRowColumn(primeNumbers);
  const matrix = multiplyPrimes(firstRowCol);
  return printTable(matrix);
}

const n = process.argv[2];

if (n >= 0 && n < Infinity || n === undefined) {
  process.stdout.write(run(n));
} else {
  process.stderr.write('Invalid integer. Please enter a positive integer');
  process.exit(1);
}

module.exports = {
  isPrime: isPrime,
  primes: primes,
  createFirstRowColumn: createFirstRowColumn,
  multiplyPrimes: multiplyPrimes,
};
