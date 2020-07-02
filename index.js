// Your code here

function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]*-1)
    }
    return newArray
}

function mapToNoChange(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}

function mapToDouble(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]*2)
    }
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]**2)
    }
    return newArray
}

function reduceToTotal(array, startPoint = 0) {
    let value = startPoint
    for (let i = 0; i < array.length; i++) {
        value += array[i]
    }
    return value
}

function reduceToAllTrue(array) {
    let value = true
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            value = false
        }
    }
    return value
}

function reduceToAnyTrue(array) {
    let value = false
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            value = true
        }
    }
    return value
}