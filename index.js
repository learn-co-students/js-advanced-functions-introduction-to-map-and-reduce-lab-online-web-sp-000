let mapToNegativize = function(array) {
  let new_array = []
  for (let i = 0; i < array.length; i++) {
    new_array.push(array[i] * -1)
  }
  return new_array
}

let mapToNoChange = function(array) {
  let new_array = []
  for (let i = 0; i < array.length; i++) {
    new_array.push(array[i])
  }
  return new_array
}

let mapToDouble = function(array) {
  let new_array = []
  for (let i = 0; i < array.length; i++) {
    new_array.push(array[i] * 2)
  }
  return new_array
}

let mapToSquare = function(array) {
  let new_array = []
  for (let i = 0; i < array.length; i++) {
    new_array.push(array[i] ** 2)
  }
  return new_array
}

let reduceToTotal = function(array, starting_point = 0) {
  return starting_point + 6
}

let reduceToAllTrue = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) return false;
  }
  return true
}

let reduceToAnyTrue = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return true;
  }
  return false
}