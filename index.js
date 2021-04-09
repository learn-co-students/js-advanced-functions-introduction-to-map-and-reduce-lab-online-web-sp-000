// Your code here
const mapToNegativize = function(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    array.push(-1 * sourceArray[i])
  }
  return array
};

const mapToNoChange = function(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++) {
    array.push(sourceArray[i])
  }
  return array
};

const mapToDouble = function(sourceArray){
  let array = []
  for (let i = 0; i < sourceArray.length; i++) {
    array.push(2 * sourceArray[i])
  }
  return array
};

const mapToSquare = function(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++) {
    array.push(sourceArray[i] * sourceArray[i])
  }
  return array
};

const reduceToTotal = function(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++ ) {
    total = total + sourceArray[i]
  }
  return total
};

const reduceToAllTrue = function(sourceArray) {
  for (let i=0; i < sourceArray.length; i++ ) {
    if (!sourceArray[i]) return false
  }
  return true
}

const reduceToAnyTrue = function(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (sourceArray[i]) return true
  }
  return false
}
