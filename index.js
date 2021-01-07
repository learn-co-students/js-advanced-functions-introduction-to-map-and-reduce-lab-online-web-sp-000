// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(arr => arr * -1);
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(arr => arr);
}

function mapToDouble(sourceArray) {
    return sourceArray.map(arr => arr * 2);
}

function mapToSquare(sourceArray) {
    return sourceArray.map(arr => arr * arr);
}

function reduceToTotal(sourceArray, startingPoint = null) {
    const reducer = (accumulator, value) => accumulator + value;
        return sourceArray.reduce(reducer, startingPoint);
}

function reduceToAllTrue(sourceArray) {
    const truthyValue = (currentValue) => currentValue ? true : false;
    return sourceArray.every(truthyValue);
}

function reduceToAnyTrue(sourceArray) {
    const someTrue = (currentValue) => currentValue ? true : false;
    return sourceArray.some(someTrue);
}