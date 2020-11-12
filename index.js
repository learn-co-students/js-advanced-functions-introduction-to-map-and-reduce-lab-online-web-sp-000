// Your code here

const mapToNegativize =function(n){
  return  n.map(n => n * -1)
}

const mapToNoChange = function(word){
  return word
}

const mapToDouble = function(num){
  return num.map(num=> num * 2)
}

const mapToSquare = function(num){
  return num.map(num=> num ** 2)
}


function reduceToTotal(sourceArray, startingPoint = 0){
  const reducer = function(accumulator, currentValue){ return accumulator + currentValue }

  return sourceArray.reduce(reducer, startingPoint)
}


function reduceToAllTrue(sourceArray){

  const reducer = function(accumulator, currentValue){  
      if(!!accumulator == true && !!currentValue == true){
          return true;
      } else {
          return false;
      }
  }
  return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){
  const reducer = function(accumulator, currentValue){  
      if(accumulator == true){
          return true
      } else {
          return !!currentValue
      } 
  }
  return sourceArray.reduce(reducer, false)
}
