//map-like methods

function mapToNegativize(orgArray) {
  let newArray = [];
  let element;
  for (let i = 0; i < orgArray.length; i++) {
    element = orgArray[i];
    newArray.push(element * -1);
  }
  return newArray
}

function mapToNoChange(orgArray) {
  return orgArray.slice()
}
//^this is a new array now right?

function mapToDouble(orgArray) {
  let newArray = orgArray.slice();
  for (let i = 0; i < orgArray.length; i++) {
    newArray[i] = newArray[i] * 2;
  }
  return newArray;
}
//which is better? this syntax or the mapToNegativize syntax?

function mapToSquare(orgArray) {
  let newArray = [];
  let element;
  for (let i = 0; i < orgArray.length; i++) {
    element = orgArray[i] ** 2;
    newArray.push(element);
  }
  return newArray
}

//reduce-like methods

function reduceToTotal(sourceArray, startingPoint = 0) {
  let runningTotal = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    runningTotal += sourceArray[i];
  }
  return runningTotal;
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    let elementBoolean = Boolean(sourceArray[i]);
    if (!elementBoolean) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    let elementBoolean = Boolean(sourceArray[i]);
    if (elementBoolean) {
      return true
    }
  }
  return false
}
