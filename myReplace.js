// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
  return str.split(' ')
            .map(word => (word === before ? conserveCase(before, after) : word))
            .join(' ');
}

function conserveCase(before, after) {
  let isFirstCharUpperCase = /^[A-Z]/.test(before);
  return (isFirstCharUpperCase ? after[0].toUpperCase() : after[0].toLowerCase()) + after.slice(1);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
