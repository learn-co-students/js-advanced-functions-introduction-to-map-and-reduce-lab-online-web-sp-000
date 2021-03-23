// Your code here
function mapToNegativize(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        sourceArray[i] = -sourceArray[i]
    }
    return sourceArray;
}
function mapToNoChange(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        sourceArray[i] = sourceArray[i];
    }
    return sourceArray;
}
function mapToDouble(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        sourceArray[i] = 2*sourceArray[i];
    }
    return sourceArray;
}
function mapToSquare(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        sourceArray[i] = sourceArray[i]**2;
    }
    return sourceArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i];
    }
    return total;
}
function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false) {
            return false;
        }
    }
    return true;
}
function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
            return true;
        }
    }
    return false;
}