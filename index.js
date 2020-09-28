// Your code here
function mapToNegativize(values) {
    let negativeValues = []
    for (let i = 0; i < values.length; i++ ) {
        negativeValues.push(-1 * values[i])
    }
    return negativeValues
}

function mapToNoChange(values) {
    let originalValues = []
    for (let i = 0; i < values.length; i++ ) {
        originalValues.push(values[i])
    }
    return originalValues
}

function mapToDouble(values) {
    let doubledValues = []
    for (let i =0; i < values.length; i++ ) {
        doubledValues.push(2 * values[i])
    }
    return doubledValues
}

function mapToSquare(values) {
    let squaredVales = []
    for (let i = 0; i < values.length; i++ ) {
        squaredVales.push(values[i] * values[i])
    }
    return squaredVales
}

function reduceToTotal(values, base=0) {
    let total = base
    for(let i = 0; i < values.length; i++ ) {
        total = total + values[i]
    }
    return total
}

function reduceToAllTrue(values) {
    for (let i = 0; i < values.length; i++ ) {
        if (!values[i]) return false
    }
    return true
}

function reduceToAnyTrue(values) {
    for (let i = 0; i < values.length; i++ ) {
        if (values[i]) return true
    }
    return false
}