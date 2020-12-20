const mapToNegativize = (sourceArray) => {
    // make all values in sourceArray negative
    const negativesArray = []
    sourceArray.forEach(value => {
        if (value > 0) {
            // convert postives to negative
            negativesArray.push(value - (value * 2))
        } else {
            // convert negatives to positives
            negativesArray.push(value * -1)
        }
    });
    return negativesArray
}

const mapToNoChange = (sourceArray) => {
    return sourceArray
}

const mapToDouble = (sourceArray) => {
    // return array with original values * 2
    const doubledArray = []
    sourceArray.forEach(value => {
        doubledArray.push(value * 2)
    });
    return doubledArray
}

const mapToSquare = (sourceArray) => {
    // return array with original values squared
    const squaredArray = []
    sourceArray.forEach(value => {
        squaredArray.push(value * value)
    });
    return squaredArray
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let total = 0
    sourceArray.forEach(value => {
        // returns a running total when not given a starting point
        total += value
    });
    //returns a running total when given a starting point
    total += startingPoint
    return total
}

const reduceToAllTrue = (sourceArray) => {
    // returns true when all values are truthy
    let allValuesTruthy = true
    sourceArray.forEach(value => {
        // returns true when a true value is present
        if (!value) {
            allValuesTruthy = false
        }
    });
    return allValuesTruthy
}

const reduceToAnyTrue = (sourceArray) => {
    // returns false when no true value is present
    let trueValuePresent = false
    sourceArray.forEach(value => {
        // returns true when a true value is present
        if (value) {
            trueValuePresent = true
        }
    });
    return trueValuePresent
}