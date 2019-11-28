function mapToNegativize(sourceArray) {
  let newArr=[];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(-sourceArray[i])
  }
  return newArr;
}

function mapToNoChange(sourceArray) {
  return [...sourceArray]
}

function mapToDouble(sourceArray) {
  let newArr=[];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(2*sourceArray[i])
  }
  return newArr;
}

function mapToSquare(sourceArray) {
  let newArr=[];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i]*sourceArray[i])
  }
  return newArr;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let count=startingPoint
  for (let i = 0; i < sourceArray.length; i++){
    count+=sourceArray[i]
  }
  return count;
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++){
    if (!sourceArray[i]) {
      return false;
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++){
    if (sourceArray[i]) {
      return true;
    }
  }
  return false
}
