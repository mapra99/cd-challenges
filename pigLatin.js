// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
  if (/^[^aeiou]+/.test(str)) {
    return str.replace(/^[^aeiou]+/, '') + str.match(/^[^aeiou]+/) + "ay";
  } else {
    return str + "way";
  }
}

console.log(translatePigLatin("consonant"));
