// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(x => x);
}

function mapToDouble(sourceArray) {
  return sourceArray.map(x => x * 2);
}

function mapToSquare(sourceArray) {
  return sourceArray.map(x => x ** 2);
}

function reduceToTotal(sourceArray, startingPoint=null) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (startingPoint === null) {
    return sourceArray.reduce(reducer)
  } else {
    return sourceArray.reduce(reducer, startingPoint)
  }
}

function reduceToAllTrue(sourceArray) {
  const isTrue = (currentValue) => currentValue ? true : false;
  return sourceArray.every(isTrue);
}

function reduceToAnyTrue(sourceArray) {
  const isTrueOrFalse = (currentValue) => currentValue ? true : false;
  return sourceArray.some(isTrueOrFalse);
}
