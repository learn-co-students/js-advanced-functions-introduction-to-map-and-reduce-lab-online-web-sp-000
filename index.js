function mapToNegativize(input) {
  let newArray = [];
  for(let i = 0; i < input.length; i++) {
    newArray[i] = -1 * input[i];
  }
  return newArray;
}

function mapToNoChange(input) {
  let newArray = [];
  for(let i = 0; i < input.length; i++) {
    newArray[i] = input[i];
  }
  return newArray;
}

function mapToDouble(input) {
  let newArray = [];
  for(let i = 0; i < input.length; i++) {
    newArray[i] = 2 * input[i];
  }
  return newArray;
}

function mapToSquare(input) {
  let newArray = [];
  for(let i = 0; i < input.length; i++) {
    newArray[i] = Math.pow(input[i], 2);
  }
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  for(let i = 0; i < sourceArray.length; i++) {
    startingPoint += sourceArray[i];
  }
  return startingPoint;
}

function reduceToAllTrue(sourceArray) {
  let returnVal = true;
  for(let i = 0; i < sourceArray.length; i++) {
    if(!!sourceArray[i] === false) {
      returnVal = false;
    }
  }
  return returnVal;
}

function reduceToAnyTrue(sourceArray) {
  let returnVal = false;
  for(let i = 0; i < sourceArray.length; i++) {
    if(!!sourceArray[i] === true) {
      returnVal = true
    }
  }
  return returnVal;
}
