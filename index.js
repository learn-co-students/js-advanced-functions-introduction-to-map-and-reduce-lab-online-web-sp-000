// Your code here
function mapToNegativize(arr) {
    let returnArr = []

    arr.forEach(e => { returnArr.push(e * -1) })

    return returnArr
}

function mapToNoChange(arr) {
    return arr
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
    let returnVal = 0

    for(start; start < arr.length; start++) {
        returnVal += arr[start]
    }

    return returnVal
}

function reduceToAllTrue(arr) {
    arr.forEach(e => {
        if (!e) { return false }
    })

    return true;
}

function reduceToAnyTrue(arr) {
    arr.forEach(e => {
        if (e) {
            return true;
        }
    })

    return false;
}