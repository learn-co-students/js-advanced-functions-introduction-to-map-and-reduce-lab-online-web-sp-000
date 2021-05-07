// Your code here
function mapToNegativize(array) {
    const newArray = []
    array.forEach(element => {
        newArray.push(element - 2*element)
    });
    return newArray
}

function mapToNoChange(array) {
    const newArray = []
    array.forEach(element => {
        newArray.push(element)
    });
    return newArray
}

function mapToDouble(array) {
    const newArray = []
    array.forEach(element => {
        newArray.push(element*2)
    });
    return newArray
}

function mapToSquare(array) {
    const newArray = []
    array.forEach(element => {
        newArray.push(element*element)
    });
    return newArray
}

function reduceToTotal(array, start=0) {
    let num = start
    array.forEach(element => {
        num = num + element
    });
    return num
}

function reduceToAllTrue(array) {
    const newArray = []
    array.forEach(element => {
        newArray.push(!!element)
    });
    if (newArray.includes(false)) {
        return false
    } else {
        return true
    }
}

function reduceToAnyTrue(array) {
    const newArray = []
    array.forEach(element => {
        newArray.push(!!element)
    });
    if (newArray.includes(true)) {
        return true
    } else {
        return false
    }
}