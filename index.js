// Your code here
/*
map-like
mapToNegativize(sourceArray)
mapToNoChange(sourceArray)
mapToDouble(sourceArray)
mapToSquare(sourceArray)
Remember, all map methods return a new Array.

reduce-like
reduceToTotal(sourceArray, startingPoint)
reduceToAllTrue(sourceArray)
reduceToAnyTrue(sourceArray)
 */

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
    })
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
    })
    return doubledArray
}

const mapToSquare = (sourceArray) => {
    // return array with original values squared
    const squaredArray = []
    sourceArray.forEach(value => {
        squaredArray.push(value * value)
    })
    return squaredArray
}