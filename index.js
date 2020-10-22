// Your code here
function mapToNegativize(sourceArray) {
    let mapArr = [];

    for (let i = 0; i < sourceArray.length; i++) {
        mapArr.push(sourceArray[i] * -1);
    }
    return mapArr;
}

function mapToNoChange(sourceArray) {
    const mapArr = [];

    for (let i = 0; i < sourceArray.length; i++) {
        mapArr.push(sourceArray[i]);
    }
    return mapArr ;   
}

function mapToDouble(sourceArray) {
    const mapArr = [];

    for (let i = 0; i < sourceArray.length; i++) {
        mapArr.push(sourceArray[i] * 2);
    }
    return mapArr;
}

function mapToSquare(sourceArray) {
    const mapArr = [];

    for (let i = 0; i < sourceArray.length; i++) {
        mapArr.push(sourceArray[i] * sourceArray[i]);
    }
    return mapArr;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let reduce = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        reduce += sourceArray[i];
    }
    return reduce;
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false;
        }
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true;
        }
    }
    return false;
}