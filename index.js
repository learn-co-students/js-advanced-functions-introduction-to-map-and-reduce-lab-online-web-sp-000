// Using Map
function mapToNegativize(array){
    return array.map(element => element * -1)
}

function mapToNoChange(array) {
    return array.map(element => element)
}

function mapToDouble(array) {
    return array.map(element => element * 2)
}

function mapToSquare(array) {
    return array.map(element => element ** 2)
}


// Using Reduce

// function reduceToTotal(array) {
//     return array.reduce((total, element) => total + element)
// }

function reduceToTotal(array, startingPoint = 0) {
    if(startingPoint === 0){
        return array.reduce((total, element) => total + element)
    } else{
        startingPoint = 100
        return array.reduce((total, element) => total + element, startingPoint)
    }
}


function reduceToAllTrue(sourceArray) {
    const trueOrFalse = (currentElement) => currentElement ? true : false
    return sourceArray.every(trueOrFalse)
}


function reduceToAnyTrue(sourceArray) {
    const trueOrFalse = (currentElement) => currentElement ? true : false
    return sourceArray.some(trueOrFalse)
}
