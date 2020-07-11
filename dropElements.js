// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

function dropElements(arr, func) {
  let i = 0;
  while(!func(arr[i])) {
    arr = arr.splice(1)
  }

  return(arr)
}

dropElements([1, 2, 3], function(n) {return n < 3; });
