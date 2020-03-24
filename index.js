function mapToNegativize(sourceArray) {
  const newArray = sourceArray.map(x => x * -1)
  return newArray
}

function mapToNoChange(sourceArray) {
  const newArray = sourceArray.map(x => x)
  return newArray
}

function mapToDouble(sourceArray) {
  const newArray = sourceArray.map(x => x * 2)
  return newArray
}

function mapToSquare(sourceArray) {
  const newArray = sourceArray.map(x => x ** 2)
  return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue(sourceArray) {
  const isTrue = (currentValue) => currentValue
  return sourceArray.every(isTrue);
}

function reduceToAnyTrue(sourceArray) {
  const isTrue = (currentValue) => currentValue
  return sourceArray.some(isTrue);
}
