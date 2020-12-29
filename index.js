function mapToNegativize(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let sum = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        sum = sourceArray[i] + sum
    }
    return sum
}

function reduceToAllTrue(sourceArray) {
    let value = true
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] == false) {
            value = false
        }
    }
    return value
}

function reduceToAnyTrue(sourceArray) {
    let value = false
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] == true) {
            value = true
        }
    }
    return value
}