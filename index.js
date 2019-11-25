// Your code here

function mapToNegativize(array) {
    const array1 = array.map(x => x * -1)
    return array1
}

function mapToNoChange(array) {
    const array1 = array.map(x => x)
    return array1
}

function mapToDouble(array) {
    const array1 = array.map(x => x * 2)
    return array1
}

function mapToSquare(array) {
    const array1 = array.map(x => x * x)
    return array1
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.map(num => startingPoint += num)
    return startingPoint
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false;
    }
    return true;
};

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true;
    }
    return false;
};

