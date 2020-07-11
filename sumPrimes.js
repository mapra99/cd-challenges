// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

function sumPrimes(num) {
  let arr = [...Array(num + 1).keys()].splice(2);
  const result = [];
  while (arr.length !== 0) {
    const firstElem = arr[0];
    result.push(firstElem);
    arr = arr.filter((elem) => elem % firstElem !== 0);
  }
  return result.reduce((a, b) => a + b, 0);
}

console.log(sumPrimes(10));
console.log(sumPrimes(905));
