function mapToNegativize(sourceArray) {
    let arr = []
    for(let i = 0; i < sourceArray.length; i++) {
        arr.push(sourceArray[i] * -1)
    }
    return arr
}

function mapToNoChange(sourceArray){
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    const reducer = function(accumulator, currentValue){ 
        return accumulator + currentValue 
    }

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