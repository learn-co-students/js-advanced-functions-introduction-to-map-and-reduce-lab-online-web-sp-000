// Your code here

function mapToNegativize(sourceArray) {
    const map1 = sourceArray.map(x => x * -1);
    return map1;
}

function mapToNoChange(sourceArray) {
    const map2 = sourceArray;
    return map2;
}

function mapToDouble(sourceArray) {
    const map3 = sourceArray.map(x => x * 2);
    return map3;
}

function mapToSquare(sourceArray) {
    const map4 = sourceArray.map(x => x * x);
    return map4;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (let i=0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i=0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}