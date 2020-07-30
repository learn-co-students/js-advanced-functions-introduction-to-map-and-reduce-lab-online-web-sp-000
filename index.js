// Your code here



function mapToNegativize(array) {
    let newArr = []
    for (const num in array) {
        const multiply = array[num] * -1
        newArr.push(multiply)
    }
    return newArr
}

function mapToNoChange(array) {
    let newArr = [...array]
    return newArr
}

function mapToDouble(array) {
    let newArr = []
    for (const num in array) {
        const double = array[num] * 2
        newArr.push(double)
    }
    return newArr
}

function mapToSquare(array) {
    let newArr = []
    for (const num in array) {
        const square = array[num] ** 2
        newArr.push(square)
    }
    return newArr
}

const reduceToTotal = (array, start = 0) => {
    for (let i = 0; i < array.length; i++) {
        start += array[i]
    }
    return start
}

const reduceToAllTrue = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            return false
        }
    }
    return true
}

const reduceToAnyTrue = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            return true
        }
    }
    return false
}

