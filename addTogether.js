// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether() {
  const args = Array.from(arguments);
  return args.some((n) => typeof n !== 'number')
    ? undefined
    : args.length > 1
      ? args.reduce((acc, n) => (acc += n), 0)
      : (n) => (typeof n === 'number' ? n + args[0] : undefined);
}

addTogether(2, 3);
