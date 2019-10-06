// Your code here
function mapToNegativize(array) {
  let negativeArray = [];
  for (let i = 0; i < array.length; i++) {
    negativeArray.push(array[i] * -1);
  }
  return negativeArray;
}

function mapToNoChange(array) {
  return array;
}

function mapToDouble(array) {
  let doubleArray = [];
  for (let i = 0; i < array.length; i++) {
    doubleArray.push(array[i] * 2);
  }
  return doubleArray;
}

function mapToSquare(array) {
  let squareArray = [];
  for (let i = 0; i < array.length; i++) {
    squareArray.push(array[i] ** 2);
  }
  return squareArray;
}

function reduceToTotal(array, sp = 0) {
  let total = sp;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      return true;
    }
  }
  return false;
}
