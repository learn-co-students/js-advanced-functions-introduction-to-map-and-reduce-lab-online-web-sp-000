// Your code here
function mapToNegativize(sourceArray) {
    const newArr = sourceArray.map(x => x * -1)
    return newArr
}

function mapToNoChange(sourceArray) {
    const newArr = sourceArray.map(x => x)
    return newArr
}

function mapToDouble(sourceArray) {
    const newArr = sourceArray.map(x => x * 2)
    return newArr
}

function mapToSquare(sourceArray) {
    const newArr = sourceArray.map(x => x * x)
    return newArr
}

function reduceToTotal(sourceArray, startingPoint) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (startingPoint) {
        const newTotal = sourceArray.reduce(reducer, startingPoint)
        return newTotal
    }
    else {
        const newTotal = sourceArray.reduce(reducer)
        return newTotal
    }
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((acc, val) => acc && Boolean(val), true)
}

function reduceToAnyTrue(sourceArray) {
    const result = sourceArray.reduce((acc, val) => {if (acc === true) {return acc;}
    return Boolean(val);
    }, false)
    return result
}
