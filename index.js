// Your code here
function mapToNegativize(sourceArray) {
    let result = []
    for (const value of sourceArray) {result.push((-1 * value));}
    return result
}

function mapToNoChange(sourceArray) {
    let result = []
    for (const value of sourceArray) {result.push(value)}
    return result
}
function mapToDouble(sourceArray) {
    let result = [];
    for (const value of sourceArray) {result.push(value * 2)}
    return result
}
function mapToSquare(sourceArray) {
    let result = [];
    for (const value of sourceArray) {result.push(value ** 2)}
    return result
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let running = startingPoint;
    for (const value of sourceArray) {running += value}
    return running
}
function reduceToAllTrue(sourceArray) {
    let status = true;
    for (const value of sourceArray) {status = status && !!value}
    return status
}

function reduceToAnyTrue(sourceArray) {
    let status = false;
    for (const value of sourceArray) {status = status + !!value}
    return !!status
}
