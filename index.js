// Your code here
const mapToNegativize = function(sourceArray) {
    let newArray = sourceArray.map(x => x * -1)
    return newArray
}
const mapToNoChange = function(sourceArray) {
    return sourceArray
}

const mapToDouble = function(sourceArray) {
    let newArray = sourceArray.map(x => x * 2)
    return newArray
}

const mapToSquare = function(sourceArray) {
    let newArray = sourceArray.map(x => x * x)
    return newArray
}

const reduceToTotal = function(sourceArray, startingPoint = 0) {
    for (let i = 0; i < sourceArray.length; i++){ 
         startingPoint += sourceArray[i]
    }
     return startingPoint
}

const reduceToAllTrue = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

const reduceToAnyTrue = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}

