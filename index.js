// Your code here
function mapToNegativize(arr) {
    let returnArr = []

    arr.forEach(e => { returnArr.push(e * -1) })

    return returnArr
}

function mapToNoChange(arr) {
    let returnArr = []

    arr.forEach(e => { returnArr.push(e) })

    return returnArr
}

function mapToDouble(arr) {
    let returnArr = []

    arr.forEach(e => { returnArr.push(e * 2) })

    return returnArr
}

function mapToSquare(arr) {
    let returnArr = []

    arr.forEach(e => { returnArr.push(e * e) })

    return returnArr
}

function reduceToTotal(arr, start = 0) {
    let returnVal = start

    for(let i = 0; i < arr.length; i++) {
        returnVal += arr[i]
    }

    return returnVal
}

function reduceToAllTrue(arr) {

    for(let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false
    }

    return true;
}

function reduceToAnyTrue(arr) {

    for(let i = 0; i < arr.length; i++) {
        if (arr[i]) return true
    }

    return false;
}