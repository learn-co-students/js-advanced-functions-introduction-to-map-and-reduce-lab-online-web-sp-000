// Your code here
function mapToNegativize(array){
  const negativizedValues = [];
  array.forEach(num => {
    negativizedValues.push(num * -1);
  });
  return negativizedValues;
}

function mapToNoChange(array){
  return array;
}

function mapToDouble(array){
  const doubledValues = [];
  array.forEach(num => {
    doubledValues.push(num * 2);
  });
  return doubledValues;
}

function mapToSquare(array){
  const squaredValues = [];
  array.forEach(num => {
    squaredValues.push(num ** 2);
  });
  return squaredValues;
}

function reduceToTotal(array, startingPoint = 0){
  array.forEach(num => {
    startingPoint += num;
  });
  return startingPoint;
}

function reduceToAllTrue(array){
  // array.forEach(item => {
  //   if (!item){
  //     return false;
  //   }
  // });
  for(let i = 0; i < array.length; i++){
    if (!array[i]){
        return false;
    }
  }
  return true;
}

function reduceToAnyTrue(array){
  // array.forEach(item => {
  //   if (Boolean(item)){
  //     return true;
  //   }
  // });
  for(let i = 0; i < array.length; i++){
    if (array[i]){
        return true;
    }
  }
  return false;
}
