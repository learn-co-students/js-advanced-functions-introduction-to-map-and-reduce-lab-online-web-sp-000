function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
}

 function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x)
 }

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x)
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce(function(a, b) {
        return a + b
    }, startingPoint);
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((a, b) => {
        if (a === false || b === false) return false;
        return true;
    });
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((a, b) => {
        if (a === true || b === true) return true;
        return false;
    });   
}