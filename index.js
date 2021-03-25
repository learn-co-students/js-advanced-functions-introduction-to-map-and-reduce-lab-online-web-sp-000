// Your code here
function mapToNegativize(arr) {
    let r = []
    for (let i= 0; i < arr.length; i++) {
        r.push(-1 * arr[i]);
    }
    return r
}

function mapToNoChange(arr) {
    let r = []
    for (let i = 0; i < arr.length; i++){
        r.push(arr[i])
    }
    return r
}

function mapToDouble(arr) {
    let r = []
    for (let i = 0; i < arr.length; i++){
        r.push(2 * arr[i])
    }
    return r
}

function mapToSquare(arr) {
    let r = []
    for (let i = 0; i < arr.length; i++) {
        r.push(arr[i] * arr[i])
    }
    return r
}

function reduceToTotal(arr, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) return true
    }
    return false
}