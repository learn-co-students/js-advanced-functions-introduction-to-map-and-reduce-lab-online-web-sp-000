// Your code here
function mapToNegativize(array) {
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    temp.push(array[i] * -1);
  }

  return temp;
}

function mapToNoChange(array) {
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    temp.push(array[i]);
  }

  return temp;
}

function mapToDouble(array) {
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    temp.push(array[i] * 2);
  }

  return temp;
}

function mapToSquare(array) {
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    temp.push(array[i] * array[i]);
  }

  return temp;
}

function reduceToTotal(array, start = 0) {
  let total = start;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) return false;
  }

  return true;
}

function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return true;
  }

  return false;
}