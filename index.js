// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(function(element){
        return element * -1
    })
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(function(element){
        return element
    })
}

function mapToDouble(sourceArray) {
    return sourceArray.map(function(element){
        return element * 2
    })
}

function mapToSquare(sourceArray) {
    return sourceArray.map(function(element){
        return element * element
    })
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