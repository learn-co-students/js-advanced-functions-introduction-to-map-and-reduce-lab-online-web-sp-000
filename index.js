// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x)

}

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x ** 2)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    // const reducer = function(total, startingPoint) {
    //     return total + startingPoint;
    // }
    // return sourceArray.reduce(reducer, 0);
    const reducer = (accumulator, value) => accumulator + value;
    return sourceArray.reduce(reducer, startingPoint);
}

function reduceToAllTrue(sourceArray) {
    const reducer = (acc, value) => acc && !!value;
    return sourceArray.reduce(reducer);
}

function reduceToAnyTrue(sourceArray) {
    const reducer = (acc, value) => acc || !!value; 
    return sourceArray.reduce(reducer);
}