function mapToNegativize(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * -1)
    }
    return newArray
}

function mapToNoChange(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}

function mapToDouble(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray
}

function mapToSquare(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * array[i])
    }
    return newArray
}

function reduceToTotal(array, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
       if(!array[i]) {
           return false
       }
    }
    return true 
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) { 
        if(!!array[i]) {
            return true
        }
    }
    return false
}