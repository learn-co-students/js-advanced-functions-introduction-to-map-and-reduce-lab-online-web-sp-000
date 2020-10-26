// Your code here

function mapToNegativize(sourceArray){
  return sourceArray.map(function(num){
    return num * -1;
  })
}

function mapToNoChange(sourceArray){
  return sourceArray.map(function(item){
    return item;
  });
}

function mapToDouble(sourceArray){
  return sourceArray.map(function(num){
    return num * 2;
  })
}

function mapToSquare(sourceArray){
  return sourceArray.map(function(num){
    return num ** 2;
  })
}

function reduceToTotal(sourceArray, startingPoint = 0){
  return startingPoint +++ sourceArray.reduce(function(total, num){
    return total + num;
  })
}

function reduceToAllTrue(sourceArray){
  let isTrue = true;
  for (let i = 0; i < sourceArray.length; i++){
    console.log()
    if (sourceArray[i] == false){
      isTrue = false;
    }
  }
  return isTrue;
}

function reduceToAnyTrue(sourceArray){
  let isTrue = false;
  for (let i = 0; i < sourceArray.length; i++){
    console.log()
    if (sourceArray[i] == true){
      isTrue = true;
      break;
    }
  }
  return isTrue;
}