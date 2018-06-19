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

    -   2   3   5   7   11  13  17  19  23  29
    2   4   6   10  14  22  26  34  38  46  58
    3   6   9   15  21  33  39  51  57  69  87
    5   10  15  25  35  55  65  85  95  115 145
    7   14  21  35  49  77  91  119 133 161 203
    11  22  33  55  77  121 143 187 209 253 319
    13  26  39  65  91  143 169 221 247 299 377
    17  34  51  85  119 187 221 289 323 391 493
    19  38  57  95  133 209 247 323 361 437 551
    23  46  69  115 161 253 299 391 437 529 667
    29  58  87  145 203 319 377 493 551 667 841
```

## Testing
I used Jest as a testing framework.
Tests are found in the `test/` folder. They can be run with the command `npm test`

## Functions
### `primes(n)`
Returns array of first `n` primes.
The function runs until the output array is of `n` length. It keeps track of an index that starts at 3 and increments by 2, checking to see if the number is prime. If it is, pushes it onto the array. It increments by 2 because primes are never next to each other (except 2 and 3).

The runtime for this is O(n). Since the order of growth increases linearly as the size of the `n` increases.

### `isPrime(n)`
Returns boolean. Returns `true` if `n` is prime.
This function loops from 3 - sqrt(n) checking to see if `n` is evenly divisible by the test factor, if it is, the function will return false.

Runs in O(sqrt(n)). Since we only need to check if `n` is evenly divisible by the smaller factors of the number. Because of that, we can avoid checking all the numbers greater than sqrt(n).

### `createFirstRowColumn(primes)`
Returns the first row and column of the multiplication table. Which are the first `n` prime numbers.
First it creates a matrix array with a blank space at the beginning, then loops over the prime numbers array generated from `primes(n)` and pushes the prime numbers into the first array in the matrix, then loops over the prime numbers array again and pushes the prime number (as its own array) into the matrix (creating columns).

Runs in O(n) because it iterates over the length of the primes array twice.

### `multiplyPrimes(matrix)`
Returns a 2D array with the products of `n` primes.

Runs in O(<sup>n</sup>) because of the nested for loops that calculate the products of the prime numbers.

### `printTable(matrix)`
Returns a string of the multiplication table, which makes it easier to read.

Runs in O(<sup>n</sup>) because of nested for loops.

## Time Complexity
Overall, the run time is O(n<sup>2</sup>) because of `multiplyPrimes`, which is filling out the multiplication table.

This scales poorly, but since the entire multiplication table has to be filled out, the algorithm cannot run more efficiently.
