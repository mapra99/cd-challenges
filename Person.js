// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };

  this.getFirstName = function() {
    return firstAndLast.split(" ")[0]
  };

  this.getLastName = function() {
    return firstAndLast.split(" ")[1]
  };

  this.setFirstName = function(first) {
    firstAndLast = `${first} ${firstAndLast.split(" ")[1]}`
    return firstAndLast
  };

  this.setLastName = function(last) {
    firstAndLast = `${firstAndLast.split(" ")[0]} ${last}`
    return firstAndLast
  };

  this.setFullName = function(newFirstAndLast) {
    firstAndLast = newFirstAndLast
    return firstAndLast
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
console.log(bob.getFullName());
