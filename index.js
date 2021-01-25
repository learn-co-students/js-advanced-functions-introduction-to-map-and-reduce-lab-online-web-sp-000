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


function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint
  sourceArray.forEach(el => total += el)
  return total
}

function reduceToAllTrue(sourceArray) {
  let value = true;
  sourceArray.reduce((acc, x) => {
    if (x == undefined || x == false) {
      value = false;
    }
  })
  return value;
}

function reduceToAnyTrue(sourceArray) {
  let value = 0;
  sourceArray.reduce((acc, x) => {
    if (x == undefined || x == false || x == null) {
      value += 1
    }
  })
  if (value == (sourceArray.length - 1)) {
    return false;
  } else {
    return true;
  }
}
