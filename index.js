const { should } = require("chai");

// Your code here
function mapToNegativize(sourceArray) {
    let returnArray = [];

    for (var i = 0; i < sourceArray.length; i++) {
        returnArray.push(sourceArray[i] * -1); 
    }

    return returnArray;
}

function mapToNoChange(sourceArray) {
    let returnArray = [];

    for (var i = 0; i < sourceArray.length; i++) {
        returnArray.push(sourceArray[i]); 
    }

    return returnArray;
}

function mapToDouble(sourceArray) {
    let returnArray = [];

    for (var i = 0; i < sourceArray.length; i++) {
        returnArray.push(sourceArray[i]*2); 
    }

    return returnArray;
}

function mapToSquare(sourceArray) {
    let returnArray = [];

    for (var i = 0; i < sourceArray.length; i++) {
        returnArray.push(sourceArray[i]**2); 
    }

    return returnArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let returnValue = startingPoint;

    for (var i = 0; i < sourceArray.length; i++) {
        returnValue += sourceArray[i]; 
    }

    return returnValue;
}

function reduceToAllTrue(sourceArray) {
    let returnValue = false;

    for (var i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            returnValue = true;
        } 
        else {
            returnValue = false;
            break;
        }
    }
    
    return returnValue;
}

function reduceToAnyTrue(sourceArray) {
    let returnValue = false;

    for (var i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            returnValue = true;
            break;
        } 
        else {
            returnValue = false;
        }
    }
    
    return returnValue;
}