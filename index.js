function mapToNegativize(sourceArray) {
    let result = [];
    for (var i = 0; i < sourceArray.length; i++) {
        result.push(-sourceArray[i])
    }
    return result;
}

function mapToNoChange(sourceArray) {
    let result = sourceArray;
    return result;
}

function mapToDouble(sourceArray) {
    let result = [];
    for (var i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i] * 2)
    }
    return result;
}

function mapToSquare(sourceArray) {
    let result = [];
    for (var i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i]*=sourceArray[i])
    }
    return result;
}

function reduceToTotal(array, start=0) {
    let total = start;
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total;
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            return true
        }
    }
    return false
}