// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const arrS = S.split('');
  ['B', 'A', 'L', 'L', 'O', 'O', 'N'].forEach((char) => {
    const targetCharIndex = arrS.indexOf(char);
    if (targetCharIndex !== -1) arrS.splice(targetCharIndex, 1);
  });

  if (arrS.length === S.length - 7) {
    return Math.ceil(arrS.length / 7);
  }
  return 0;
}

console.log(solution('BALLOOXXN'));
console.log(solution('QAWABAWONL'));
console.log(solution('ACALLBOONWAS'));
