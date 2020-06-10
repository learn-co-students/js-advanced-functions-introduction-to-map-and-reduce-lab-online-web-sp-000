// Your code here
function mapToNegativize(sourceArray){
  let newArray = []
  for(let i=0; i<sourceArray.length; i++){
    newArray.push(sourceArray[i]*(-1));
  }
  return newArray;
}

function mapToNoChange(sourceArray){
  let newArray = []
  for(let i=0; i<sourceArray.length; i++){
    newArray.push(sourceArray[i]);
  }
  return newArray;
}

function mapToDouble(sourceArray){
  let newArray = []
  for(let i=0; i<sourceArray.length; i++){
    newArray.push(sourceArray[i]*2);
  }
  return newArray;
}

function mapToSquare(sourceArray){
  let newArray = []
  for(let i=0; i<sourceArray.length; i++){
    newArray.push(sourceArray[i]*sourceArray[i]);
  }
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0){
  let total = startingPoint;
  for(let i=0; i<sourceArray.length; i++){
    total = total + sourceArray[i];
  }
  return total
}

function reduceToAllTrue(sourceArray){
  let allTrue = true;
  for(let i=0; i<sourceArray.length; i++){
    if (sourceArray[i] == false){
      allTrue = false;
    }
  }
  return allTrue;
}

function reduceToAnyTrue(sourceArray){
  let anyTrue = false;
  for(let i=0; i<sourceArray.length; i++){
    if (sourceArray[i] == true){
      anyTrue = true;
    }
  }
  return anyTrue;
}
