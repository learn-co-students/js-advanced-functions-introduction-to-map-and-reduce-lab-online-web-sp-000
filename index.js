function mapToNegativize(source) {
    let a = []
    for (let i=0; i < source.length; i++) {
        a.push(-1 * source[i])
    }
    return a
}

function mapToNoChange(source) {
    let a = []
    for (let i = 0; i < source.length; i++) {
        a.push(source[i])
    }
    return a
}

function mapToDouble(source) {
    let a = []
    for (let i = 0; i < source.length; i++) {
        a.push(2 * source[i])
    }
    return a
}

function mapToSquare(source) {
    let a = []
    for (let i = 0; i < source.length; i++) {
        a.push(source[i] ** 2)
    }
    return a
}

function reduceToTotal(source, start=0) {
    let total = start 
    for (let i = 0; i < source.length; i++) {
        total = total + source[i]
    }
    return total
}

function reduceToAllTrue(source) {
    for (let i = 0; i < source.length; i++) {
        if (!source[i]) return false
    }
    return true
}

function reduceToAnyTrue(source) {
    for (let i = 0; i < source.length; i++) {
        if (source[i]) return true
    }
    return false
}