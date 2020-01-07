// Your code here
function mapToNegativize(array) {
  return array.map(i => i * -1)
}

function mapToNoChange(array) {
  return array.map(i => i)
}

function mapToDouble(array) {
  return array.map(i => i * 2)
}

function mapToSquare(array) {
  return array.map(i => i**2)
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
