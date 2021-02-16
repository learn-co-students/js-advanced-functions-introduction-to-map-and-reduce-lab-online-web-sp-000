function mapToNegativize(sourceArray) {
  return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  return sourceArray.map(x => x * 2);
}

function mapToSquare(sourceArray) {
  return sourceArray.map(x => x ** 2);
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  const add = (x, y) => x + y;
  return sourceArray.reduce(add, startingPoint);
}

function reduceToAllTrue(sourceArray) {
  const truthy = (x, y) => !!(x && y);
  return sourceArray.reduce(truthy);
}

function reduceToAnyTrue(sourceArray) {
  const truthy = (x, y) => !!(x || y);
  return sourceArray.reduce(truthy);
}
