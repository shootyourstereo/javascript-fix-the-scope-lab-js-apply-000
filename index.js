function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

<<<<<<< HEAD
var theFunk = funkyFunction();
theFunk = theFunk();
=======
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var funkyFunction = "FUNKY!"
var theFunk = funkyFunction
>>>>>>> 69d5639e4509070e0eec596505453f85fa2c9b82
