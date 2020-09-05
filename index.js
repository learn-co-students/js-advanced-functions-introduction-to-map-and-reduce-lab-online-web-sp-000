function mapToNegativize(array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(-1 * array[i]);
  }
  return a;
}

function mapToNoChange(array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(array[i]);
  }
  return a;
}

function mapToDouble(array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(2 * array[i]);
  }
  return a;
}

function mapToSquare(array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(array[i] * array[i]);
  }
  return a;
}

function reduceToTotal(array, int = 0) {
  for (let i = 0; i < array.length; i++) {
    int += array[i];
  }
  return int;
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
