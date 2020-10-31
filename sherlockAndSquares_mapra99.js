// https://edabit.com/challenge/aHFBLwgCPKBoAcJAA

function sherlockAndSquares(a, b) {
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

console.log(sherlockAndSquares(23, 50));
