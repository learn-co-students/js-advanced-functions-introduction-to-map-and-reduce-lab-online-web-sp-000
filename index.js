function mapToNegativize(array) {
  let new_array = array.map(element => {
    return element * -1
  })
  return new_array
}

function mapToNoChange(array) {
  let new_array = array.map(element => {
    return element
  })
  return new_array
}

function mapToDouble(array) {
  let newArray = array.map(element => {
    return element * 2
  })
  return newArray;
}

function mapToSquare(array) {
  return array.map(element => {
    return element ** 2
  })
}

function reduceToTotal(sourceArray, startingPoint) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return sourceArray.reduce(reducer, startingPoint || 0)
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce((accumulator, currentValue) => accumulator && !!currentValue, true);
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce((acc, currentValue) => acc || !!currentValue, false);
}
