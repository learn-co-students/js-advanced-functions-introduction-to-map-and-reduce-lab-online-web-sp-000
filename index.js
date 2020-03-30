// Your code here
function mapToNegativize(sourceArray) {
    const returnArray = []
    for (let i=0; i<sourceArray.length; i++){
        returnArray.push((sourceArray[i])*(-1))
    }
    return returnArray
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    const returnArray = []
    for (let i=0; i<sourceArray.length; i++){
        returnArray.push((sourceArray[i])*(2))
    }
    return returnArray
}

function mapToSquare(sourceArray) {
    const returnArray = []
    for (let i=0; i<sourceArray.length; i++){
        returnArray.push((sourceArray[i])**2)
    }
    return returnArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let returnValue = startingPoint
    for (let i=0; i<sourceArray.length; i++){
        returnValue += sourceArray[i]
    }
    return returnValue
}

function reduceToAllTrue(sourceArray) {
    let returnValue = true
    for (let i=0; i<sourceArray.length; i++){
        if (!sourceArray[i]) {
            return false
        }
    }
    return returnValue
}

function reduceToAnyTrue(sourceArray) {
    let returnValue = false
    for (let i=0; i<sourceArray.length; i++){
        if (sourceArray[i]) {
            return true
        }
    }
    return returnValue
}
