// Your code here
function mapToNegativize (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = -array[i]
    }
    return newArray
}

function mapToNoChange (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i]
    }
    return newArray
}

function mapToDouble (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i] * 2
    }
    return newArray
}

function mapToSquare (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i] ** 2
    }
    return newArray
}

function reduceToTotal (array, start=0) {
    for (let i = 0; i < array.length; i++) {
        start += array[i]
    }
    return start
}

function reduceToAllTrue (array) {
    let value = true
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            value = false
        } 
    }
    return value
}

function reduceToAnyTrue (array) {
    let value = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            value = true
        }
    }
    return value
}