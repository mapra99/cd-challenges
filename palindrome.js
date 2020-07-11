// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  const newStr = str.replace(/\W|_/g, '').toLowerCase();
  let i = 0;
  let j = newStr.length - 1;
  while (i <= j) {
    if (newStr[i] == newStr[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

palindrome('eye');
