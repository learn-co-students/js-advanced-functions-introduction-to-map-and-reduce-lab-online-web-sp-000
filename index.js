// Your code here
function mapToNegativize(sourceArray){
  let arr = [];
  for (let i of sourceArray) {
    arr.push(i * -1);
  }
  return arr;

}

function mapToNoChange(sourceArray) {
  for (let i of sourceArray) {
   i;
  }
  return sourceArray;
}

function mapToDouble(sourceArray) {
  let arr = [];
  for (let i of sourceArray) {
    arr.push(i * 2);
  }
  return arr
}

function mapToSquare(sourceArray) {
  let arr = [];
  for (let i of sourceArray) {
    arr.push(i ** 2);
  }
  return arr
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let sum = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
      sum = sourceArray[i]+ sum;
    }
  return parseInt(sum);
}

function reduceToAllTrue(sourceArray) {
  let sum;

  for (let i of sourceArray) {
    if (!i) return false;
  }
  return true;
}
function reduceToAnyTrue(sourceArray) {
  let sum;
  for (let i of sourceArray) {
    if (i) return true;
  }
  return false;
}
