// Your code here
function mapToNegativize(sourceArray) {
    const negative = sourceArray.map(num => num * -1)
    return negative
}

function mapToNoChange(sourceArray) {
    const change = sourceArray.map(num => num)
    return change
}

function mapToDouble(sourceArray) {
    const double = sourceArray.map(num => num * 2)
    return double
}

function mapToSquare(sourceArray) {
    const square = sourceArray.map(num => num ** 2)
    return square
}


function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i];
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (const el of sourceArray) {
        if (!el) {
            return false
        } 
    }   
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (const el of sourceArray) {
        if (!!el) {
            return true 
        }
    }
    return false
}

