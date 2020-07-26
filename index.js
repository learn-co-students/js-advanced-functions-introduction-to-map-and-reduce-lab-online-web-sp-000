// Your code here
const sourceArray = [1,2,3,4,5]

function mapToNegativize(sourceArray) {
   return sourceArray.map(x => x * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => Math.pow(x, 2))
}

function reduceToTotal(sourceArray, startP = 0) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return sourceArray.reduce(reducer, startP)
}

function reduceToAllTrue(sourceArray) {
    const reducer = function(accumulator, currentValue) {
        return !!accumulator == true && !!currentValue == true;
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray) {
    const reducer = function (accumulator, currentValue) {
        if (!!accumulator == true) {
            return true
        } else {
            return !!currentValue
        }
    }
    return sourceArray.reduce(reducer, false)
}
