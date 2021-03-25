function mapToNegativize(sourceArray) {
    let negativized = []
    sourceArray.forEach(element => negativized.push(element * -1))
    return negativized
}

function mapToNoChange(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => newArray.push(element))
    return newArray
}

function mapToDouble(sourceArray) {
    let doubled = []
    sourceArray.forEach(element => doubled.push(element * 2))
    return doubled
}

function mapToSquare(sourceArray) {
    let squared = []
    sourceArray.forEach(element => squared.push(element ** 2))
    return squared
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach((n) => {
        startingPoint += n
    })
    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
            return true
        }
    }
    return false
}


