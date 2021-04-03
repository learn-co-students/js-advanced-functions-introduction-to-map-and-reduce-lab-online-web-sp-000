function mapToNegativize(sourceArray) {
    let negArray = []

    for (let i = 0; i < sourceArray.length; i++) {
        negArray.push(sourceArray[i] * -1);
    }

    return negArray;
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    let doubleArray = []

    for (let i = 0; i < sourceArray.length; i++) {
        doubleArray.push(sourceArray[i] * 2);
    }

    return doubleArray;
}

function mapToSquare(sourceArray) {
    let squared = []

    for (let i = 0; i < sourceArray.length; i++) {
        squared.push(sourceArray[i] * sourceArray[i]);
    }

    return squared;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;

    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i];
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.every(element => !!element == true);
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.some(element => !!element == true);
}