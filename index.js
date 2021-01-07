// Your code here

function mapToNegativize(array){
  return array.map(x => x * -1)
}

function mapToNoChange(array){
  return array.map(x => x )
}

function mapToDouble(array){
  return array.map(x => x * 2)
}

function mapToSquare(array){
  return array.map(x => x * x)
}

function reduceToTotal(sourceArray, startingPoint = 0){
  for(let i = 0; i < sourceArray.length; i++){
      startingPoint += sourceArray[i];
  } 
  return startingPoint
}

function reduceToAllTrue(sourceArray){
  for(let i = 0; i < sourceArray.length; i++){
      if (!sourceArray[i]) return false;
  } 
  return true;
}

function reduceToAnyTrue(sourceArray){
  for(let i = 0; i < sourceArray.length; i++){
      if (sourceArray[i]) return true;
  } 
  return false;
}