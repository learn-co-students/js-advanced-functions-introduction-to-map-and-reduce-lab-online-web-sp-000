// Your code here

function mapToNegativize(arrValue){
    let array = []

    for(let i = 0; i < arrValue.length; i++){
        array.push(-1 * arrValue[i])
    }
    return array 
}

function mapToNoChange(arrValue) {
    let array = []

    for (let i = 0; i < arrValue.length; i++) {
        array.push(arrValue[i])
    }
    return array
}

function mapToDouble(arrValue) {
    let array = []

    for (let i = 0; i < arrValue.length; i++) {
        array.push(2 * arrValue[i])
    }
    return array
}

function mapToSquare(arrValue) {
    let array = []
    for (let i = 0; i < arrValue.length; i++) {
        array.push(arrValue[i] * arrValue[i])
    }
    return array
}

function reduceToTotal(arrValue, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < arrValue.length; i++) {
        total = total + arrValue[i]
    }
    return total
}

function reduceToAllTrue(arrValue) {
    for (let i = 0; i < arrValue.length; i++) {
        if (!arrValue[i]) return false
    }
    return true
}

function reduceToAnyTrue(arrValue) {
    for (let i = 0; i < arrValue.length; i++) {
        if (arrValue[i]) return true
    }
    return false
}


