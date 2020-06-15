// Your code here
function mapToNegativize(sourceArray) {
    const newArray = []
    for (const ele of sourceArray) {
        const negativeEle = ele * -1;
        newArray.push(negativeEle);
    }
    return newArray;
}

function mapToNoChange(sourceArray) {
    const newArray = [];
    for (const ele of sourceArray) {
        newArray.push(ele);
    }
    return newArray;
}

function mapToDouble(sourceArray) {
    const newArray = []
    for (const ele of sourceArray) {
        const doubleEle = ele * 2;
        newArray.push(doubleEle);
    }
    return newArray;
}

function mapToSquare(sourceArray) {
    const newArray = []
    for (const ele of sourceArray) {
        const squareEle = ele ** 2;
        newArray.push(squareEle);
    }
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    for (const num of sourceArray) {
        startingPoint += num;
    }
    return startingPoint;
}

function reduceToAllTrue(sourceArray) {
    for (const ele of sourceArray) {
        if (ele === false) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (const ele of sourceArray) {
        if (ele === true) {
            return true
        }
    }
    return false
}