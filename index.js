// Your code here
function mapToNegativize(val) {
    let a = []
    for (let i = 0; i < val.length; i++) {
        a.push (-1 * val[i])
    }
    return a
}

function mapToNoChange(val) {
    let a = []
    for (let i = 0; i < val.length; i++) {
        a.push (val[i])
    }
    return a
}

function mapToDouble(val) {
    let a = []
    for (let i = 0; i < val.length; i++) {
        a.push (val[i] * 2)
    }
    return a
}

function mapToSquare(val) {
    let a = []
    for (let i = 0; i < val.length; i++) {
        a.push (val[i] ** 2)
    }
    return a
}

function reduceToTotal(val, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < val.length; i++) {
        total = total + val[i]
    }
    return total
}

function reduceToAllTrue(val) {
    for (let i = 0; i < val.length; i++) {
        if (!val[i]) return false
    }
    return true
}

function reduceToAnyTrue(val) {
    for (let i = 0; i < val.length; i++) {
        if (val[i]) return true
    }
    return false
}