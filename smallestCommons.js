// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let multiplier = 1;
  const maxNum = sortedArr[1];

  while (!isCommon(maxNum * multiplier, sortedArr)) {
    multiplier += 1;
  }

  return multiplier * maxNum;
}

function isCommon(num, range) {
  let result = true;

  for (let start = range[0]; start <= range[1]; start += 1) {
    result = result && num % start === 0;
  }

  return (result);
}

console.log(smallestCommons([1, 5]));
