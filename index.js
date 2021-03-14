// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray){
  return sourceArray.map(x => x);
}

function mapToDouble(sourceArray){
  return sourceArray.map(x => x * 2);
}

function mapToSquare(sourceArray){
  return sourceArray.map(x => x**2);
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let sum = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
      sum = sourceArray[i]+ sum;
    }
  return parseInt(sum);
}

function reduceToAllTrue(sourceArray) {
  for (let i of sourceArray) {
    if (!i) return false;
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i of sourceArray) {
    if (i)
    return true;}
    return false;
  
}


