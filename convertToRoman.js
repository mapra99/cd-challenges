// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
  return num.toString().split("")
    .reverse()
    .map((digit, index) => romanDigit(digit, index+1) )
    .reverse()
    .join("")
}

function romanDigit(digit, place) {
  if (place === 1) {
    if (digit >= 1 && digit <= 3) return "I".repeat(digit)
    if (digit >= 4 && digit <= 5) return "I".repeat(5-digit)+"V"
    if (digit >= 6 && digit <= 8) return "V"+"I".repeat(digit-5)
    if (digit == 9) return "IX"
    if (digit == 0) return ""
  } else if (place === 2) {
    if (digit >= 1 && digit <= 3) return "X".repeat(digit)
    if (digit >= 4 && digit <= 5) return "X".repeat(5-digit)+"L"
    if (digit >= 6 && digit <= 8) return "L"+"X".repeat(digit-5)
    if (digit == 9) return "XC"
    if (digit == 0) return ""
  } else if (place === 3) {
    if (digit >= 1 && digit <= 3) return "C".repeat(digit)
    if (digit >= 4 && digit <= 5) return "C".repeat(5-digit)+"D"
    if (digit >= 6 && digit <= 8) return "D"+"C".repeat(digit-5)
    if (digit == 9) return "CM"
    if (digit == 0) return ""
  } else if (place === 4) {
    if (digit >= 1 && digit <= 3) return "M".repeat(digit)
  }
}

console.log(convertToRoman(9));
