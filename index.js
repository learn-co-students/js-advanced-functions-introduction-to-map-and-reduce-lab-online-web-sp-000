// Your code here
function mapToNegativize(a) {
    let result = []
    a.forEach(e => {
        result.push(e *= -1)
    })
    return result
}

function mapToNoChange(a) {
    let result = []
    a.forEach(e => {
        result.push(e)
    })
    return result
}

function mapToDouble(a) {
    let result = []
    a.forEach(e => {
        result.push(e *= 2)
    })
    return result
}

function mapToSquare(a) {
    let result = []
    a.forEach(e => {
        result.push(e *= e)
    })
    return result
}

// REDUCE FUNCTIONS

function reduceToTotal(a, startingPoint = 0) {
    let result = startingPoint
    for (let i = 0; i < a.length; i++) {
        result += a[i]
    }
    return result
}

function reduceToAllTrue(a) {
    for (let i = 0; i < a.length; i++) {
        if (!a[i]) return false
    }
    return true
}

function reduceToAnyTrue(a) {
    for (let i = 0; i < a.length; i++) {
        if (!!a[i]) return true
    }
    return false
}