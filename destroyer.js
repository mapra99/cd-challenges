// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(arr) {
  delete arguments[0]
  let targets = Object.values(arguments);
  let result = arr.filter(elem => !targets.includes(elem));
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
