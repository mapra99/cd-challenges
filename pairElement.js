// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
  let pairs = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
  };
  
  return str.split('')
            .map(char => [char, pairs[char]]);
}

console.log(pairElement("GCG"));
