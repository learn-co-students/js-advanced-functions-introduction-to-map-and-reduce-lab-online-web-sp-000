const mapToNegativize = function(sourceArray) {
    let newArray = []

    for (let index = 0; index < sourceArray.length; index++) {
        newArray.push(sourceArray[index] * -1)
    }
    return newArray
}

const mapToNoChange = function(sourceArray) {
    let newArray = sourceArray
    return newArray
}

const mapToDouble = function(sourceArray) {
    let newArray = []

    for (let index = 0; index < sourceArray.length; index++) {
        newArray.push(sourceArray[index] * 2)
    }
    return newArray
}

const mapToSquare = function(sourceArray) {
    let newArray = []

    for (let index = 0; index < sourceArray.length; index++) {
        newArray.push(sourceArray[index] ** 2)
    }
    return newArray
}

const reduceToTotal = function(sourceArray, startingPoint = 0) {
    
    for (let index = 0; index < sourceArray.length; index++) {
        startingPoint += sourceArray[index];    
    }
    return startingPoint
}

const reduceToAllTrue = function(sourceArray) { 

    for (let index = 0; index < sourceArray.length; index++) {
        if (!sourceArray[index]) { return false }  
    }
    return true
}

const reduceToAnyTrue = function(sourceArray) { 

    for (let index = 0; index < sourceArray.length; index++) {
        if (sourceArray[index]) { return true }  
    }
    return false
}


