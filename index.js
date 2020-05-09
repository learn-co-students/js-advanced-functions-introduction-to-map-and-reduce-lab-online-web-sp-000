//expect(mapToNegativize([1, 2, 3, -9])).to.eql([-1, -2, -3, 9])

function mapToNegativize(arr) {
  let newArray = [];
  for (const int of arr) {
    let val = int*(-1);
    newArray.push(val);
  }
  return newArray;
}

function mapToNoChange(arr) {
  return arr;
}

function mapToDouble(arr) {
  let newArray = [];
  for (const int of arr) {
    let val = int*(2);
    newArray.push(val);
  }
  return newArray;
}

function mapToSquare(arr) {
  let newArray = [];
  for (const int of arr) {
    let val = int*int;
    newArray.push(val);
  }
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let start = parseInt(startingPoint);
  for (const val of sourceArray) {
    start = start + val;
  }
  return start;
}

function reduceToAllTrue(sourceArray) {
  let start = true;
  for (const val of sourceArray) {
    if (!!!val) {
      start = false;
    }
  }
  return start;
}

function reduceToAnyTrue(sourceArray) {
  let start = false;
  for (const val of sourceArray) {
    if (!!val) {
      start = true;
    }
  }
  return start;
}