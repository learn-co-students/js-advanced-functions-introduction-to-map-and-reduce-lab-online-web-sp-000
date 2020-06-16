// Your code here
function mapToNegativize(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray = [...newArray, sourceArray[i] * -1];
  }
  return newArray;
}

function mapToNoChange(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray = [...newArray, sourceArray[i]];
  }
  return newArray;
}

function mapToDouble(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray = [...newArray, sourceArray[i] * 2];
  }
  return newArray;
}

function mapToSquare(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray = [...newArray, sourceArray[i]**2];
  }
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let value = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    value += sourceArray[i];
  }
  return value;
}

function reduceToAllTrue(sourceArray) {
  let all = true;
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === false) {
      all = false;
    }
  }
  return all;
}

function reduceToAnyTrue(sourceArray) {
  let any = false;
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === true) {
      any = true;
    }
  }
  return any;
}