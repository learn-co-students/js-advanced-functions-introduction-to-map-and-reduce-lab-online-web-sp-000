// Your code here
function mapToNegativize(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++) {
    array.push(-1 * sourceArray[i])
  }
  return array;
}

function mapToNoChange(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++) {
    array.push(sourceArray[i])
  }
  return array;
}

function mapToDouble(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++) {
    array.push(2 * sourceArray[i])
  }
  return array;
}

function mapToSquare(sourceArray) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++) {
    array.push(sourceArray[i] * sourceArray[i])
  }
  return array;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  for (let i = 0; i < sourceArray.length; i++) {
    startingPoint = startingPoint + sourceArray[i]
  }
  return startingPoint;
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) return true
  }
  return false
}
