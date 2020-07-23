// Your code here
function mapToNegativize(values) {
    for (let i = 0; i < values.length; i++) {
        values[i] *= -1
    }
    return values
}

function mapToNoChange(valueArray) {
    return valueArray
}

function mapToDouble(valueArray) {
    for (let i = 0; i < valueArray.length; i++) {
        valueArray[i] *= 2
    }
    return valueArray
}

function mapToSquare(valueArray) {
    for (let i = 0; i < valueArray.length; i++) {
        valueArray[i] **= 2
    }
    return valueArray
}

function reduceToTotal(sourceArray, startNumber = 0) {
    var total = startNumber
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    var truthy = true 
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false) {
            truthy = false
        }
    }
    return truthy
}

function reduceToAnyTrue(sourceArray) {
    var falsy = false 
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
            falsy = true
        }
    }
    return falsy
}