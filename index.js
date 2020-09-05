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
