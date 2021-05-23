// Your code here
function mapToNegativize(sourceArray) {
    let result = [];
    sourceArray.forEach(element => {
        result.push(element * -1);
    })
    return result;
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    let result = [];
    sourceArray.forEach(element => {
        result.push(element * 2);
    });
    return result;
}

function mapToSquare(sourceArray) {
    let result = [];
    sourceArray.forEach(element => {
        result.push(element ** 2);
    });
    return result;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(element => {
        startingPoint += element;
    });
    return startingPoint;
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === false) {
            return false;
        }
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === true) {
            return true;
        }
    }
    return false;
}