// https://edabit.com/challenge/aHFBLwgCPKBoAcJAA

function squares(a, b) {
  let i = a;
  while (i <= b && !isSquare(i)) i += 1;
  if (i > b && !isSquare(b)) return 0;
  const firstBase = Math.sqrt(i);

  let j = b;
  while (j >= a && !isSquare(j)) j -= 1;
  const lastBase = Math.sqrt(j);

  return lastBase - firstBase + 1;
}

function isSquare(num) {
  const squareRoot = Math.sqrt(num);
  return squareRoot === parseInt(squareRoot, 10);
}

console.time('test');
console.log(`${squares(3,9)} -- ${squares(3,9)==2}`);
console.timeEnd('test');

console.time('test');
console.log(`${squares(17,24)} -- ${squares(17,24)==2}`);
console.timeEnd('test');

console.time('test');
console.log(`${squares(1, 1000000000)} -- ${squares(1, 1000000000)==2}`);
console.timeEnd('test');

console.time('test');
console.log(`${squares(1000000000, 1000000000000000000)} -- ${squares(1000000000, 1000000000000000000)==2}`);
console.timeEnd('test');
