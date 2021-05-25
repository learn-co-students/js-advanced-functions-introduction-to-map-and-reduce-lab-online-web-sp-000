// Your code here

function mapToNegativize(sourceArray) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1);
    }
    return newArray;
}

function mapToNoChange(sourceArray) {
    let unchangedArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        unchangedArray.push(sourceArray[i]);
    }
    return unchangedArray
}

function mapToDouble(sourceArray) {
    let doubleArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        doubleArray.push(sourceArray[i] * 2);
    }
    return doubleArray
}

function mapToSquare(sourceArray) {
    let squareArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        squareArray.push(sourceArray[i] * sourceArray[i]);
    }
    return squareArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i];
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i])
        return false;
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i])
        return true;
    }
    return false;
} 
