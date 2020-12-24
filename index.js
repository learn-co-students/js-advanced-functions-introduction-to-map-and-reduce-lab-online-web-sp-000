// Your code here

// map-like
function mapToNegativize(sourceArray) {
    const returnArray = []; 
    for (let i=0; i<sourceArray.length; i++) {
        returnArray.push(sourceArray[i] * -1);
    }
    return returnArray;
}

function mapToNoChange(sourceArray) {
    const returnArray = []; 
    for (let i=0; i<sourceArray.length; i++) {
        returnArray.push(sourceArray[i]); 
    }
    return returnArray; 
}

function mapToDouble(sourceArray) {
    const returnArray = []; 
    for (let i=0; i<sourceArray.length; i++) {
        returnArray.push(sourceArray[i] * 2); 
    }
    return returnArray; 
}

function mapToSquare(sourceArray) {
    const returnArray = []; 
    for (let i=0; i<sourceArray.length; i++) {
        returnArray.push(sourceArray[i] ** 2); 
    }
    return returnArray; 
}

// reduce-like 
function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint; 
    for (let i=0; i<sourceArray.length; i++) {
        total += sourceArray[i];
    }
    return total; 
}

function reduceToAllTrue(sourceArray) {
    let status = true; 
    for (let i=0; i<sourceArray.length; i++) {
        if (!sourceArray[i]) {
            status = false; 
            return status; 
        }
    }
    return status;
}

function reduceToAnyTrue(sourceArray) {
    let status = false; 
    for (let i=0; i<sourceArray.length; i++) {
        if (!!sourceArray[i]) {
            status = true; 
            return status; 
        }
    }
    return status;
}