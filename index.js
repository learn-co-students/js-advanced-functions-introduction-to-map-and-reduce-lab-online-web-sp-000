// Your code here
const mapToNegativize = function(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i] * -1
        newArray.push(element)
    }
    return newArray
}

const mapToNoChange = function (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}

const mapToDouble = function (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray
}

const mapToSquare = function (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2)
    }
    return newArray
}

const reduceToTotal = function(array, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

const reduceToAllTrue = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
        return true 
}

const reduceToAnyTrue = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (!!array[i]) return true
    }
    return false 
}