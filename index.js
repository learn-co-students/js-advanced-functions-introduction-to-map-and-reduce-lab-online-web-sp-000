// Your code here

const mapToNegativize = (arr) => {
  let newArr = [];
  for (let i = 0; i < (arr.length); i++) {
    newArr.push(arr[i]* -1);
  } 
  return newArr;
}

const mapToNoChange = (arr) => {
  return arr; 
}

const mapToDouble = (arr) => {
  let newArr = [];
  for (let i = 0; i < (arr.length); i++) {
    newArr.push(arr[i]* 2);
  } 
  return newArr;
}

const mapToSquare = (arr) => {
  let newArr = [];
  for (let i = 0; i < (arr.length); i++) {
    newArr.push(arr[i]* arr[i]);
  } 
  return newArr;
}

const reduceToTotal = (arr, startingPoint = 0) => {
  let total = startingPoint;
  for (let i = 0; i < arr.length; i++ ) {
    total = total + arr[i]
  }
  return total;
}

const reduceToAllTrue = (arr) => {
  for (let i = 0; i < arr.length; i++ ) {
    if (!arr[i]) return false
  }
  return true;
}

const reduceToAnyTrue = (arr) => {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i]) return true
  }
  return false;
}