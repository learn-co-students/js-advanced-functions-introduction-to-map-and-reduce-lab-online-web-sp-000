// Your code here
function mapToNegativize(sourceArray){
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i] * -1);
  }
  return arr;
}

function mapToNoChange(sourceArray) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i]);
  }
  return arr;
}

function mapToDouble(sourceArray) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i] * 2);
  }
  return arr;
}

function mapToSquare(sourceArray) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i] * sourceArray[i]);
  }
  return arr;
}

function reduceToTotal(sourceArray, startingPoint) {
  if (startingPoint === undefined){
  let  result = sourceArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  return result;
  } else {
    let  result = sourceArray.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, startingPoint);
    return result; 
  }
}


function reduceToAllTrue(sourceArray) {
  sourceArray.reduce(function(accumulator, currentValue){
    if (currentValue !== 0){
      return true;
  }
 })
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === true) {
      return true;
    }
  }
  return false;
}