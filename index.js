// Your code here

function mapToNegativize (array) {

    let retArray = []
    for (const el of array) {
        retArray.push(-1 * el)
    }
    return retArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let retArray = []
    for (const el of array) {
        retArray.push(el + el)
    }
    return retArray
}

function mapToSquare(array) {
    let retArray = []
    for (const el of array) {
        retArray.push(el * el)
    }
    return retArray
}

function reduceToTotal(array, startingPoint = 0) {
    let total = startingPoint
    for (const el of array) {
        total += el
    }
    return total
}

function reduceToAllTrue(array) {
    let agg = array[0]
    for (const el of array) {
        if (el) {
            agg = true
        } else {
            agg = false
        }
        
    }

    return agg
}

function reduceToAnyTrue(array) {
    let agg = array[0]
    for (const el of array) {
        if (el) {
            return true
        } else {
            agg = false
        }
    }

    return agg
}