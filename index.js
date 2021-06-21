function mapToNegativize(sourceArray){
 return sourceArray.map(x => x * -1)

}



function mapToNoChange(sourceArray){
    sourceArray = sourceArray.map(x =>x)
    return sourceArray

}

function mapToDouble(sourceArray){
    sourceArray = sourceArray.map(x => x * 2)
    return sourceArray

}

function mapToSquare(sourceArray){
  sourceArray = sourceArray.map(x => x * x)
  return sourceArray

}

function reduceToTotal(sourceArray, start = 0){
const reducer = (accumulator, currentValue) => accumulator + currentValue
return sourceArray.reduce(reducer, start)
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
