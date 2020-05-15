// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach(elem => {
    if(!arr2.includes(elem)) newArr.push(elem);
  })

  arr2.forEach(elem => {
    if(!arr1.includes(elem)) newArr.push(elem);
  })
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
