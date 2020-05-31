// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter(object => {
    let includesAll = true;
    Object.keys(source).forEach(key => {
      includesAll = includesAll && object[key] === source[key];
    })

    return(includesAll)
  })
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
