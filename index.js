// Your code here

function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach(ting => newArray.push(ting *= -1));
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    sourceArray.forEach(ting => newArray.push(ting));
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    sourceArray.forEach(ting => newArray.push(ting * 2));
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    sourceArray.forEach(ting => newArray.push(ting ** 2));
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(ting => startingPoint += ting);
    return startingPoint
}


function reduceToAllTrue(sourceArray) {
    for (let element of sourceArray) {
        if (element == false) {
            return false;
        }
    }

    return true;
}


function reduceToAnyTrue(sourceArray) {
    for (let element of sourceArray) {
        if (element == true) {
            return true;
        }
    }

    return false;
}