function mapToNegativize(array) {
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        let x = array[i] * -1
        array2.push(x)
    }
    return array2
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        let x = array[i] * 2
        array2.push(x)
    }
    return array2
}

function mapToSquare(array) {
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        let x = array[i] * array[i]
        array2.push(x)
    }
    return array2
}

function reduceToTotal(array, startingPoint) {
    if (!startingPoint) {
        return array.reduce(function (total, amount) {
            return total + amount
        })
    }

    if (startingPoint) {
        for (let i = 0; i < array.length; i++) {
            startingPoint += array[i]
        }
        return startingPoint
    }
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == false) {
            return false
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            return true
        }
    }
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            return true
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == false) {
            return false
        }
    }
}