# Funding Circle Coding Challenge

## Overview
Write a program that prints out a multiplication table of the first 10 prime number.
* The program must run from the command line and print one table to
STDOUT.
* The first row and column of the table should have the 10 primes, with each
cell containing the product of the primes for the corresponding row and
column.

## Usage
1. Clone Repo
2. Run `npm install` to install dependencies
3. Run `node src/program n` where `n` defaults to 10

Example:
```
$ node src/program
  [
    [ '', 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ],
    [ 2, 4, 6, 10, 14, 22, 26, 34, 38, 46, 58 ],
    [ 3, 6, 9, 15, 21, 33, 39, 51, 57, 69, 87 ],
    [ 5, 10, 15, 25, 35, 55, 65, 85, 95, 115, 145 ],
    [ 7, 14, 21, 35, 49, 77, 91, 119, 133, 161, 203 ],
    [ 11, 22, 33, 55, 77, 121, 143, 187, 209, 253, 319 ],
    [ 13, 26, 39, 65, 91, 143, 169, 221, 247, 299, 377 ],
    [ 17, 34, 51, 85, 119, 187, 221, 289, 323, 391, 493 ],
    [ 19, 38, 57, 95, 133, 209, 247, 323, 361, 437, 551 ],
    [ 23, 46, 69, 115, 161, 253, 299, 391, 437, 529, 667 ],
    [ 29, 58, 87, 145, 203, 319, 377, 493, 551, 667, 841 ]
  ]
```

## Testing
I used Jest as a testing framework.
Tests are found in the `test/` folder. They can be run with the command `npm test`

## Functions
### `primes(n)`
Returns array of first `n` primes.

Runs in linear time complexity because the function ends when the length of the array is `n`.

### `isPrime(n)`
Returns boolean. Returns `true` if `n` is prime.

Runs in O(sqrt(n)) because instead of having to check every number from 2-n, we can just check every number 3-sqrt(n)

### `createMatrix(primes)`
Returns the first row and column of the multiplication table. Which are the first `n` prime numbers.

Runs in O(n) because it just iterates over the length of primes twice.

### `multiplyPrimes(matrix)`
Multiplies the prime numbers and returns the multiplication table, which is a matrix.

Runs in O(n<sup>2</sup>) because it has to create the multiplication table and populate entire matrix.

### `run`
Simply runs the entire program and returns the multiplication table.

Runs in constant time because it just calls the other helper functions.

## Time Complexity
Overall, the run time is O(n<sup>2</sup>)

This scales poorly, but since the entire multiplication table has to be filled out, the algorithm cannot run more efficiently.
