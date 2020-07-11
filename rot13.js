// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
  return str.split('')
    .map((char) => {
      const charCode = char.charCodeAt();
      if (charCode >= 65 && charCode <= 77) {
        return String.fromCharCode(charCode + 13);
      } if (charCode >= 78 && charCode <= 90) {
        return String.fromCharCode(charCode - 13);
      }
      return char;
    })
    .join('');
  return str;
}

rot13('SERR PBQR PNZC');
