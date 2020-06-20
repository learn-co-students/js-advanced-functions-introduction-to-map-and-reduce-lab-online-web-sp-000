// Your code here

const mapToNegativize = myArray => {
    return myArray.map(newArray => newArray * -1)
}

const mapToNoChange = myArray => {
    return myArray.map(newArray => newArray)
}

const mapToDouble = myArray => {
    return myArray.map(newArray => newArray * 2)
}

const mapToSquare = myArray => {
    return myArray.map(newArray => newArray ** 2)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((a,c) => {
        a = a + c
        return a
    }, startingPoint
    )
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ){
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < src.length; i++) {
        if (src[i]) return true
    }
    return false
}