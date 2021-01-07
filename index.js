function mapToNegativize(sourceArray) {
    let a = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        a.push(-1 * sourceArray[i])
    }
    return a
}

function mapToNoChange(sourceArray) {
    let a = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        a.push(sourceArray[i])
    }
    return a
}

function mapToDouble(sourceArray) {
    let a = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        a.push(2 * sourceArray[i])
    }
    return a
}

function mapToSquare(sourceArray) {
    let a = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        a.push(sourceArray[i] * sourceArray[i])
    }
    return a
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}