function solution(A) {
  var n = A.length;
  var i = n - 1;
  var result = -1;
  var maximal = 0, k = 0;
  while (i > 0) {
      if (A[i] == 1) {
          k = k + 1;
          if (k >= maximal) {
              maximal = k;
              result = i;
          }
      }
      else
          k = 0;
      i = i - 1;
  }
  if (A[i] == 1 && k + 1 >= maximal)
      result = 0;
  return result;
}

const A = [0, 1, 1, 1, 0 ,1 , 1, 1, 0, 1]
console.log(solution(A))  //1

const B = [0, 0]
console.log(solution(B)) //-1

const C = [1, 1, 1, 1, 0, 0, 0, 0 ,1, 1, 1]
console.log(solution(C)) //0

const D = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1]
console.log(solution(D)) //7

const E = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
console.log(solution(E)) //0

const F = [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
console.log(solution(F)) //1
