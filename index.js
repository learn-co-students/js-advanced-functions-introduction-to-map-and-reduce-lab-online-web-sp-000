// Your code here
function mapToNegativize(arr) {
  const negArr = [];
  for (let i = 0; i < arr.length; i++) {
    negArr.push(arr[i] * -1);
  }
  return negArr;
}

function mapToNoChange(arr) {
  const origArr = [];
  for (let i = 0; i < arr.length; i++) {
    origArr.push(arr[i]);
  }
  return origArr;
}

function mapToDouble(arr) {
  const doubleArr = [];
  for (let i = 0; i < arr.length; i++) {
    doubleArr.push(arr[i] * 2);
  }
  return doubleArr;
}

function mapToSquare(arr) {
  const squaredArr = [];
  for (let i = 0; i < arr.length; i++) {
    squaredArr.push(arr[i] ** 2);
  }
  return squaredArr;
}

function reduceToTotal(arr, memo=0) {
  let total = memo;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) return false;
  }
  return true;
}

function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) return true;
  }
  return false;
}