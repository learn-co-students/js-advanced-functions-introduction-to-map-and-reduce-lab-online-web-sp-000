// Your code here
function mapToNegativize(arr) {
  for(const e in arr) {
    arr[e]*= -1;
  }
  return arr
}

function mapToDouble(arr) {
  for(const e in arr) {
    arr[e]*= 2;
  }
  return arr
}

function mapToNoChange(arr) {
  return arr
}

function mapToSquare(arr) {
  for(const e in arr) {
    arr[e]**= 2;
  }
  return arr
}

function mapToNegativize(arr) {
  for(const e in arr) {
    arr[e]*= -1;
  }
  return arr
}

function reduceToTotal(arr, start = 0) {
  for(const e of arr) {
    start += e;
  }
  return start;
}

function reduceToAllTrue(arr) {
  for(const e of arr) {
    if(!e) { return false; }
  }
  return true;
}

function reduceToAnyTrue(arr) {
  for(const e of arr) {
    if(e) { return true; }
  }
  return false;
}
