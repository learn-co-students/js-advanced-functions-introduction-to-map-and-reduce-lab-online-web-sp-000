function mapToNegativize(sourceArray) {
    let negArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let x = sourceArray[i] * -1
        negArray.push(x)
    }
    return negArray
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let dblArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let x = sourceArray[i] * 2
        dblArray.push(x)
    }
    return dblArray
}

function mapToSquare(sourceArray) {
    let squareArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let x = sourceArray[i] * sourceArray[i]
        squareArray.push(x)
    }
    return squareArray
}

// reduce

function reduceToTotal(sourceArray, startingPoint=0) {
    for (let i = 0; i < sourceArray.length; i++) {
        startingPoint += 2
    }
    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] == false) {
            return false
            break
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true
        }
    }
    return false      
}

