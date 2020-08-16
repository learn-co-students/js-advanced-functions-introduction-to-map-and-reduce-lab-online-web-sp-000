// Your code here
function mapToNegativize(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(-array[i]);
  }
  return newArray;
}

function mapToNoChange(array) {
  return array;
}

function mapToDouble(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }
  return newArray;
}

function mapToSquare(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] ** 2);
  }
  return newArray;
}

function reduceToTotal(array, startingTotal = 0) {
  for (let i = 0; i < array.length; i++) {
    startingTotal += array[i];
  }
  return startingTotal;
}

function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (!!array[i] === false) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (!!array[i] === true) {
      return true;
    }
  }
  return false;
}
